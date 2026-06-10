export interface Poem {
  id: number
  title: { en: string; fa: string }
  text: string
  translation: string
  audioUrl?: string
  videoUrl?: string
  date: string
}

export const poems: Poem[] = [
  {
    id: 1,
    title: { en: "The Journey Within", fa: "سفر درون" },
    text: "در راه دل، رنگ‌های حقیقت پنهان است\nهر قدم روند، آینه‌ای از روح است\nتنهایی مثل ستاره، روشن و بلند\nدر شب تاریک، امید ما را پیوند",
    translation:
      "In the path of the heart, the colors of truth are hidden\nEach step of walking, a mirror of the soul\nSolitude like a star, bright and lofty\nIn the dark night, hope is our bond",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    date: "2025-11-05",
  },
  {
    id: 2,
    title: { en: "Whispers of Time", fa: "نجوای زمان" },
    text: "وقت سفیر گذشته، فریاد می‌کشد\nهر لحظه‌ای زندگی است، که ما بدتر می‌کشم\nفراموشی نیست پایان، بلکه آغاز نو است\nدر خاطرات، روح ما باقی و جاودانی است",
    translation:
      "Time is the messenger of the past, crying out\nEach moment is life, which we live worse\nForgetfulness is not the end, but a new beginning\nIn memories, our soul remains eternal",
    videoUrl: "https://www.youtube.com/watch?v=video-id",
    date: "2025-10-20",
  },
  {
    id: 3,
    title: { en: "Colors of Being", fa: "رنگ‌های هستی" },
    text: "برنگ سرخ، عشق و خطر قهقهی است\nبر سبز، امیدی که گرایه می‌زند\nدر آبی، تسکین و آرامش نهفته\nهر رنگ داستانی از درون روح سرایش است",
    translation:
      "Red with passion and danger's laughter\nGreen with hope that whispers\nIn blue, consolation and peace hidden\nEach color tells a story from within the soul",
    date: "2025-09-15",
  },
  {
    id: 4,
    title: { en: "Echoes of Dreams", fa: "پژواک رویاها" },
    text: "خواب‌ها برقی هستند که روح را روشن می‌کند\nدر شب انتظار، ستاره‌ای منتظر افق است\nهر آرزو بذری در باغ دل کاشته می‌شود\nزمان‌های سخت را ترک کنیم، بهار آید",
    translation:
      "Dreams are lightning that illuminates the soul\nIn the night of waiting, a star awaits the horizon\nEvery wish is a seed planted in the garden of the heart\nLet us abandon difficult times, let spring come",
    date: "2025-08-30",
  },
]
