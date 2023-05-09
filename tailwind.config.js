/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        lg: '1440px',
      },

      backgroundImage: {
        hero: "url('/assets/images/branding/hero-image.jpeg')",
      },
    },
  },
  plugins: [],
};
