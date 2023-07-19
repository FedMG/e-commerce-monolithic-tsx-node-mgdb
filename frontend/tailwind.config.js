const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom-sans': ['var(--font-inter)', ...fontFamily.sans]
      },
      backgroundColor: {
        'gray-300-opacity-45': 'rgba(222, 226, 230, 0.45)'
      },
      keyframes: {
        bounces: {
          '0%': {
            transform: 'translateX(0) scale(1)'
          },
          '50%': {
            transform: 'translateX(-4px) scale(1.03)'
          },
          '75%': {
            transform: 'translateX(-2px) scale(1.03)'
          },
          '100%': {
            transform: 'translateX(0) scale(1)'
          }
        }
      },
      animation: {
        bounces: 'bounces 7000ms ease-in-out infinite'
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a'
        }
      }
    }
  },
  plugins: []
}
