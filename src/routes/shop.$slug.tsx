import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { WhatsAppOrderButton } from "@/components/WhatsAppOrderButton";
import { productBySlug, products, formatPrice, orderMessage } from "@/lib/site";
import { useLang, type L } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/shop/$slug")({
  loader: ({ params }) => {
    const product = productBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Piece unavailable — Bold" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    const title = `${product.name.en} — Bold`;
    return {
      meta: [
        { title },
        { name: "description", content: product.description.en },
        { property: "og:title", content: title },
        { property: "og:description", content: product.description.en },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProductPage,
  notFoundComponent: PieceNotFound,
});

const copy = {
  gone: { en: "This piece is no longer listed", ar: "هذه القطعة لم تعد معروضة" } as L,
  back: { en: "Return to the collection", ar: "العودة إلى المجموعة" } as L,
  finish: { en: "Finish", ar: "التشطيب" } as L,
  quantity: { en: "Quantity", ar: "الكمية" } as L,
  details: { en: "Details", ar: "التفاصيل" } as L,
  also: { en: "Also in the collection", ar: "أيضاً في المجموعة" } as L,
  out: { en: "Out of stock — check back soon", ar: "غير متوفر حالياً — عاود الزيارة قريباً" } as L,
  variantOut: { en: "Currently unavailable", ar: "غير متوفر حالياً" } as L,
  delivery: {
    en: "Handmade to order — delivery within two weeks.",
    ar: "تُصنع القطعة يدوياً حسب الطلب — التسليم خلال أسبوعين.",
  } as L,
};

function PieceNotFound() {
  return (
    <div className="bg-ivory">
      <SiteHeader />
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display text-4xl text-charcoal">This piece is no longer listed</h1>
        <Link to="/shop" className="mt-8 label-xs link-underline text-stone">
          Return to the collection
        </Link>
      </div>
      <SiteFooter />
    </div>
  );
}

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { t, lang } = useLang();
  const [variantIndex, setVariantIndex] = useState(() => {
    const firstAvailable = product.variants.findIndex((v) => v.available !== false);
    return firstAvailable === -1 ? 0 : firstAvailable;
  });
  const [qty, setQty] = useState(1);
  const [openDetail, setOpenDetail] = useState<string | null>(product.details[0]?.title.en ?? null);

  const variant = product.variants[variantIndex];
  const message = orderMessage({
    name: t(product.name),
    variant: variant ? t(variant) : "",
    quantity: qty,
    price: product.price,
    lang,
  });
  const others = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div className="bg-ivory pb-24 md:pb-0">
      <SiteHeader />

      <section className="px-6 pt-32 md:px-12 md:pt-44">
        <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-24">
          {/* Gallery */}
          <div className="space-y-4 md:space-y-6">
            {product.images.map((src, i) => (
              <Reveal key={src} delay={i * 60} className="overflow-hidden bg-sand/50">
                <img
                  src={src}
                  alt={`${t(product.name)} — Bold — ${i + 1}`}
                  className="img-luxe w-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </Reveal>
            ))}
          </div>

          {/* Info */}
          <div className="lg:sticky lg:top-32 lg:self-start lg:py-6">
            <p className="label-xs text-gold">BOLD</p>
            <h1 className="mt-6 font-display text-4xl leading-tight text-charcoal md:text-5xl">
              {t(product.name)}
            </h1>
            <p className="mt-6 max-w-sm text-sm leading-loose text-stone">{t(product.description)}</p>

            <div className="hairline my-10" />
            <p className="font-display text-2xl text-charcoal">{formatPrice(product.price, lang)}</p>

            {product.variants.length > 1 && (
              <div className="mt-10">
                <p className="label-xs text-stone">{t(copy.finish)}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {product.variants.map((v, i) => {
                    const unavailable = v.available === false;
                    return (
                      <button
                        key={v.en}
                        onClick={() => !unavailable && setVariantIndex(i)}
                        disabled={unavailable}
                        aria-disabled={unavailable}
                        title={unavailable ? t(copy.variantOut) : undefined}
                        className={cn(
                          "border px-5 py-3 label-xs transition-colors duration-500",
                          unavailable
                            ? "cursor-not-allowed border-border text-stone/40 line-through"
                            : variantIndex === i
                              ? "border-charcoal text-charcoal"
                              : "border-border text-stone hover:border-charcoal/40",
                        )}
                      >
                        {t(v)}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="mt-10">
              <p className="label-xs text-stone">{t(copy.quantity)}</p>
              <div className="mt-4 inline-flex items-center border border-border">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="px-5 py-3 text-charcoal/60 hover:text-charcoal"
                >
                  &minus;
                </button>
                <span className="w-10 text-center text-sm text-charcoal">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="px-5 py-3 text-charcoal/60 hover:text-charcoal"
                >
                  +
                </button>
              </div>
            </div>

            {product.inStock === false ? (
              <div className="mt-10 hidden w-full border border-border px-6 py-4 text-center label-xs text-stone md:block">
                {t(copy.out)}
              </div>
            ) : (
              <>
                <WhatsAppOrderButton message={message} className="mt-10 hidden w-full md:inline-flex" />
                <p className="mt-4 hidden text-xs leading-relaxed text-stone md:block">{t(copy.delivery)}</p>
              </>
            )}

            {/* Details accordion */}
            <div className="mt-14">
              <p className="label-xs text-stone">{t(copy.details)}</p>
              <div className="mt-6 border-t border-border">
                {product.details.map((d) => {
                  const open = openDetail === d.title.en;
                  return (
                    <div key={d.title.en} className="border-b border-border">
                      <button
                        onClick={() => setOpenDetail(open ? null : d.title.en)}
                        className="flex w-full items-center justify-between gap-6 py-5 text-left label-xs text-charcoal"
                      >
                        {t(d.title)}
                        <span
                          className={cn("text-stone transition-transform duration-500", open && "rotate-45")}
                          aria-hidden
                        >
                          +
                        </span>
                      </button>
                      <div
                        className={cn(
                          "overflow-hidden transition-[max-height,opacity] duration-700",
                          open ? "max-h-56 opacity-100" : "max-h-0 opacity-0",
                        )}
                      >
                        <p className="pb-6 text-sm leading-loose text-stone">{t(d.body)}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="px-6 py-28 md:px-12 md:py-40">
        <div className="mx-auto max-w-[1600px]">
          <p className="label-xs text-gold">{t(copy.also)}</p>
          <div className="mt-12 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <Link to="/shop/$slug" params={{ slug: p.slug }} className="group block">
                  <div className="overflow-hidden bg-sand/50">
                    <img
                      src={p.images[0]}
                      alt={`${t(p.name)} — Bold`}
                      className="img-luxe aspect-[4/5] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-6 flex items-start justify-between gap-6">
                    <h3 className="font-display text-xl text-charcoal">{t(p.name)}</h3>
                    <p className="label-xs pt-1 text-charcoal/70">{formatPrice(p.price, lang)}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />

      {/* Sticky mobile CTA */}
      {product.inStock !== false && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-ivory/95 px-5 py-4 backdrop-blur md:hidden">
          <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4">
            <p className="label-xs text-charcoal/70">{formatPrice(product.price, lang)}</p>
            <WhatsAppOrderButton message={message} className="w-full px-4 py-3.5" />
          </div>
          <p className="mt-2 text-center text-[11px] leading-relaxed text-stone">{t(copy.delivery)}</p>
        </div>
      )}
    </div>
  );
}