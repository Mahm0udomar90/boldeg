import { Link } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";
import { images, whatsappLink, BRAND, SOCIAL } from "@/lib/site";
import { useLang, type L } from "@/lib/i18n";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

const socialLinks = [
  { href: SOCIAL.instagram, label: "Instagram", Icon: Instagram },
  { href: SOCIAL.tiktok, label: "TikTok", Icon: TikTokIcon },
  { href: SOCIAL.facebook, label: "Facebook", Icon: Facebook },
];

const copy = {
  blurb: {
    en: "Objects made for spaces that value every detail. Designed and finished in Cairo.",
    ar: "قطع صُنعت لمساحات تهتم بكل تفصيلة. تُصمَّم وتُشطَّب في القاهرة.",
  } as L,
  collection: { en: "Collection", ar: "المجموعة" } as L,
  living: { en: "Living", ar: "المعيشة" } as L,
  home: { en: "Home", ar: "المنزل" } as L,
  objects: { en: "Objects", ar: "قطع" } as L,
  house: { en: "House", ar: "الدار" } as L,
  about: { en: "About", ar: "عن العلامة" } as L,
  journal: { en: "Journal", ar: "المدوّنة" } as L,
  privacy: { en: "Privacy", ar: "الخصوصية" } as L,
  terms: { en: "Terms & Conditions", ar: "الشروط والأحكام" } as L,
  enquiries: { en: "Enquiries", ar: "الاستفسارات" } as L,
  whatsapp: { en: "WhatsApp", ar: "واتساب" } as L,
  city: { en: "Cairo, Egypt", ar: "القاهرة، مصر" } as L,
  hello: { en: "Hello Bold, I have a question.", ar: "مرحباً Bold، لدي استفسار." } as L,
};

export function SiteFooter() {
  const { t } = useLang();

  return (
    <footer className="bg-sand/60 px-6 pb-14 pt-28 md:px-12">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img
              src={images.logo}
              alt={BRAND.name}
              className="h-28 w-28 object-contain mix-blend-multiply"
              loading="lazy"
            />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-stone">{t(copy.blurb)}</p>
          </div>
          <div>
            <p className="label-xs text-stone">{t(copy.collection)}</p>
            <ul className="mt-6 space-y-3 text-sm text-charcoal/80">
              <li><Link to="/shop" className="link-underline">{t(copy.living)}</Link></li>
              <li><Link to="/shop" className="link-underline">{t(copy.home)}</Link></li>
              <li><Link to="/shop" className="link-underline">{t(copy.objects)}</Link></li>
            </ul>
          </div>
          <div>
            <p className="label-xs text-stone">{t(copy.house)}</p>
            <ul className="mt-6 space-y-3 text-sm text-charcoal/80">
              <li><Link to="/about" className="link-underline">{t(copy.about)}</Link></li>
              <li><Link to="/journal" className="link-underline">{t(copy.journal)}</Link></li>
              <li><Link to="/privacy" className="link-underline">{t(copy.privacy)}</Link></li>
              <li><Link to="/terms" className="link-underline">{t(copy.terms)}</Link></li>
            </ul>
          </div>
          <div>
            <p className="label-xs text-stone">{t(copy.enquiries)}</p>
            <ul className="mt-6 space-y-3 text-sm text-charcoal/80">
              <li>
                <a
                  href={whatsappLink(t(copy.hello))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline"
                >
                  {t(copy.whatsapp)}
                </a>
              </li>
              <li>{t(copy.city)}</li>
            </ul>
          </div>
        </div>

        <div className="hairline mt-20" />
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <p className="label-xs text-stone">&copy; {new Date().getFullYear()} {BRAND.name}</p>
          <div className="flex items-center gap-5">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-charcoal/60 transition-colors duration-500 hover:text-charcoal"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            ))}
          </div>
          <p className="label-xs text-gold">{t(BRAND.tagline)}</p>
        </div>
      </div>
    </footer>
  );
}
