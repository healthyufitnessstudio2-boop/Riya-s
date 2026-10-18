/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hospital: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          300: '#7DD3FC',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
          navy: '#0B192C',
          dark: '#0F172A',
        },
        primary: {
          DEFAULT: '#0284C7',
          foreground: '#FFFFFF',
          hover: '#0369A1',
        },
        secondary: {
          DEFAULT: '#0D9488',
          foreground: '#FFFFFF',
          hover: '#0F766E',
        },
        accent: {
          DEFAULT: '#F1F5F9',
          foreground: '#0F172A',
        },
        background: '#FFFFFF',
        foreground: '#0F172A',
        muted: {
          DEFAULT: '#F8FAFC',
          foreground: '#64748B',
        },
        card: {
          DEFAULT: 'rgba(255, 255, 255, 0.85)',
          foreground: '#0F172A',
        },
        border: '#E2E8F0',
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#1EA952',
          dark: '#128C7E',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'glow-primary': '0 0 25px rgba(2, 132, 199, 0.25)',
        'glow-teal': '0 0 25px rgba(13, 148, 136, 0.25)',
        'card-soft': '0 10px 30px -10px rgba(15, 23, 42, 0.08)',
        'card-hover': '0 20px 40px -15px rgba(15, 23, 42, 0.15)',
        'soft-sm': '0 2px 8px rgba(15, 23, 42, 0.05)',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.75' }
        }
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
