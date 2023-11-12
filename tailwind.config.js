/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          // 'heroSEction':"url('/public/heroBG.jpg')",
      },
      colors:{
        'themeBlue':'#1b4b66',
        'darkBlue' : '#13101E',
        'footerGray':'#b6b6b6',
        'themeGray':'#f0f0f0',
      }
    },
  },
  plugins: [],
}
