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
      en: "Why Community Needs Artists",
      fa: "چرا جامعه به هنرمندان نیاز دارد",
    },
    summary: {
      en: "A reflection on how artists help communities remember, question, and imagine better ways of living together.",
      fa: "تأملی درباره این‌که هنرمندان چگونه به جامعه کمک می‌کنند به یاد آورد، پرسش کند و راه‌های بهتر زیستن باهم را تصور کند.",
    },
    content: {
      en: "Art has always been a mirror to society, reflecting our deepest hopes and fears. Throughout history, artists have used their work to challenge social norms, advocate for justice, and inspire change. From street murals addressing social issues to installations questioning environmental concerns, contemporary art continues to be a platform for dialogue and activism.\n\nIn our contemporary context, the role of art in social change has become increasingly significant. Artists are not mere creators of aesthetic objects but catalysts for community engagement and social awareness. Through collaborative projects, public installations, and community-based initiatives, artists are creating spaces for dialogue, healing, and collective action.\n\nThe power of art lies in its ability to communicate beyond language barriers, touching hearts and minds in ways that traditional discourse cannot. When we engage with art, we are engaging with the artist's vision, our own emotions, and the shared human experience. This emotional connection is where social change begins—in the hearts of people who see themselves reflected in the work.",
      fa: "هنر همیشه آینه‌ای برای جامعه بوده است؛ آینه‌ای که امیدها، ترس‌ها و پرسش‌های عمیق ما را نشان می‌دهد. هنرمند تنها سازنده تصویر زیبا نیست، بلکه کسی است که امکان گفتگو را باز می‌کند و به مردم کمک می‌کند خود را در یک روایت مشترک ببینند.\n\nوقتی هنر وارد جامعه می‌شود، خاطره شخصی به تجربه جمعی نزدیک می‌شود. یک نقاشی، یک شعر یا یک دیوارنگاری می‌تواند موضوعی دشوار را قابل لمس کند و مردم را به شنیدن یکدیگر دعوت کند.\n\nنیروی هنر در همین توانایی نهفته است: فراتر رفتن از زبان رسمی و رسیدن به دل انسان‌ها. تغییر اجتماعی اغلب از همین لحظه‌های کوچک دیدن، شنیدن و همدلی آغاز می‌شود.",
    },
    cover: "/images/logo.png",
    date: "2025-11-10",
    author: "Qudratullah Shadab",
  },
  {
    id: 2,
    title: {
      en: "Keeping Cultural Memory Alive",
      fa: "زنده نگه‌داشتن خاطره فرهنگی",
    },
    summary: {
      en: "On documenting language, images, stories, and inherited symbols before they disappear from daily life.",
      fa: "درباره ثبت زبان، تصویرها، روایت‌ها و نمادهای به‌ارث‌رسیده پیش از آن‌که از زندگی روزمره ناپدید شوند.",
    },
    content: {
      en: "In the digital age, we have unprecedented opportunities to preserve and share cultural heritage. Digital platforms, virtual museums, and online archives have revolutionized how we access and engage with cultural traditions. Traditional arts, indigenous knowledge, and historical narratives that were once at risk of being forgotten can now be documented and shared globally.\n\nHowever, digitization is not simply about creating electronic copies. It is about creating meaningful engagement with cultural content in ways that respect the original context and significance. When we digitize cultural heritage, we must consider questions of authenticity, attribution, cultural sensitivity, and community involvement.\n\nThe integration of traditional knowledge with digital tools creates new possibilities for cultural expression. Young artists can learn traditional techniques while also experimenting with new media. Communities can share their stories in their own voices, rather than through external interpretation. This democratization of cultural documentation empowers communities to be the guardians and narrators of their own heritage.",
      fa: "خاطره فرهنگی تنها در موزه‌ها زندگی نمی‌کند. در زبان خانه، در طرح قالین، در آهنگ شعر، در شیوه سلام کردن و در نشانه‌هایی که نسل‌ها با خود حمل کرده‌اند زنده می‌ماند.\n\nامروز ثبت این خاطره اهمیت بیشتری دارد. بسیاری از روایت‌ها در جریان مهاجرت، جنگ و تغییرات سریع اجتماعی کم‌رنگ می‌شوند. نوشتن، نقاشی، عکس و آرشیف دیجیتال می‌توانند راه‌هایی برای نگهداری این صداها باشند.\n\nحفاظت از میراث یعنی اجازه دادن به گذشته که در زمان حال نفس بکشد. این کار زمانی معنا دارد که جامعه خودش روایتگر تجربه و زیبایی خود باشد.",
    },
    cover: "/images/logo.png",
    date: "2025-10-05",
    author: "Qudratullah Shadab",
  },
  {
    id: 3,
    title: {
      en: "Reading Color in Contemporary Painting",
      fa: "خواندن رنگ در نقاشی معاصر",
    },
    summary: {
      en: "A short essay on color, form, rhythm, and how abstract painting can hold personal and cultural meaning.",
      fa: "یادداشتی کوتاه درباره رنگ، فرم، ریتم و این‌که نقاشی انتزاعی چگونه معنای شخصی و فرهنگی را در خود نگه می‌دارد.",
    },
    content: {
      en: "Contemporary painting has evolved far beyond the traditional constraints of representation. Modern painters have developed a sophisticated visual language that allows them to explore abstract concepts, emotional states, and philosophical questions through the use of color, texture, composition, and form.\n\nColor in contemporary painting is not merely decorative but communicative. Each hue carries cultural, psychological, and emotional associations. The juxtaposition of colors creates tension, harmony, or dialogue. Through careful color choices, artists can evoke specific moods and guide viewers through emotional landscapes.\n\nForm and composition serve as the grammar of visual communication. How elements are arranged in space, how lines interact, how shapes relate to negative space—all of these formal decisions contribute to meaning. Artists may employ traditional compositional structures or deliberately disrupt them to create tension or provoke critical engagement.\n\nThe power of contemporary painting lies in its ability to be open-ended and interpretive. Unlike representational art that aims to depict reality, abstract and contemporary painting invites multiple readings and interpretations. This openness creates a dialogue between artwork and viewer, where meaning is not fixed but created through the act of viewing and interpretation.",
      fa: "رنگ در نقاشی معاصر فقط زینت نیست؛ زبان است. هر رنگ می‌تواند خاطره، اندوه، امید یا تنش را حمل کند. وقتی رنگ‌ها کنار هم قرار می‌گیرند، میان آن‌ها گفتگویی شکل می‌گیرد که گاهی آرام و گاهی پرتنش است.\n\nفرم و ترکیب‌بندی دستور زبان این گفتگو هستند. خط‌ها، فاصله‌ها و سطوح خالی به بیننده راه می‌دهند تا اثر را بخواند، نه فقط نگاه کند.\n\nنقاشی انتزاعی معنا را به یک پاسخ ساده محدود نمی‌کند. این باز بودن باعث می‌شود هر بیننده با تجربه خود وارد اثر شود و معنای تازه‌ای بسازد.",
    },
    cover: "/images/logo.png",
    date: "2025-09-12",
    author: "Qudratullah Shadab",
  },
]
