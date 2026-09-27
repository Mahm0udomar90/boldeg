import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { images, products, formatPrice, BRAND } from "@/lib/site";
import { useLang, type L } from "@/lib/i18n";
const luminaHeroUrl = "/lumina-hero.mp4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bold — Elevate Your Space | Design Objects for Modern Interiors" },
      {
        name: "description",
        content:
          "Bold designs quietly luxurious objects for contemporary Egyptian interiors — sculpted covers, solid oak stands and vessels. Corners that pulse with life.",
      },
      { property: "og:title", content: "Bold — Elevate Your Space" },
      {
        property: "og:description",
        content: "Design objects for modern Egyptian interiors. Corners that pulse with life.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const copy = {
  place: { en: "Cairo · Est. 2026", ar: "القاهرة · تأسست ٢٠٢٦" } as L,
  heroLine: { en: "Elevate your space.", ar: "ارتقِ بمساحتك." } as L,
  heroSub: {
    en: "Designed for spaces that value every detail.",
    ar: "مصمَّم للمساحات التي تهتم بكل تفصيلة.",
  } as L,
  explore: { en: "Explore Collection", ar: "استكشف المجموعة" } as L,
  s1label: { en: "01 — The art of everyday living", ar: "٠١ — فنّ الحياة اليومية" } as L,
  s1title: {
    en: "Objects should belong to the space they live in.",
    ar: "القطعة يجب أن تنتمي إلى المساحة التي تعيش فيها.",
  } as L,
  s1body: {
    en: "We begin with the room, not the product. Every Bold piece is proportioned, textured and finished so that it reads as architecture — a quiet volume that settles into stone, travertine and warm oak.",
    ar: "نبدأ من الغرفة، لا من المنتج. كل قطعة من Bold مدروسة في نسبها وملمسها وتشطيبها لتُقرأ كعنصر معماري — كتلة هادئة تندمج مع الحجر والترافرتين والبلوط الدافئ.",
  } as L,
  s2label: { en: "02 — Philosophy", ar: "٠٢ — الفلسفة" } as L,
  s2title: { en: "Material first.", ar: "الخامة أولاً." } as L,
  s2titleItalic: { en: "Everything else follows.", ar: "وكل شيء يأتي بعدها." } as L,
  s2body: {
    en: "A mineral shell hand-worked to the grain of Egyptian limestone. A solid oak frame, blackened or left natural. No logos, no ornament, no noise — only the honest weight of the material.",
    ar: "قشرة معدنية مشغولة يدوياً على ملمس الحجر الجيري المصري. هيكل من البلوط الصلب، مُسوَّد أو طبيعي. بلا شعارات ولا زخرفة ولا ضجيج — فقط صدق الخامة ووزنها.",
  } as L,
  bullets: [
    { en: "Hand-finished mineral shell", ar: "قشرة معدنية مُشطّبة يدوياً" },
    { en: "Solid oak joinery", ar: "نجارة بلوط صلب" },
    { en: "Matte, low-glare surfaces", ar: "أسطح مطفية بلا لمعان" },
  ] as L[],
  selected: { en: "Selected pieces", ar: "قطع مختارة" } as L,
  collection: { en: "The Collection", ar: "المجموعة" } as L,
  out: { en: "Out of stock", ar: "غير متوفر حالياً" } as L,
  closing1: { en: "Designed to be seen.", ar: "صُمِّمت لتُرى." } as L,
  closing2: { en: "Made to belong.", ar: "وصُنعت لتنتمي." } as L,
};

