import type { L, Lang } from "@/lib/i18n";

/** Single configurable WhatsApp number (international format, digits only). */
export const WHATSAPP_NUMBER = "201101263011";

export const BRAND = {
  name: "Bold",
  tagline: { en: "Corners that pulse with life", ar: "زَوايا تَنبِض بالحياة" } as L,
  site: "www.bold-eg.life",
};

export const SOCIAL = {
  instagram: "https://www.instagram.com/boldeg.store",
  tiktok: "https://www.tiktok.com/@boldeg.store",
  facebook: "https://www.facebook.com/profile.php?id=61593862420809",
};

export const images = {
  logo: "/images/bold-logo.webp",
  brandKey: "/images/brand-key.jpeg",
  terrace: "/images/scene-terrace.webp",
  courtyard: "/images/scene-courtyard.webp",
  interior: "/images/scene-interior.webp",
  evening: "/images/scene-evening.webp",
  lobby: "/images/scene-lobby.webp",
  navy: "/images/product-navy.webp",
  white: "/images/product-white.webp",
  refill: "/images/scene-refill.webp",
  atelierNatural: "/images/atelier-natural.webp",
  coverPlace: "/images/scene-cover-place.webp",
  coverOnly: "/images/scene-cover-only.webp",
};

export type Product = {
  slug: string;
  name: L;
  category: "Home" | "Outdoor" | "Objects";
  tagline: L;
  description: L;
  price: number;
  images: string[];
  /** Set `available: false` on a variant to show it struck through and disabled (e.g. temporarily out of stock). */
  variants: (L & { available?: boolean })[];
  details: { title: L; body: L }[];
  newArrival?: boolean;
  /** Defaults to true; false renders the piece as out of stock. */
  inStock?: boolean;
};

export const categories = [
  { key: "All", label: { en: "All", ar: "الكل" } as L },
  { key: "Home", label: { en: "Home", ar: "المنزل" } as L },
  { key: "Outdoor", label: { en: "Outdoor", ar: "الخارج" } as L },
  { key: "Objects", label: { en: "Objects", ar: "قطع" } as L },
  { key: "New", label: { en: "New Arrivals", ar: "وصل حديثاً" } as L },
];

