/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          purple: {
            DEFAULT: '#B400FF',
            light: '#D946EF',
            dark: '#7C00B8',
            glow: '#A020F0',
          },
          cyan: {
            DEFAULT: '#00F0FF',
            light: '#67E8F9',
            dark: '#0891B2',
            glow: '#22D3EE',
          },
        },
        dark: {
          bg: '#0A0E27',
          card: '#151B2E',
          surface: '#1E2338',
          border: '#2D3548',
        },
        light: {
          bg: '#FFFFFF',
          card: '#F8F8F8',
          surface: '#F0F0F0',
          border: '#E5E7EB',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon-purple': '0 0 20px rgba(180, 0, 255, 0.5)',
        'neon-purple-lg': '0 0 40px rgba(180, 0, 255, 0.6)',
        'neon-cyan': '0 0 20px rgba(0, 240, 255, 0.5)',
        'neon-cyan-lg': '0 0 40px rgba(0, 240, 255, 0.6)',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-neon': 'linear-gradient(135deg, #B400FF 0%, #00F0FF 100%)',
        'gradient-neon-reverse':
          'linear-gradient(135deg, #00F0FF 0%, #B400FF 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0A0E27 0%, #151B2E 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-in-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in-down': 'fadeInDown 0.5s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'scale-in': 'scaleIn 0.35s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'},
        },
        fadeInUp: {
          '0%': {opacity: '0', transform: 'translateY(20px)'},
          '100%': {opacity: '1', transform: 'translateY(0)'},
        },
        fadeInDown: {
          '0%': {opacity: '0', transform: 'translateY(-20px)'},
          '100%': {opacity: '1', transform: 'translateY(0)'},
        },
        slideUp: {
          '0%': {transform: 'translateY(100%)'},
          '100%': {transform: 'translateY(0)'},
        },
        slideDown: {
          '0%': {transform: 'translateY(-100%)'},
          '100%': {transform: 'translateY(0)'},
        },
        scaleIn: {
          '0%': {opacity: '0', transform: 'scale(0.9)'},
          '100%': {opacity: '1', transform: 'scale(1)'},
        },
        glowPulse: {
          '0%, 100%': {opacity: '1', filter: 'brightness(1)'},
          '50%': {opacity: '0.8', filter: 'brightness(1.2)'},
        },
        float: {
          '0%, 100%': {transform: 'translateY(0px)'},
          '50%': {transform: 'translateY(-20px)'},
        },
        shimmer: {
          '0%': {backgroundPosition: '-1000px 0'},
          '100%': {backgroundPosition: '1000px 0'},
        },
      },
      transitionDuration: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
      },
    },
  },
  plugins: [],
};
