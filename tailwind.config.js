/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f766e",
        danger: "#E50000",
        "dark-900": "#111827",
        "dark-500": "#6b7280",
        "dark-300": "#d1d5db",
        light: "#F9FAFB",
      },
      screens: {
        xs: "475px",
        sm: "575px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};
