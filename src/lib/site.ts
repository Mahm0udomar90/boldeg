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
  naturalOak: "/images/scene-natural-oak.webp",
  backSofaCard: "/images/back-sofa-card.webp",
  backSofaLifestyle: "/images/back-sofa-lifestyle.webp",
  backSofa3: "/images/back-sofa-3seat.webp",
  backSofa2: "/images/back-sofa-2seat.webp",
};

export type Product = {
  slug: string;
  name: L;
  category: "Home" | "Outdoor" | "Objects";
  tagline: L;
  description: L;
  /** Base price. When `sizes` is set, this is the lowest size price and is shown as "From …". */
  price: number;
  images: string[];
  /** Optional size options, each with its own price (e.g. back-of-sofa console for 2- or 3-seat sofas). */
  sizes?: { label: L; length: L; height: L; price: number }[];
  /** Optional image used on cards (4:5 crop). Defaults to images[0]. */
  cardImage?: string;
  /** Other slugs that should open this product (e.g. old per-color pages that were merged). */
  aliases?: string[];
  /** Set `available: false` on a variant to show it struck through and disabled (e.g. temporarily out of stock). */
  /** A variant can override the price and the gallery images (e.g. a different color). */
  variants: (L & { available?: boolean; price?: number; images?: string[] })[];
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
    slug: "signature-cover",
    aliases: ["signature-cover-ivory", "signature-cover-indigo"],
    name: { en: "Signature Cover", ar: "الغطاء المميز" },
    category: "Home",
    tagline: {
      en: "Textured stone finish, in ivory or deep indigo",
      ar: "تشطيب حجري بملمس طبيعي، بلون عاجي أو نيلي عميق",
    },
    description: {
      en: "A sculpted cover that turns the everyday water dispenser into a quiet part of your interior. Choose ivory for light, airy rooms or deep indigo for interiors built on stone, bronze and shadow.",
      ar: "غطاء منحوت يحوّل مبرّد المياه اليومي إلى قطعة هادئة ضمن ديكور منزلك. اختر العاجي للمساحات الفاتحة، أو النيلي العميق للمساحات التي تعتمد على الحجر والبرونز والظل.",
    },
    price: 4200,
    images: [images.interior, images.evening, images.refill],
    variants: [
      { en: "Ivory — Blackened Oak", ar: "عاجي — بلوط مُسوَّد", price: 4200, images: [images.interior, images.evening, images.refill] },
      { en: "Ivory — Natural Oak", ar: "عاجي — بلوط طبيعي", price: 4200, images: [images.naturalOak] },
      { en: "Indigo", ar: "نيلي", price: 4400, images: [images.navy, images.lobby] },
    ],
    newArrival: true,
    details: [
      {
        title: { en: "Materials", ar: "الخامات" },
        body: {
          en: "Hand-shaped paper mâché shell, layered and cured to a fine stone-like texture. Ivory is available on a blackened or natural solid oak frame with a matte seal; Indigo is pigmented and mounted on a matte black frame.",
          ar: "قشرة من الورق المعجون (بابيه ماشيه) مشغولة يدوياً بملمس ناعم يُشبه الحجر. العاجي متوفر على هيكل بلوط صلب مُسوَّد أو طبيعي بطبقة مطفية، والنيلي مصبوغ على هيكل أسود مطفي.",
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
      { en: "Natural Oak", ar: "بلوط طبيعي", available: false },
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
      { en: "Blackened Oak", ar: "بلوط مُسوَّد", available: false },
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
  {
    slug: "back-sofa-console",
    name: { en: "Back Sofa Console", ar: "طاولة خلف الكنبة (Back Sofa)" },
    category: "Home",
    tagline: {
      en: "Walnut console with wireless charging, sockets and cup holders",
      ar: "كونسول خشب جوز بشاحن لاسلكي ومخارج كهرباء وأماكن للأكواب",
    },
    description: {
      en: "A slim walnut console that sits right behind your sofa. It holds your drinks, charges your phone wirelessly and gives you power sockets and USB ports within arm's reach, so the living room stays tidy and everything you need is at hand.",
      ar: "كونسول خشب جوز نحيف يوضع خلف الكنبة مباشرة. فيه أماكن للأكواب وشاحن لاسلكي للموبايل ومخارج كهرباء وUSB في متناول يدك، فتفضل الريسبشن مرتبة وكل اللي محتاجه جنبك.",
    },
    price: 7000,
    images: [images.backSofaLifestyle, images.backSofa3, images.backSofa2],
    cardImage: images.backSofaCard,
    sizes: [
      {
        label: { en: "Behind a 2-seater sofa", ar: "خلف كنبة ٢ مقعد" },
        length: { en: "180 cm", ar: "١٨٠ سم" },
        height: { en: "65 cm", ar: "٦٥ سم" },
        price: 7000,
      },
      {
        label: { en: "Behind a 3-seater sofa", ar: "خلف كنبة ٣ مقعد" },
        length: { en: "270 cm", ar: "٢٧٠ سم" },
        height: { en: "65 cm", ar: "٦٥ سم" },
        price: 9000,
      },
    ],
    newArrival: true,
    variants: [{ en: "Walnut", ar: "خشب جوز" }],
    details: [
      {
        title: { en: "Dimensions", ar: "المقاسات" },
        body: {
          en: "Height 65 cm. Length 180 cm for a 2-seater sofa, 270 cm for a 3-seater sofa.",
          ar: "الارتفاع ٦٥ سم. الطول ١٨٠ سم لو خلف كنبة ٢ مقعد، و٢٧٠ سم لو خلف كنبة ٣ مقعد.",
        },
      },
      {
        title: { en: "Features", ar: "المميزات" },
        body: {
          en: "Built-in wireless phone charger, power sockets with USB ports, and stainless-steel cup holders set into the top.",
          ar: "شاحن لاسلكي للموبايل، مخارج كهرباء مع منافذ USB، وأماكن للأكواب من الاستانلس مدمجة في السطح.",
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

export const productBySlug = (slug: string) =>
  products.find((p) => p.slug === slug || p.aliases?.includes(slug));

export const formatPrice = (v: number, lang: Lang = "en") =>
  lang === "ar" ? `${v.toLocaleString("ar-EG")} ج.م` : `EGP ${v.toLocaleString("en-US")}`;

/** Price label for cards: "From …" when a product has several different prices (sizes or colors). */
export const priceLabel = (p: Product, lang: Lang = "en") => {
  const sized = p.sizes?.map((x) => x.price) ?? [];
  const pool = sized.length ? sized : p.variants.map((v) => v.price ?? p.price);
  const min = Math.min(...pool);
  const max = Math.max(...pool);
  return min !== max ? `${lang === "ar" ? "من" : "From"} ${formatPrice(min, lang)}` : formatPrice(min, lang);
};

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function orderMessage(opts: {
  name: string;
  variant?: string;
  size?: string;
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
        opts.size ? `المقاس: ${opts.size}` : null,
        opts.variant ? `التشطيب: ${opts.variant}` : null,
        opts.quantity ? `الكمية: ${opts.quantity}` : null,
        `السعر: ${formatPrice(opts.price, "ar")}`,
      ]
    : [
        "Hello Bold,",
        "",
        `I would like to order: ${opts.name}`,
        opts.size ? `Size: ${opts.size}` : null,
        opts.variant ? `Finish: ${opts.variant}` : null,
        opts.quantity ? `Quantity: ${opts.quantity}` : null,
        `Price: ${formatPrice(opts.price)}`,
      ];
  return lines.filter(Boolean).join("\n");
}