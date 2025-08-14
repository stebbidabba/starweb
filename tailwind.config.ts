import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0A10',
        'background-2': '#111120',
        deep: '#2A1548',
        violet: '#9B5CF6',
        gold: '#E7C67E',
        purple1: '#6C3B9C',
        purple2: '#9B5CF6',
        purple3: '#C5A3FF',
        cyan: '#00D1FF',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['Lato', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        drift: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-30px)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        twinkle: 'twinkle 3s ease-in-out infinite',
        drift: 'drift 60s ease-in-out infinite alternate',
        'rotate-slow': 'rotateSlow 80s linear infinite',
      },
      boxShadow: {
        glow: '0 0 20px rgba(155, 92, 246, 0.45)',
      }
    },
  },
  plugins: [],
}

export default config


