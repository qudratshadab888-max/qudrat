export interface Activity {
  id: number
  title: { en: string; fa: string }
  description: { en: string; fa: string }
  category: "social" | "cultural"
  date: string
  image: string
  link?: string
}

export const activities: Activity[] = [
  // Social Activities
  {
    id: 1,
    title: {
      en: "Young Artists Mentorship Circle",
      fa: "حلقه راهنمایی هنرمندان جوان",
    },
    description: {
      en: "Led a practical studio session for emerging artists on sketchbooks, visual research, and presenting a small body of work with confidence.",
      fa: "برگزاری نشست عملی کارگاهی برای هنرمندان نوپا درباره دفتر طراحی، پژوهش بصری و ارائه با اعتمادبه‌نفس یک مجموعه کوچک هنری.",
    },
    category: "social",
    date: "2025-11-15",
    image: "/images/logo.png",
  },
  {
    id: 2,
    title: {
      en: "Community Mural Planning Session",
      fa: "نشست برنامه‌ریزی دیوارنگاری جامعه",
    },
    description: {
      en: "Facilitated a neighborhood discussion on public art, local stories, and how murals can become shared spaces for memory and dialogue.",
      fa: "تسهیل گفتگوی محلی درباره هنر عمومی، روایت‌های مردم و این‌که دیوارنگاری چگونه می‌تواند فضایی مشترک برای خاطره و گفتگو بسازد.",
    },
    category: "social",
    date: "2025-10-22",
    image: "/images/logo.png",
  },
  {
    id: 3,
    title: {
      en: "Creative Learning Support",
      fa: "حمایت از آموزش خلاق",
    },
    description: {
      en: "Supported students with introductory art materials, guided drawing exercises, and conversations about cultural identity through creative practice.",
      fa: "حمایت از دانش‌آموزان با مواد ابتدایی هنری، تمرین‌های هدایت‌شده طراحی و گفتگو درباره هویت فرهنگی از راه کار خلاقانه.",
    },
    category: "social",
    date: "2025-09-10",
    image: "/images/logo.png",
  },
  // Cultural Activities
  {
    id: 4,
    title: {
      en: "Dari Poetry Evening",
      fa: "شب شعر دری",
    },
    description: {
      en: "Hosted an intimate poetry evening connecting classical Dari verse with contemporary reflections on migration, memory, and belonging.",
      fa: "میزبانی شب شعر صمیمی که شعر کلاسیک دری را با تأملات معاصر درباره مهاجرت، خاطره و تعلق پیوند داد.",
    },
    category: "cultural",
    date: "2025-12-05",
    image: "/images/logo.png",
  },
  {
    id: 5,
    title: {
      en: "Cultural Memory Exhibition",
      fa: "نمایشگاه خاطره فرهنگی",
    },
    description: {
      en: "Curated a small exhibition pairing contemporary paintings with written reflections on language, family memory, and inherited symbols.",
      fa: "گردآوری نمایشگاه کوچکی که نقاشی‌های معاصر را با یادداشت‌هایی درباره زبان، خاطره خانوادگی و نمادهای به‌ارث‌رسیده همراه کرد.",
    },
    category: "cultural",
    date: "2025-11-28",
    image: "/images/logo.png",
  },
  {
    id: 6,
    title: {
      en: "Traditional Motifs Workshop",
      fa: "کارگاه نقش‌های سنتی",
    },
    description: {
      en: "Introduced participants to pattern, line, and ornament through exercises inspired by miniature painting and calligraphic composition.",
      fa: "آشنایی شرکت‌کنندگان با نقش، خط و تزیین از راه تمرین‌هایی الهام‌گرفته از مینیاتور و ترکیب‌بندی خوشنویسانه.",
    },
    category: "cultural",
    date: "2025-10-18",
    image: "/images/logo.png",
  },
]
