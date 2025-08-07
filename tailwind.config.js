/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f7f8f0',
          100: '#eef0e1',
          200: '#dde2c3',
          300: '#c8d19f',
          400: '#b5c47e',
          500: '#9db05c',
          600: '#8a9c4a',
          700: '#6f7d3a',
          800: '#5a6530',
          900: '#4a5428',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};