/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f1fb",
          100: "#e8dff5",
          900: "#2E1065",
        },
        secondary: {
          400: "#60A5FA",
        },
        accent: "#D4AF37",
      },
      fontFamily: {
        vazir: ["Vazirmatn", "sans-serif"],
        nastaliq: ["Noto Nastaliq Urdu", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        h1: ["3rem", { lineHeight: "1.2" }],
        h2: ["2rem", { lineHeight: "1.3" }],
        h3: ["1.5rem", { lineHeight: "1.4" }],
        body: ["1rem", { lineHeight: "1.6" }],
      },
    },
  },
  plugins: [],
}
