module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './**/*.{html,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        cornflower: '#6495ed',
        primary: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
      },
      animation: {
        blob: 'blob 12s infinite ease-in-out',
        reveal: 'reveal 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'float-vertical': 'floatVertical 5s ease-in-out infinite',
        'float-subtle': 'floatVertical 7s ease-in-out infinite',
        'drift-minimal': 'driftMinimal 6s ease-in-out infinite',
        'sway-minimal': 'swayMinimal 8s ease-in-out infinite',
        drift: 'driftMinimal 5s ease-in-out infinite',
        sway: 'swayMinimal 6s ease-in-out infinite',
        float: 'floatVertical 4s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(20px, -30px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatVertical: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        driftMinimal: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(8px, -4px)' },
        },
        swayMinimal: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(1.2deg)' },
        },
      },
    },
  },
  plugins: [],
};
