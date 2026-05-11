/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        bg:      "#ffffff",
        surface: "#f8faf8",
        card:    "#ffffff",
        border:  "#e8e8e8",
        green: {
          DEFAULT: "#39C557",
          dark:    "#2aa844",
          light:   "#d4f5dc",
          pale:    "#f0fbf2",
        },
        text: {
          primary:   "#111111",
          secondary: "#555555",
          muted:     "#aaaaaa",
        },
      },
    },
  },
  plugins: [],
};
