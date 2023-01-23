/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  i18n: {
    locales: ['de-DE', 'en-US', 'fr-FR', 'nl-NL', 'it-IT'],
    defaultLocale: 'en-US',
    localDetection: true,
  },
  theme: {
    extend: {
      colors: {
        gray: {
          light: '#A3AFBD',
          normal: '#54575C',
          dark: '#111111'
        },
        bg: '#F5F7FF'
      }
    },
  },
  plugins: [],
}
