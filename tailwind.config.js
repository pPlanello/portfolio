/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // light theme
        'main-theme': 'rgb(249 250 251)',
        'nav-mobile-theme': 'rgb(249 250 251)',
        'primary-color': 'rgb(255 173 0)',

        // dark theme
        'main-theme-dark': 'rgb(17 24 39)',
        'nav-mobile-theme-dark': 'rgb(17 24 39)',
        'primary-color-dark': 'rgb(234 179 8)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    }
  },
  plugins: [],
}
