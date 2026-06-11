export interface Painting {
  id: number
  title: { en: string; fa: string }
  description: { en: string; fa: string }
  date: string
  image: string
  category: string
}

export const paintings: Painting[] = [
  {
    id: 1,
    title: { en: "Blue Memory", fa: "خاطره آبی" },
    description: {
      en: "Layered blues and quiet marks reflect the distance between remembered places and present life.",
      fa: "لایه‌های آبی و نشانه‌های آرام، فاصله میان مکان‌های به‌یادمانده و زندگی امروز را بازتاب می‌دهد.",
    },
    date: "2025-10-15",
    image: "/images/logo.png",
    category: "contemporary",
  },
  {
    id: 2,
    title: { en: "Inherited Pattern", fa: "نقش به‌ارث‌رسیده" },
    description: {
      en: "Traditional motifs are rearranged into a contemporary field of color, rhythm, and movement.",
      fa: "نقش‌های سنتی در میدانی معاصر از رنگ، ریتم و حرکت بازچیده شده‌اند.",
    },
    date: "2025-09-22",
    image: "/images/logo.png",
    category: "fusion",
  },
  {
    id: 3,
    title: { en: "City After Rain", fa: "شهر پس از باران" },
    description: {
      en: "A compact urban composition shaped by wet streets, reflected light, and the movement of daily life.",
      fa: "ترکیبی شهری و فشرده که از کوچه‌های نمناک، نور بازتابیده و حرکت زندگی روزمره ساخته شده است.",
    },
    date: "2025-08-30",
    image: "/images/logo.png",
    category: "urban",
  },
  {
    id: 4,
    title: { en: "Line of a Poem", fa: "مصراع یک شعر" },
    description: {
      en: "A visual response to the cadence of Dari poetry, where line and color behave like spoken breath.",
      fa: "پاسخی بصری به آهنگ شعر دری؛ جایی که خط و رنگ مانند نفسِ گفته‌شده رفتار می‌کنند.",
    },
    date: "2025-08-05",
    image: "/images/logo.png",
    category: "abstract",
  },
  {
    id: 5,
    title: { en: "Heritage Reinterpreted", fa: "میراث بازتعریف‌شده" },
    description: {
      en: "Reinterpretation of traditional motifs through contemporary artistic lens.",
      fa: "بازتعریف نقوش سنتی از طریق دیدگاه هنری معاصر.",
    },
    date: "2025-07-20",
    image: "/images/logo.png",
    category: "traditional",
  },
  {
    id: 6,
    title: { en: "Silent Dialogue", fa: "گفتگوی خموش" },
    description: {
      en: "Exploring communication and connection through minimalist artistic expression.",
      fa: "کاوش ارتباط و پیوند از طریق بیان هنری مینیمالیستی.",
    },
    date: "2025-07-10",
    image: "/images/logo.png",
    category: "minimalist",
  },
  {
    id: 7,
    title: { en: "Colors of Identity", fa: "رنگ‌های هویت" },
    description: {
      en: "A vibrant exploration of personal and cultural identity through bold color choices.",
      fa: "کاوش پویای هویت شخصی و فرهنگی از طریق انتخاب رنگ‌های جسورانه.",
    },
    date: "2025-06-15",
    image: "/images/logo.png",
    category: "expressive",
  },
  {
    id: 8,
    title: { en: "Transition Moments", fa: "لحظات انتقال" },
    description: {
      en: "Capturing fleeting moments of change and transformation in visual form.",
      fa: "ثبت لحظات ناپایدار تغییر و دگرگونی در قالب بصری.",
    },
    date: "2025-05-28",
    image: "/images/logo.png",
    category: "contemporary",
  },
]
