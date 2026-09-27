import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { images } from "@/lib/site";
import { useLang, type L } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bold | A Cairo Design House" },
      {
        name: "description",
        content:
          "Bold is a Cairo design house making quietly luxurious objects for contemporary interiors — hand-shaped paper mâché, solid oak and restraint.",
      },
      { property: "og:title", content: "About — Bold" },
      {
        property: "og:description",
        content: "A Cairo design house making quietly luxurious objects for contemporary interiors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const copy = {
  label: { en: "The House", ar: "الدار" } as L,
  title: { en: "A design house working in", ar: "دار تصميم تعمل في" } as L,
  titleItalic: { en: "stone, oak and light.", ar: "الحجر والبلوط والضوء." } as L,
  lead: {
    en: "Bold began with a simple frustration: the everyday objects we live with are rarely designed for the rooms they end up in. We make the opposite decision — we start with the architecture.",
    ar: "بدأت Bold من ملاحظة بسيطة: الأشياء اليومية التي نعيش معها نادراً ما تُصمَّم للغرف التي تنتهي فيها. نحن نتخذ القرار المعاكس — نبدأ من العمارة.",
  } as L,
  p1: {
    en: "Each piece is drawn in Cairo and finished by hand. The shells are hand-shaped from paper mâché, layered and cured to a fine, stone-like texture; the frames are cut from solid oak and either blackened or left in their natural warmth.",
    ar: "كل قطعة تُرسم في القاهرة وتُشطَّب يدوياً. القشرة مصنوعة يدوياً من الورق المعجون (بابيه ماشيه)، مشغولة طبقة بعد طبقة بملمس ناعم يُشبه الحجر، والهياكل من بلوط صلب إمّا مُسوَّد أو مُترَك بدفئه الطبيعي.",
  } as L,
  p2: {
    en: "We are building a lifestyle house rather than a catalogue. Today that means covers, stands and vessels. Over time it will mean a wider language of objects — all held to the same restraint.",
    ar: "نحن نبني داراً لأسلوب الحياة لا كتالوج منتجات. اليوم تعني أغطية وحوامل وأوانٍ، ومع الوقت ستصبح لغة أوسع من القطع — بنفس الانضباط.",
  } as L,
  cta: { en: "Explore the collection", ar: "استكشف المجموعة" } as L,
  alt: {
    en: "A serene neutral interior with a Bold piece resting in soft daylight",
    ar: "مساحة داخلية هادئة بألوان محايدة تضم قطعة من Bold في ضوء النهار",
  } as L,
};

function About() {
  const { t } = useLang();

  return (
    <div className="bg-ivory">
      <SiteHeader />

      <section className="px-6 pb-24 pt-40 md:px-12 md:pt-52">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="label-xs text-gold">{t(copy.label)}</p>
            <h1 className="mt-8 max-w-4xl font-display text-5xl leading-[1.05] text-charcoal md:text-7xl">
              {t(copy.title)} <span className="italic">{t(copy.titleItalic)}</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <Reveal className="overflow-hidden">
        <img
          src={images.interior}
          alt={t(copy.alt)}
          className="h-[62vh] w-full object-cover md:h-[86vh]"
          loading="lazy"
        />
      </Reveal>

      <section className="px-6 py-28 md:px-12 md:py-40">
        <div className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-2 lg:gap-32">
          <Reveal>
            <p className="text-lg leading-loose text-charcoal/85 md:text-xl">{t(copy.lead)}</p>
          </Reveal>
          <Reveal delay={120} className="space-y-8 text-sm leading-loose text-stone">
            <p>{t(copy.p1)}</p>
            <p>{t(copy.p2)}</p>
            <div className="hairline" />
            <Link to="/shop" className="inline-block label-xs link-underline text-charcoal">
              {t(copy.cta)}
            </Link>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}