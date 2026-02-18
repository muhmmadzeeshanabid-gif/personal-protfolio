// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-black": "#000000",
        "primary-neutral": "#404040",
        "primary-white": "#ffffff",
        zinc: {
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          500: "#71717a",
          800: "#27272a",
        },
        "error-500": "#ef4444",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      fontSize: {
        display: ["48px", "56px"],
        h2: ["32px", "40px"],
        h3: ["28px", "32px"],
        h4: ["24px", "28px"],
        h5: ["20px", "24px"],
        h6: ["16px", "20px"],
        p1: ["20px", "24px"],
        p2: ["16px", "20px"],
        p3: ["12px", "16px"],
        btn: ["20px", "24px"],
        btn2: ["16px", "20px"],
      },
      letterSpacing: {
        tight: "-0.02em",
        wide: "0.02em",
      },
      borderRadius: {
        btn: "2px",
      },
    },
  },
  plugins: [],
};
