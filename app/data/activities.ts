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
      en: "Youth Empowerment Workshop",
      fa: "کارگاه توانمندسازی جوانان",
    },
    description: {
      en: "Conducted a comprehensive workshop on creative skills and personal development for 150 young participants.",
      fa: "برگزاری کارگاه جامع مهارت‌های خلاقانه و توسعه شخصی برای ۱۵۰ شرکت‌کننده جوان.",
    },
    category: "social",
    date: "2025-11-15",
    image: "https://picsum.photos/400/300?random=1",
  },
  {
    id: 2,
    title: {
      en: "Community Art Initiative",
      fa: "ابتکار هنری جامعه",
    },
    description: {
      en: "Organized a community mural project that brought together 50 local artists and volunteers.",
      fa: "سازماندهی پروژه دیوارنگاری جامعه‌ای که ۵۰ هنرمند و داوطلب محلی را جمع آوری کرد.",
    },
    category: "social",
    date: "2025-10-22",
    image: "https://picsum.photos/400/300?random=2",
  },
  {
    id: 3,
    title: {
      en: "Education Access Program",
      fa: "برنامه دسترسی به آموزش",
    },
    description: {
      en: "Launched a scholarship initiative providing art education scholarships to underprivileged students.",
      fa: "راه‌اندازی ابتکار بورسیه‌ای که بورسیه‌های تحصیلات هنری را به دانش‌آموزان محروم ارائه می‌دهد.",
    },
    category: "social",
    date: "2025-09-10",
    image: "https://picsum.photos/400/300?random=3",
  },
  // Cultural Activities
  {
    id: 4,
    title: {
      en: "Dari Poetry Festival",
      fa: "جشنواره شعر دری",
    },
    description: {
      en: "Organized annual Dari poetry festival celebrating classical and contemporary literary expressions.",
      fa: "سازماندهی جشنواره سالانه شعر دری که بیان ادبی کلاسیک و معاصر را جشن می‌گیرد.",
    },
    category: "cultural",
    date: "2025-12-05",
    image: "https://picsum.photos/400/300?random=4",
  },
  {
    id: 5,
    title: {
      en: "Cultural Heritage Exhibition",
      fa: "نمایشگاه میراث فرهنگی",
    },
    description: {
      en: "Curated an exhibition showcasing 200 artifacts and contemporary artworks exploring cultural identity.",
      fa: "انتخاب یک نمایشگاه که ۲۰۰ اثر باستانی و آثار هنری معاصر را به نمایش می‌گذاشت.",
    },
    category: "cultural",
    date: "2025-11-28",
    image: "https://picsum.photos/400/300?random=5",
  },
  {
    id: 6,
    title: {
      en: "Traditional Arts Workshop",
      fa: "کارگاه هنرهای سنتی",
    },
    description: {
      en: "Conducted workshops on traditional miniature painting and calligraphy techniques.",
      fa: "برگزاری کارگاه‌های مربوط به تکنیک‌های نقاشی مینیاتور و خوشنویسی سنتی.",
    },
    category: "cultural",
    date: "2025-10-18",
    image: "https://picsum.photos/400/300?random=6",
  },
]
