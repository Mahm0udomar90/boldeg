import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { categories, products, formatPrice } from "@/lib/site";
import { useLang, type L } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/shop/")({
  head: () => ({
    meta: [
      { title: "Collection — Bold | Objects for Modern Interiors" },
      {
        name: "description",
        content:
          "Browse the Bold collection: quietly luxurious covers, stands and vessels for living rooms, terraces and modern Egyptian homes.",
      },
      { property: "og:title", content: "Collection — Bold" },
      {
        property: "og:description",
        content: "Quietly luxurious objects for living rooms, terraces and modern homes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Shop,
});

const copy = {
  label: { en: "The Collection", ar: "المجموعة" } as L,
  title: { en: "A showroom,", ar: "صالة عرض," } as L,
  titleItalic: { en: "not a shelf.", ar: "لا رفّ منتجات." } as L,
  view: { en: "View piece", ar: "عرض القطعة" } as L,
  out: { en: "Out of stock", ar: "غير متوفر حالياً" } as L,
  empty: {
    en: "New pieces are being finished. Please check back shortly.",
    ar: "قطع جديدة قيد التشطيب. عاود الزيارة قريباً.",
  } as L,
};

function Shop() {
  const { t, lang } = useLang();
  const [active, setActive] = useState("All");

  const list = products.filter((p) =>
    active === "All" ? true : active === "New" ? p.newArrival : p.category === active,
  );

  return (
    <div className="bg-ivory">
      <SiteHeader />

      <section className="px-6 pb-16 pt-40 md:px-12 md:pt-52">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="label-xs text-gold">{t(copy.label)}</p>
            <h1 className="mt-8 max-w-3xl font-display text-5xl leading-[1.05] text-charcoal md:text-7xl">
              {t(copy.title)} <span className="italic">{t(copy.titleItalic)}</span>
            </h1>
          </Reveal>

          <div className="hairline mt-16" />
          <div className="flex flex-wrap gap-x-10 gap-y-4 py-6">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={cn(
                  "label-xs transition-colors duration-500",
                  active === c.key ? "text-charcoal" : "text-stone hover:text-charcoal/70",
                )}
              >
                {t(c.label)}
                {active === c.key && (
                  <span className="ml-3 inline-block h-1 w-1 rotate-45 bg-gold align-middle" />
                )}
              </button>
            ))}
          </div>
          <div className="hairline" />
        </div>
      </section>

      <section className="px-6 pb-32 md:px-12 md:pb-44">
        <div className="mx-auto grid max-w-[1600px] gap-x-10 gap-y-24 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 110}>
              <Link to="/shop/$slug" params={{ slug: p.slug }} className="group block">
                <div className="relative overflow-hidden bg-sand/50">
                  <img
                    src={p.images[0]}
                    alt={`${t(p.name)} — Bold`}
                    className={cn("img-luxe aspect-[4/5] w-full object-cover", p.inStock === false && "opacity-60 grayscale-[30%]")}
                    loading="lazy"
                  />
                  {p.inStock === false && (
                    <span className="absolute start-5 top-5 border border-charcoal/20 bg-ivory/90 px-3 py-1.5 label-xs text-charcoal">
                      {t(copy.out)}
                    </span>
                  )}
                </div>
                <div className="mt-7">
                  <div className="flex items-start justify-between gap-6">
                    <h2 className="font-display text-2xl text-charcoal">{t(p.name)}</h2>
                    <p className="label-xs whitespace-nowrap pt-2 text-charcoal/70">
                      {formatPrice(p.price, lang)}
                    </p>
                  </div>
                  <p className="mt-3 max-w-[34ch] text-xs leading-relaxed text-stone">{t(p.tagline)}</p>
                  <span className="mt-6 inline-block label-xs text-charcoal/50 transition-colors duration-500 group-hover:text-charcoal">
                    {t(copy.view)} &rarr;
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {list.length === 0 && (
          <p className="mx-auto max-w-[1600px] py-24 text-center text-sm text-stone">{t(copy.empty)}</p>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}
