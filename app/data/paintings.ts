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
    title: { en: "Contemplation in Blue", fa: "تفکر در آبی" },
    description: {
      en: "A meditative exploration of solitude and introspection through layered blue tones.",
      fa: "کاوش تأملی از تنهایی و خودآگاهی از طریق رنگ‌های آبی لایه‌ای.",
    },
    date: "2025-10-15",
    image: "https://picsum.photos/400/400?random=10",
    category: "contemporary",
  },
  {
    id: 2,
    title: { en: "Cultural Fusion", fa: "ترکیب فرهنگی" },
    description: {
      en: "Blending traditional and modern artistic elements to create a dialogue between past and present.",
      fa: "ترکیب عناصر هنری سنتی و مدرن برای ایجاد گفتگو میان گذشته و حال.",
    },
    date: "2025-09-22",
    image: "https://picsum.photos/400/400?random=11",
    category: "fusion",
  },
  {
    id: 3,
    title: { en: "Urban Landscape", fa: "منظره شهری" },
    description: {
      en: "Contemporary urban scenes exploring the intersection of human activity and natural elements.",
      fa: "صحنه‌های شهری معاصر که تقاطع فعالیت انسانی و عناصر طبیعی را کاوش می‌کند.",
    },
    date: "2025-08-30",
    image: "https://picsum.photos/400/400?random=12",
    category: "urban",
  },
  {
    id: 4,
    title: { en: "Poetic Abstraction", fa: "انتزاع شاعرانه" },
    description: {
      en: "Abstract work inspired by verses and emotional depth of poetry.",
      fa: "اثر انتزاعی الهام‌گرفته از اشعار و عمق احساسی شعر.",
    },
    date: "2025-08-05",
    image: "https://picsum.photos/400/400?random=13",
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
    image: "https://picsum.photos/400/400?random=14",
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
    image: "https://picsum.photos/400/400?random=15",
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
    image: "https://picsum.photos/400/400?random=16",
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
    image: "https://picsum.photos/400/400?random=17",
    category: "contemporary",
  },
]
