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
        primary: {
          DEFAULT: "var(--primary)",
          opacity: "var(--primary-opacity)",
        },
        button: {
          DEFAULT: "var(--button)",
          stroke: "var(--button-stroke)",
        },
      },
      borderWidth: {
        1.5: "1.5px",
      },
      boxShadow: {
        "cv-button": "0 3px 40px -10px var(--button)",
        "h-button": "0 3px 45px -6px var(--button)",
        "git-button": "0 3px 50px -14px var(--muted)",
      },
      keyframes: {
        fadeIn: {
          "0%": { transform: "translateY(-100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-out",
      },
    },
  },
  plugins: [],
};
