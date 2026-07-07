/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        secondary: ['Inter', 'sans-serif'],
      },
      cursor: {
        'default': 'url("/images/cursor-default.svg") 5 3, auto',
        'pointer': 'url("/images/cursor-pointer.svg") 5 3, pointer',
      },
    },
  },
  plugins: [],
}
