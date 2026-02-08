/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#8AE6FF",
          DEFAULT: "#3B82F6",
          dark: "#1E40AF",
        },
        accent: {
          mint: "#34D399",
          violet: "#A78BFA",
        },
      },
      fontFamily: {
        display: ["Sora", "ui-sans-serif", "system-ui"],
        body: ["Manrope", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        glow: "0 0 25px rgba(59, 130, 246, 0.25)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shine: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shine: "shine 6s linear infinite",
      },
    },
  },
  plugins: [],
};
