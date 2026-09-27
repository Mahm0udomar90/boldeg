import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { useLang, type L } from "@/lib/i18n";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Bold" },
      { name: "description", content: "How Bold collects, uses and protects your personal information." },
      { property: "og:title", content: "Privacy Policy — Bold" },
      { property: "og:description", content: "How Bold collects, uses and protects your personal information." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Privacy,
});

type Section = { heading: L; body: L[] };

const copy = {
  label: { en: "Legal", ar: "قانوني" } as L,
  title: { en: "Privacy Policy", ar: "سياسة الخصوصية" } as L,
  updated: { en: "Last updated — September 2026", ar: "آخر تحديث — سبتمبر 2026" } as L,
  intro: {
    en: "Bold respects your privacy. This policy explains, in plain terms, what information we collect when you browse our site or place an order, and how we use it.",
    ar: "تحترم Bold خصوصيتك. توضّح هذه السياسة، بعبارات بسيطة، المعلومات التي نجمعها عند تصفح موقعنا أو تقديم طلب، وكيفية استخدامها.",
  } as L,
};

const sections: Section[] = [
  {
    heading: { en: "Information we collect", ar: "المعلومات التي نجمعها" },
    body: [
      {
        en: "When you place an order or contact us — via the site, WhatsApp or email — we collect the details you provide: your name, phone number, delivery address and any notes about your order.",
        ar: "عند تقديم طلب أو التواصل معنا — عبر الموقع أو واتساب أو البريد الإلكتروني — نجمع البيانات التي تقدمها: الاسم ورقم الهاتف وعنوان التسليم وأي ملاحظات تتعلق بطلبك.",
      },
      {
        en: "We also store your language preference on your device so the site opens the way you left it.",
        ar: "كما نحفظ تفضيل اللغة على جهازك حتى يفتح الموقع كما تركته.",
      },
    ],
  },
  {
    heading: { en: "How we use it", ar: "كيفية استخدامها" },
    body: [
      {
        en: "Your details are used only to process and deliver your order, respond to your enquiries, and keep you informed about your purchase. We do not sell or share your personal information with third parties for marketing.",
        ar: "تُستخدم بياناتك فقط لمعالجة طلبك وتسليمه والرد على استفساراتك وإبقائك على اطلاع بشأن عملية الشراء. لا نبيع معلوماتك الشخصية ولا نشاركها مع أطراف ثالثة لأغراض تسويقية.",
      },
    ],
  },
  {
    heading: { en: "Third-party services", ar: "خدمات الطرف الثالث" },
    body: [
      {
        en: "Order conversations happen over WhatsApp, which is governed by its own privacy policy. Delivery is handled by our courier partners, who receive only the information needed to deliver your order.",
        ar: "تتم محادثات الطلبات عبر واتساب، وهي خاضعة لسياسة الخصوصية الخاصة بها. ويتولى شركاء الشحن التسليم، ولا يحصلون إلا على المعلومات اللازمة لتسليم طلبك.",
      },
    ],
  },
  {
    heading: { en: "Data retention & your rights", ar: "الاحتفاظ بالبيانات وحقوقك" },
    body: [
      {
        en: "We keep order records only as long as needed for warranty, returns and legal purposes. You may ask us at any time to review, correct or delete your personal information by messaging us on WhatsApp.",
        ar: "نحتفظ بسجلات الطلبات فقط بالقدر اللازم لأغراض الضمان والإرجاع والمتطلبات القانونية. يمكنك في أي وقت طلب مراجعة معلوماتك الشخصية أو تصحيحها أو حذفها عبر مراسلتنا على واتساب.",
      },
    ],
  },
  {
    heading: { en: "Contact", ar: "التواصل" },
    body: [
      {
        en: "For any privacy question, reach us through the WhatsApp link in the footer — we respond personally.",
        ar: "لأي سؤال يتعلق بالخصوصية، تواصل معنا عبر رابط واتساب في أسفل الصفحة — نرد بشكل شخصي.",
      },
    ],
  },
];

function Privacy() {
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
