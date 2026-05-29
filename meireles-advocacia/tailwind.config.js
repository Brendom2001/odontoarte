/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#C9A84C',
        'gold-hover': '#E2C070',
        'bg-primary': '#080808',
        'bg-secondary': '#111111',
        'bg-tertiary': '#1A1A1A',
        'text-primary': '#F0EDE6',
        'text-secondary': '#9A9A8E',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