export const products: Product[] = [
  {
    slug: "signature-cover-ivory",
    name: { en: "Signature Cover — Ivory", ar: "الغطاء المميز — عاجي" },
    category: "Home",
    tagline: {
      en: "Textured stone finish on blackened oak",
      ar: "تشطيب حجري بملمس طبيعي على خشب بلوط مُسوَّد",
    },
    description: {
      en: "A sculpted cover that turns the everyday water dispenser into a quiet part of your interior.",
      ar: "غطاء منحوت يحوّل مبرّد المياه اليومي إلى قطعة هادئة ضمن ديكور منزلك.",
    },
    price: 4200,
    images: [images.interior, images.evening, images.refill],
    variants: [
      { en: "Blackened Oak", ar: "بلوط مُسوَّد" },
      { en: "Natural Oak", ar: "بلوط طبيعي", available: false },
    ],
    newArrival: true,
    details: [
      {
        title: { en: "Materials", ar: "الخامات" },
        body: {
          en: "Hand-shaped paper mâché shell, layered and cured to a fine stone-like texture, on a solid oak frame with a matte seal.",
          ar: "قشرة من الورق المعجون (بابيه ماشيه) مشغولة يدوياً طبقة بعد طبقة بملمس ناعم يُشبه الحجر، على هيكل بلوط صلب بطبقة حماية مطفية.",
        },
      },
      {
        title: { en: "Dimensions", ar: "المقاسات" },
        body: {
          en: "Height 96 cm · Diameter 38 cm · Frame footprint 42 × 42 cm. Fits standard 18.9 L vessels.",
          ar: "الارتفاع ٩٦ سم · القطر ٣٨ سم · قاعدة الهيكل ٤٢ × ٤٢ سم. يناسب عبوات ١٨.٩ لتر القياسية.",
        },
      },
      {
        title: { en: "Care", ar: "العناية" },
        body: {
          en: "Wipe with a soft dry cloth. Avoid abrasive cleaners and prolonged water contact on the oak.",
          ar: "امسح بقطعة قماش ناعمة جافة. تجنّب المنظفات الكاشطة وملامسة الماء الطويلة للخشب.",
        },
      },
      {
        title: { en: "Delivery", ar: "التسليم" },
        body: {
          en: "Handmade to order — please allow up to two weeks for delivery.",
          ar: "تُصنع القطعة يدوياً حسب الطلب — يُرجى توقّع مدة تسليم تصل إلى أسبوعين.",
        },
      },
    ],
  },
  {
    slug: "signature-cover-indigo",
    name: { en: "Signature Cover — Indigo", ar: "الغطاء المميز — نيلي" },
    category: "Home",
    tagline: {
      en: "Deep pigment for darker, layered rooms",
      ar: "لون عميق للمساحات الداكنة والغنية بالطبقات",
    },
    description: {
      en: "The same architecture in a deep indigo finish, made for interiors built on stone, bronze and shadow.",
      ar: "نفس التصميم بلون نيلي عميق، مصمّم لمساحات تعتمد على الحجر والبرونز والظل.",
    },
    price: 4400,
    images: [images.navy, images.lobby],
    variants: [
      { en: "Indigo", ar: "نيلي" },
      { en: "Charcoal", ar: "فحمي" },
    ],
    newArrival: true,
    details: [
      {
        title: { en: "Materials", ar: "الخامات" },
        body: {
          en: "Pigmented paper mâché shell with a hand-worked surface, mounted on a matte black frame.",
          ar: "قشرة من الورق المعجون مصبوغة بسطح مشغول يدوياً، مثبتة على هيكل أسود مطفي.",
        },
      },
      {
        title: { en: "Dimensions", ar: "المقاسات" },
        body: {
          en: "Height 96 cm · Diameter 38 cm · Frame footprint 42 × 42 cm.",
          ar: "الارتفاع ٩٦ سم · القطر ٣٨ سم · قاعدة الهيكل ٤٢ × ٤٢ سم.",
        },
      },
      {
        title: { en: "Care", ar: "العناية" },
        body: { en: "Dry dusting only.", ar: "التنظيف بالمسح الجاف فقط." },
      },
      {
        title: { en: "Delivery", ar: "التسليم" },
        body: {
          en: "Handmade to order — please allow up to two weeks for delivery.",
          ar: "تُصنع القطعة يدوياً حسب الطلب — يُرجى توقّع مدة تسليم تصل إلى أسبوعين.",
        },
      },
    ],
  },
  {
    slug: "terrace-edition",
    name: { en: "Terrace Edition", ar: "إصدار التراس" },
    category: "Outdoor",
    tagline: {
      en: "A weather-considered finish for open-air rooms",
      ar: "تشطيب يتحمّل الأجواء للمساحات المفتوحة",
    },
    description: {
      en: "Composed for terraces and courtyards, where light moves across the surface all day long.",
      ar: "مصمّم للتراسات والأفنية، حيث يتحرك الضوء على السطح طوال اليوم.",
    },
    price: 4600,
    images: [images.white],
    variants: [
      { en: "Blackened Oak", ar: "بلوط مُسوَّد" },
      { en: "Natural Oak", ar: "بلوط طبيعي" },
    ],
    details: [
      {
        title: { en: "Materials", ar: "الخامات" },
        body: {
          en: "UV-stable, sealed paper mâché shell over a treated oak frame, engineered for shaded outdoor spaces.",
          ar: "قشرة من الورق المعجون مُعالَجة ومقاومة للأشعة فوق البنفسجية على هيكل بلوط معالج، للمساحات الخارجية المظللة.",
        },
      },
      {
        title: { en: "Dimensions", ar: "المقاسات" },
        body: {
          en: "Height 96 cm · Diameter 38 cm · Frame footprint 42 × 42 cm.",
          ar: "الارتفاع ٩٦ سم · القطر ٣٨ سم · قاعدة الهيكل ٤٢ × ٤٢ سم.",
        },
      },
      {
        title: { en: "Care", ar: "العناية" },
        body: {
          en: "Rinse dust with a damp cloth. Shelter during winter rains.",
          ar: "امسح الغبار بقطعة قماش مبللة. احفظه تحت مظلة في أمطار الشتاء.",
        },
      },
      {
        title: { en: "Delivery", ar: "التسليم" },
        body: {
          en: "Handmade to order — please allow up to two weeks for delivery.",
          ar: "تُصنع القطعة يدوياً حسب الطلب — يُرجى توقّع مدة تسليم تصل إلى أسبوعين.",
        },
      },
    ],
  },
  {
    slug: "atelier-stand",
    name: { en: "Atelier Stand", ar: "حامل الأتيليه" },
    category: "Objects",
    tagline: { en: "Natural oak, four-leg architecture", ar: "بلوط طبيعي بهندسة رباعية الأرجل" },
    description: {
      en: "A sculptural cover resting on a natural solid-oak stand — four clean legs that lift the vessel into a quiet architectural presence, indoors or in the garden.",
      ar: "غطاء منحوت يرتكز على حامل من البلوط الطبيعي الصلب — أربعة أرجل نظيفة ترفع القطعة إلى حضور معماري هادئ، داخل المنزل أو في الحديقة.",
    },
    price: 4200,
    images: [images.atelierNatural],
    variants: [
      { en: "Blackened Oak", ar: "بلوط مُسوَّد" },
      { en: "Natural Oak", ar: "بلوط طبيعي" },
    ],
    details: [
      {
        title: { en: "Materials", ar: "الخامات" },
        body: {
          en: "Solid oak, mortise-and-tenon joinery, hand-sanded to 320 grit.",
          ar: "بلوط صلب، وصلات نقر ولسان، مصنفر يدوياً حتى درجة ٣٢٠.",
        },
      },
      {
        title: { en: "Dimensions", ar: "المقاسات" },
        body: { en: "Height 52 cm · Footprint 42 × 42 cm.", ar: "الارتفاع ٥٢ سم · القاعدة ٤٢ × ٤٢ سم." },
      },
      {
        title: { en: "Care", ar: "العناية" },
        body: {
          en: "Dust regularly. Re-oil once a year to keep the grain warm.",
          ar: "نظّفه من الغبار بانتظام. أعد تزييته مرة سنوياً للحفاظ على دفء الخشب.",
        },
      },
      {
        title: { en: "Delivery", ar: "التسليم" },
        body: {
          en: "Handmade to order — please allow up to two weeks for delivery.",
          ar: "تُصنع القطعة يدوياً حسب الطلب — يُرجى توقّع مدة تسليم تصل إلى أسبوعين.",
        },
      },
    ],
  },
  {
    slug: "cover-only",
    name: { en: "Cover Only — Ivory", ar: "الغطاء فقط — عاجي" },
    category: "Home",
    tagline: {
      en: "The sculpted shell, free of the stand",
      ar: "القشرة المنحوتة، بلا حامل",
    },
    description: {
      en: "The same hand-finished cover used on the full piece, designed to rest directly on the floor or a low surface without the wooden legs.",
      ar: "نفس الغطاء المُشطّب يدوياً المستخدم في القطعة الكاملة، مصمّم ليرتكز مباشرة على الأرض أو سطح منخفض بدون الأرجل الخشبية.",
    },
    price: 3000,
    images: [images.coverOnly, images.refill],
    inStock: true,
    variants: [{ en: "Ivory", ar: "عاجي" }],
    details: [
      {
        title: { en: "Use", ar: "الاستخدام" },
        body: {
          en: "Place the cover directly over a standard 18.9 L vessel on the floor, a low plinth, or a side console. No stand required.",
          ar: "ضع الغطاء مباشرة فوق عبوة ١٨.٩ لتر القياسية على الأرض، أو قاعدة منخفضة، أو طاولة جانبية. لا يحتاج إلى حامل.",
        },
      },
      {
        title: { en: "Materials", ar: "الخامات" },
        body: {
          en: "Hand-shaped paper mâché shell with a fine stone-like texture and a matte seal.",
          ar: "قشرة من الورق المعجون مشغولة يدوياً بملمس ناعم يُشبه الحجر وطبقة حماية مطفية.",
        },
      },
      {
        title: { en: "Dimensions", ar: "المقاسات" },
        body: {
          en: "Height 50 cm · Diameter 38 cm. Fits standard 18.9 L vessels.",
          ar: "الارتفاع ٥٠ سم · القطر ٣٨ سم. يناسب عبوات ١٨.٩ لتر القياسية.",
        },
      },
      {
        title: { en: "Care", ar: "العناية" },
        body: {
          en: "Wipe with a soft dry cloth. Avoid abrasive cleaners.",
          ar: "امسح بقطعة قماش ناعمة جافة. تجنّب المنظفات الكاشطة.",
        },
      },
      {
        title: { en: "Delivery", ar: "التسليم" },
        body: {
          en: "Handmade to order — please allow up to two weeks for delivery.",
          ar: "تُصنع القطعة يدوياً حسب الطلب — يُرجى توقّع مدة تسليم تصل إلى أسبوعين.",
        },
      },
    ],
  },
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);

export const formatPrice = (v: number, lang: Lang = "en") =>
  lang === "ar" ? `${v.toLocaleString("ar-EG")} ج.م` : `EGP ${v.toLocaleString("en-US")}`;

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function orderMessage(opts: {
  name: string;
  variant?: string;
  quantity?: number;
  price: number;
  lang?: Lang;
}) {
  const ar = opts.lang === "ar";
  const lines = ar
    ? [
        "مرحباً Bold،",
        "",
        `أرغب في طلب: ${opts.name}`,
        opts.variant ? `التشطيب: ${opts.variant}` : null,
        opts.quantity ? `الكمية: ${opts.quantity}` : null,
        `السعر: ${formatPrice(opts.price, "ar")}`,
      ]
    : [
        "Hello Bold,",
        "",
        `I would like to order: ${opts.name}`,
        opts.variant ? `Finish: ${opts.variant}` : null,
        opts.quantity ? `Quantity: ${opts.quantity}` : null,
        `Price: ${formatPrice(opts.price)}`,
      ];
  return lines.filter(Boolean).join("\n");
}