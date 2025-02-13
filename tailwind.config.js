/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Include only the necessary files in the src folder
  ],
  theme: {
    extend: {
      keyframes: {
        slideFromTop: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideFromTop: 'slideFromTop 1s ease-out', // Define your custom animation
      },
    },
  },
  plugins: [],
};
