/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      colors: {
        // Design tokens based on the supplied brand palette.
        // Usage examples: bg-forest-700, text-ink, bg-linen, border-forest-300.
        forest: {
          50: '#f6f7f2',
          100: '#F1F0EA',
          300: '#c9d4c6',
          500: '#6f8b70',
          700: '#31543d',
          900: '#1f3a2c',
        },
        linen: '#E5E7E6',
        ink: '#222121',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        script: ['Segoe Script', 'Brush Script MT', 'cursive'],
      },
      boxShadow: {
        soft: '0 24px 70px rgba(39, 71, 53, 0.10)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        draw: {
          '0%': { opacity: '0', transform: 'scaleX(0)' },
          '100%': { opacity: '1', transform: 'scaleX(1)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 800ms ease both',
        float: 'float 5s ease-in-out infinite',
        draw: 'draw 800ms ease both',
      },
    },
  },
  plugins: [],
}
