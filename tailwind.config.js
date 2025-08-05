/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'jissa': {
          'green': '#22c55e',
          'dark-green': '#16a34a',
          'light-green': '#4ade80',
          'black': '#0a0a0a',
          'dark-gray': '#1a1a1a',
          'gray': '#2a2a2a',
          'light-gray': '#404040',
        }
      }
    },
  },
  plugins: [],
};
