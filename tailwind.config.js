/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-pattern': "url('/src/assets/bg-pattern.jpg')",
        'bg-projects': "url('/src/assets/bg-projects.jpg')",
        'bg-triangle-purple': "url('/src/assets/bg-triangle-purple.jpg')",
      },
      spacing: {
        400: '25rem',
        500: '32rem',
      },
      minHeight: {
        25: '25rem',
        30: '30rem',
        40: '40rem',
        50: '50rem',
        60: '60rem',
        80: '80rem',
      },
    },
  },
  plugins: [],
};
