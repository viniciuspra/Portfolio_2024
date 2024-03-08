/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./@/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        card: {
          DEFAULT: "var(--card)",
          stroke: "var(--card-stroke)",
        },
        muted: "var(--muted)",
        primary: "var(--primary)",
        button: {
          DEFAULT: "var(--button)",
          stroke: "var(--button-stroke)",
        },
      },
      borderWidth: {
        1.5: "1.5px",
      },
    },
  },
  plugins: [],
};
