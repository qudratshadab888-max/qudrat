export interface Article {
  id: number
  title: { en: string; fa: string }
  summary: { en: string; fa: string }
  content: { en: string; fa: string }
  cover: string
  date: string
  author: string
}

export const articles: Article[] = [
  {
    id: 1,
    title: {
      en: "The Intersection of Art and Social Change",
      fa: "تقاطع هنر و تغییر اجتماعی",
    },
    summary: {
      en: "Exploring how artistic expression can be a powerful tool for social transformation and community engagement.",
      fa: "کاوش نحوه‌ای که بیان هنری می‌تواند ابزاری قدرتمند برای دگرگونی اجتماعی و مشارکت جامعه باشد.",
    },
    content: {
      en: "Art has always been a mirror to society, reflecting our deepest hopes and fears. Throughout history, artists have used their work to challenge social norms, advocate for justice, and inspire change. From street murals addressing social issues to installations questioning environmental concerns, contemporary art continues to be a platform for dialogue and activism.\n\nIn our contemporary context, the role of art in social change has become increasingly significant. Artists are not mere creators of aesthetic objects but catalysts for community engagement and social awareness. Through collaborative projects, public installations, and community-based initiatives, artists are creating spaces for dialogue, healing, and collective action.\n\nThe power of art lies in its ability to communicate beyond language barriers, touching hearts and minds in ways that traditional discourse cannot. When we engage with art, we are engaging with the artist's vision, our own emotions, and the shared human experience. This emotional connection is where social change begins—in the hearts of people who see themselves reflected in the work.",
      fa: "هنر همیشه آینه‌ای برای جامعه بوده است که امیدها و ترس‌های عمیق ما را منعکس می‌کند. در سراسر تاریخ، هنرمندان از کار خود برای چالش‌گیری از هنجارهای اجتماعی، حمایت از عدالت و الهام‌بخشی تغییر استفاده کرده‌اند. از دیوارنگاری‌های خیابانی که به مسائل اجتماعی می‌پردازند تا نصب‌ها که قلق‌های محیطی را زیر سؤال می‌برند، هنر معاصر همچنان صحنه‌ای برای گفتگو و فعالیت اجتماعی است.",
    },
    cover: "https://picsum.photos/600/400?random=20",
    date: "2025-11-10",
    author: "Qudratullah Shadab",
  },
  {
    id: 2,
    title: {
      en: "Preserving Cultural Heritage in the Digital Age",
      fa: "حفاظت از میراث فرهنگی در عصر دیجیتال",
    },
    summary: {
      en: "How technology can be leveraged to document, preserve, and celebrate cultural traditions for future generations.",
      fa: "نحوه‌ای که فناوری می‌تواند برای مستندسازی، حفاظت و جشن‌گیری سنت‌های فرهنگی برای نسل‌های آینده استفاده شود.",
    },
    content: {
      en: "In the digital age, we have unprecedented opportunities to preserve and share cultural heritage. Digital platforms, virtual museums, and online archives have revolutionized how we access and engage with cultural traditions. Traditional arts, indigenous knowledge, and historical narratives that were once at risk of being forgotten can now be documented and shared globally.\n\nHowever, digitization is not simply about creating electronic copies. It is about creating meaningful engagement with cultural content in ways that respect the original context and significance. When we digitize cultural heritage, we must consider questions of authenticity, attribution, cultural sensitivity, and community involvement.\n\nThe integration of traditional knowledge with digital tools creates new possibilities for cultural expression. Young artists can learn traditional techniques while also experimenting with new media. Communities can share their stories in their own voices, rather than through external interpretation. This democratization of cultural documentation empowers communities to be the guardians and narrators of their own heritage.",
      fa: "در عصر دیجیتال، ما فرصت‌های بی‌سابقه‌ای برای حفاظت و اشتراک‌گذاری میراث فرهنگی داریم. پلتفرم‌های دیجیتال، موزه‌های مجازی و آرشیوهای آنلاین انقلابی در نحوه دسترسی و مشارکت ما در سنت‌های فرهنگی ایجاد کرده‌اند. هنرهای سنتی، دانش بومی و روایات تاریخی که زمانی در خطر فراموشی بودند، اکنون می‌توانند به صورت جهانی مستند‌سازی و اشتراک‌گذاری شوند.",
    },
    cover: "https://picsum.photos/600/400?random=21",
    date: "2025-10-05",
    author: "Qudratullah Shadab",
  },
  {
    id: 3,
    title: {
      en: "The Language of Contemporary Painting",
      fa: "زبان نقاشی معاصر",
    },
    summary: {
      en: "Understanding how modern artists use color, form, and composition to communicate complex ideas and emotions.",
      fa: "درک نحوه‌ای که هنرمندان مدرن از رنگ، شکل و ترکیب‌بندی برای ارتباط ایده‌ها و احساسات پیچیده استفاده می‌کنند.",
    },
    content: {
      en: "Contemporary painting has evolved far beyond the traditional constraints of representation. Modern painters have developed a sophisticated visual language that allows them to explore abstract concepts, emotional states, and philosophical questions through the use of color, texture, composition, and form.\n\nColor in contemporary painting is not merely decorative but communicative. Each hue carries cultural, psychological, and emotional associations. The juxtaposition of colors creates tension, harmony, or dialogue. Through careful color choices, artists can evoke specific moods and guide viewers through emotional landscapes.\n\nForm and composition serve as the grammar of visual communication. How elements are arranged in space, how lines interact, how shapes relate to negative space—all of these formal decisions contribute to meaning. Artists may employ traditional compositional structures or deliberately disrupt them to create tension or provoke critical engagement.\n\nThe power of contemporary painting lies in its ability to be open-ended and interpretive. Unlike representational art that aims to depict reality, abstract and contemporary painting invites multiple readings and interpretations. This openness creates a dialogue between artwork and viewer, where meaning is not fixed but created through the act of viewing and interpretation.",
      fa: "نقاشی معاصر بسیار فراتر از محدودیت‌های سنتی نمایندگی تکامل یافته است. نقاشان مدرن یک زبان بصری پیشرفته‌ای توسعه داده‌اند که به آن‌ها امکان می‌دهد از رنگ، بافت، ترکیب‌بندی و شکل برای کاوش مفاهیم انتزاعی، حالات احساسی و سؤالات فلسفی استفاده کنند.",
    },
    cover: "https://picsum.photos/600/400?random=22",
    date: "2025-09-12",
    author: "Qudratullah Shadab",
  },
]