function Home() {
  const { t, lang } = useLang();
  const all = products;

  return (
    <div className="bg-ivory">
      <SiteHeader overlay />

      {/* Hero */}
      <section className="relative h-[100svh] min-h-[620px] w-full overflow-hidden">
        <video
          src={luminaHeroUrl}
          autoPlay
          loop
          muted
          playsInline
          poster={images.interior}
          className="absolute inset-0 h-full w-full object-cover"
          aria-label="A contemporary interior with backlit stone shelving and a Bold cover on its oak stand"
        />
        <div className="absolute inset-0 bg-charcoal/40" />

        <div className="relative flex h-full flex-col justify-end px-6 pb-16 md:px-12 md:pb-20">
          <Reveal className="max-w-3xl">
            <p className="label-xs text-ivory/70">{t(copy.place)}</p>
            <h1 className="mt-7 font-display text-[3.4rem] leading-[0.95] text-ivory sm:text-7xl lg:text-[6.5rem]">
              {BRAND.name.toUpperCase()}
              <span className="mt-2 block italic text-ivory/90">{t(copy.heroLine)}</span>
            </h1>
            <p className="mt-6 max-w-md font-display text-2xl text-ivory/85">{t(BRAND.tagline)}</p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ivory/70">{t(copy.heroSub)}</p>
            <Link
              to="/shop"
              className="group mt-12 inline-flex items-center gap-4 border-b border-ivory/40 pb-3 label-xs text-ivory"
            >
              {t(copy.explore)}
              <span className="transition-transform duration-700 group-hover:translate-x-2" aria-hidden>
                &rarr;
              </span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Section 01 */}
      <section className="px-6 py-28 md:px-12 md:py-40">
        <div className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <p className="label-xs text-gold">{t(copy.s1label)}</p>
            <h2 className="mt-8 font-display text-4xl leading-[1.08] text-charcoal md:text-6xl">
              {t(copy.s1title)}
            </h2>
            <p className="mt-8 max-w-md text-sm leading-loose text-stone">{t(copy.s1body)}</p>
          </Reveal>
          <Reveal delay={120} className="overflow-hidden">
            <img
              src={images.coverPlace}
              alt="A woman placing the Bold textured cover over a water vessel on a blackened oak stand in a warm interior"
              className="img-luxe h-[70vh] w-full object-cover md:h-[86vh]"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* Section 02 — split screen */}
      <section className="grid items-stretch lg:grid-cols-2">
        <Reveal className="overflow-hidden">
          <img
            src={images.evening}
            alt="Close view of the textured mineral surface of a Bold cover in a warm, stone-walled room"
            className="img-luxe h-[60vh] w-full object-cover lg:h-full lg:min-h-[92vh]"
            loading="lazy"
          />
        </Reveal>
        <Reveal delay={100} className="flex items-center bg-sand/70 px-6 py-24 md:px-16 lg:px-24">
          <div className="max-w-md">
            <p className="label-xs text-gold">{t(copy.s2label)}</p>
            <h2 className="mt-8 font-display text-4xl leading-[1.1] text-charcoal md:text-5xl">
              {t(copy.s2title)} <span className="italic">{t(copy.s2titleItalic)}</span>
            </h2>
            <div className="hairline my-10" />
            <p className="text-sm leading-loose text-stone">{t(copy.s2body)}</p>
            <ul className="mt-12 space-y-4">
              {copy.bullets.map((b) => (
                <li
                  key={b.en}
                  className="flex items-center gap-4 border-b border-border pb-4 label-xs text-charcoal/70"
                >
                  <span className="h-1 w-1 rotate-45 bg-gold" aria-hidden />
                  {t(b)}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Featured pieces */}
      <section className="px-6 py-28 md:px-12 md:py-40">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="label-xs text-gold">{t(copy.selected)}</p>
            <h2 className="mt-6 font-display text-4xl text-charcoal md:text-5xl">{t(copy.collection)}</h2>
          </Reveal>

          <div className="mt-16 grid gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
            {all.map((p, i) => (
              <Reveal key={p.slug} delay={i * 110}>
                <Link to="/shop/$slug" params={{ slug: p.slug }} className="group block">
                  <div className="relative overflow-hidden bg-sand/50">
                    <img
                      src={p.images[0]}
                      alt={`${p.name.en} by Bold styled in a contemporary interior`}
                      className={`img-luxe aspect-[4/5] w-full object-cover${p.inStock === false ? " opacity-60 grayscale-[30%]" : ""}`}
                      loading="lazy"
                    />
                    {p.inStock === false && (
                      <span className="absolute start-5 top-5 border border-charcoal/20 bg-ivory/90 px-3 py-1.5 label-xs text-charcoal">
                        {t(copy.out)}
                      </span>
                    )}
                  </div>
                  <div className="mt-7 flex items-start justify-between gap-6">
                    <div>
                      <h3 className="font-display text-2xl text-charcoal">{t(p.name)}</h3>
                      <p className="mt-2 max-w-[22ch] text-xs leading-relaxed text-stone">{t(p.tagline)}</p>
                    </div>
                    <p className="label-xs whitespace-nowrap pt-2 text-charcoal/70">
                      {formatPrice(p.price, lang)}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="relative h-[92vh] min-h-[560px] overflow-hidden">
        <img
          src={images.lobby}
          alt="A moody luxury lounge with a Bold indigo cover beside a seated guest"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-charcoal/40" />
        <Reveal className="relative flex h-full items-center justify-center px-6 text-center">
          <div>
            <p className="label-xs text-ivory/70">{t(BRAND.tagline)}</p>
            <h2 className="mt-8 font-display text-5xl leading-[1.05] text-ivory md:text-7xl">
              {t(copy.closing1)}
              <span className="block italic">{t(copy.closing2)}</span>
            </h2>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}
