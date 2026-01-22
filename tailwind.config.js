/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#293157',
        secondary: '#f0c12b',
      },
    },
  },
  plugins: [],
};
