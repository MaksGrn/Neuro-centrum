/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        MainColor: "var(--MainColor)", // Używa CSS variable
        SecondColor: "var(--SecondColor)", // Alias
        ThirdColor: "var(--ThirdColor)",
      },
    },
  },
  plugins: [],
};
