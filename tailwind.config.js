/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1437',
          light: '#1A2855',
          dark: '#060C1F',
        },
        gold: {
          DEFAULT: '#C9973A',
          light: '#F5E6BC',
          pale: '#FDF7EC',
          dark: '#9B7020',
        },
        cream: '#FBF8F3',
        charcoal: '#1A1A2E',
        muted: '#6B7280',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        float: 'float 4s ease-in-out infinite',
        fadeUp: 'fadeUp 0.7s ease-out forwards',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        slideIn: 'slideIn 0.4s ease-out forwards',
        pulse2: 'pulse2 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulse2: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201, 151, 58, 0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(201, 151, 58, 0)' },
        },
      },
    },
  },
  plugins: [],
}
