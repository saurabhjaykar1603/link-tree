/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    animation: false,
  },
  keyframes: {
    moveUpDown: {
      '0%': {
        transform: 'translateY(0)',
      },
      '50%': {
        transform: 'translateY(-10px)',
      },
      '100%': {
        transform: 'translateY(0)',
      },
    },
  },
  variants: {
    extend: {
      animation: ['hover'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.animate-move-up-down': {
          animation: 'moveUpDown 1s ease infinite',
        },
      };
      addUtilities(newUtilities, ['hover']);
    },
  ],
};
