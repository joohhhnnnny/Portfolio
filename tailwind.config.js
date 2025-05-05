// tailwind.config.js
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      keyframes: {
        diagonalMove: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(20px, 20px)' },
        },
      },
      animation: {
        diagonal: 'diagonalMove 4s ease-in-out infinite',
      },
      transitionProperty: {
        'transform': 'transform',
      },
    },
  },
  safelist: ['animate-diagonal'],
  plugins: [],
}