import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { images } from "@/lib/site";
import { useLang, type L } from "@/lib/i18n";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Bold | Notes on Material, Light and Interiors" },
      {
        name: "description",
        content:
          "Notes from the Bold studio on material, light, Mediterranean architecture and the quiet detailing of modern Egyptian interiors.",
      },
      { property: "og:title", content: "Journal — Bold" },
      {
        property: "og:description",
        content: "Notes on material, light and the detailing of modern Egyptian interiors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Journal,
});

const copy = {
  label: { en: "Journal", ar: "المدوّنة" } as L,
  title: { en: "Notes from", ar: "ملاحظات من" } as L,
  titleItalic: { en: "the studio.", ar: "الاستوديو." } as L,
};

const entries: { label: L; title: L; body: L; image: string }[] = [
  {
    label: { en: "Material", ar: "الخامة" },
    title: {
      en: "The weight of limestone at four in the afternoon",
      ar: "ثِقَل الحجر الجيري في الرابعة عصراً",
    },
    body: {
      en: "How a surface behaves under low Cairo sun, and why we work the shell by hand rather than casting it smooth.",
      ar: "كيف يتصرّف السطح تحت شمس القاهرة المنخفضة، ولماذا نشتغل القشرة يدوياً بدل صبّها ناعمة.",
    },
    image: images.courtyard,
  },
  {
    label: { en: "Architecture", ar: "العمارة" },
    title: {
      en: "Arches, thresholds and the Mediterranean room",
      ar: "الأقواس والعتبات والغرفة المتوسطية",
    },
    body: {
      en: "A short study of the openings that shape our interiors — and the objects that deserve to stand beside them.",
      ar: "دراسة قصيرة للفتحات التي تصوغ مساحاتنا — والقطع التي تستحق أن تقف بجوارها.",
    },
    image: images.lobby,
  },
  {
    label: { en: "Living", ar: "الحياة" },
    title: { en: "Terraces designed for stillness", ar: "تراسات مصمَّمة للسكون" },
    body: {
      en: "Notes from a coastal house where every object was chosen for how it looks at rest.",
      ar: "ملاحظات من بيت ساحلي اختيرت فيه كل قطعة بحسب هيئتها في السكون.",
    },
    image: images.terrace,
  },
];

function Journal() {
  const { t } = useLang();

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
        </div>
      </section>

      <section className="px-6 pb-32 md:px-12 md:pb-44">
        <div className="mx-auto max-w-[1600px] space-y-24 md:space-y-36">
          {entries.map((e, i) => (
            <Reveal key={e.title.en}>
              <article
                className={`grid gap-10 md:grid-cols-2 md:items-center md:gap-20 ${i % 2 ? "md:[&>figure]:order-2" : ""}`}
              >
                <figure className="overflow-hidden">
                  <img
                    src={e.image}
                    alt={t(e.title)}
                    className="img-luxe aspect-[4/3] w-full object-cover"
                    loading="lazy"
                  />
                </figure>
                <div>
                  <p className="label-xs text-gold">{t(e.label)}</p>
                  <h2 className="mt-6 max-w-md font-display text-3xl leading-tight text-charcoal md:text-4xl">
                    {t(e.title)}
                  </h2>
                  <p className="mt-6 max-w-md text-sm leading-loose text-stone">{t(e.body)}</p>
                  <div className="hairline mt-10 max-w-md" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
