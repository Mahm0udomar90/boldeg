import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { useLang, type L } from "@/lib/i18n";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Bold" },
      { name: "description", content: "Bold terms of purchase: ordering, delivery within two weeks, returns for manufacturing defects, and product care." },
      { property: "og:title", content: "Terms & Conditions — Bold" },
      { property: "og:description", content: "Bold terms of purchase: ordering, delivery within two weeks, returns for manufacturing defects, and product care." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Terms,
});

type Section = { heading: L; body: L[] };

const copy = {
  label: { en: "Legal", ar: "قانوني" } as L,
  title: { en: "Terms & Conditions", ar: "الشروط والأحكام" } as L,
  updated: { en: "Last updated — September 2026", ar: "آخر تحديث — سبتمبر 2026" } as L,
  intro: {
    en: "These terms govern every purchase from Bold. Placing an order — through the site or WhatsApp — means you accept them.",
    ar: "تحكم هذه الشروط كل عملية شراء من Bold. تقديم الطلب — عبر الموقع أو واتساب — يعني موافقتك عليها.",
  } as L,
};

const sections: Section[] = [
  {
    heading: { en: "Orders", ar: "الطلبات" },
    body: [
      {
        en: "Orders are confirmed personally over WhatsApp. Each piece is prepared and finished to order, and availability is shown on each product page.",
        ar: "يتم تأكيد الطلبات بشكل شخصي عبر واتساب. تُجهَّز كل قطعة وتُشطَّب حسب الطلب، ويظهر التوفر في صفحة كل منتج.",
      },
      {
        en: "Prices are listed in Egyptian Pounds (EGP) and include the product as described. Delivery fees, where applicable, are confirmed before payment.",
        ar: "الأسعار معروضة بالجنيه المصري وتشمل المنتج كما هو موصوف. وتُؤكَّد رسوم التوصيل، إن وُجدت، قبل الدفع.",
      },
    ],
  },
  {
    heading: { en: "Delivery", ar: "التسليم" },
    body: [
      {
        en: "Orders are delivered within two weeks (14 days) from the date your order is confirmed. Because each piece is finished by hand, we will keep you updated on progress, and will notify you immediately if any delay is expected.",
        ar: "يتم تسليم الطلبات خلال أسبوعين (14 يوماً) من تاريخ تأكيد طلبك. ونظراً لأن كل قطعة تُشطَّب يدوياً، سنبقيك على اطلاع بمراحل التجهيز، وسنُعلمك فوراً في حال توقُّع أي تأخير.",
      },
    ],
  },
  {
    heading: { en: "Returns", ar: "الإرجاع" },
    body: [
      {
        en: "Returns are accepted only in the case of a manufacturing defect, and must be requested within two weeks (14 days) of receiving the product.",
        ar: "يُقبل الإرجاع في حالة عيب التصنيع فقط، ويجب طلبه خلال أسبوعين (14 يوماً) من تاريخ استلام المنتج.",
      },
      {
        en: "If your order arrives with a manufacturing defect, contact us immediately with photos and we will arrange a replacement or full refund.",
        ar: "إذا وصل طلبك بعيب تصنيع، تواصل معنا فوراً مع صور، وسنرتب استبدالاً أو استرداداً كاملاً للمبلغ.",
      },
    ],
  },
  {
    heading: { en: "Product nature", ar: "طبيعة المنتج" },
    body: [
      {
        en: "Every Bold piece is hand-finished. Subtle variations in texture and tone are part of the craft and are not considered defects.",
        ar: "كل قطعة من Bold مُشطَّبة يدوياً. الاختلافات البسيطة في الملمس واللون جزء من الحرفة ولا تُعد عيوباً.",
      },
    ],
  },
  {
    heading: { en: "Contact", ar: "التواصل" },
    body: [
      {
        en: "Questions about an order, a delivery or a return? Message us on WhatsApp — every enquiry is answered personally.",
        ar: "لديك سؤال عن طلب أو تسليم أو إرجاع؟ راسلنا على واتساب — يتم الرد على كل استفسار بشكل شخصي.",
      },
    ],
  },
];

function Terms() {
  const { t } = useLang();

  return (
    <div className="bg-ivory">
      <SiteHeader />

      <section className="px-6 pb-16 pt-40 md:px-12 md:pt-52">
        <div className="mx-auto max-w-[900px]">
          <Reveal>
            <p className="label-xs text-gold">{t(copy.label)}</p>
            <h1 className="mt-8 font-display text-5xl leading-[1.05] text-charcoal md:text-6xl">
              {t(copy.title)}
            </h1>
            <p className="label-xs mt-6 text-stone">{t(copy.updated)}</p>
            <p className="mt-10 text-lg leading-loose text-charcoal/85">{t(copy.intro)}</p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-32 md:px-12">
        <div className="mx-auto max-w-[900px]">
          {sections.map((s, i) => (
            <Reveal key={i} delay={i * 60} className="border-t border-border py-10">
              <h2 className="font-display text-2xl text-charcoal md:text-3xl">{t(s.heading)}</h2>
              <div className="mt-5 space-y-4 text-sm leading-loose text-stone">
                {s.body.map((p, j) => (
                  <p key={j}>{t(p)}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}