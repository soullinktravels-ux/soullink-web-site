import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';

const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(30 64 175 / <alpha-value>)', // Professional blue
        secondary: 'rgb(245 158 11 / <alpha-value>)', // Gold/Orange accent
        neutral: {
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        success: '#22C55E', // Green
      },
      fontFamily: {
        heading: ['Inter', 'Poppins', 'sans-serif'],
        body: ['Inter', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [typography, forms],
};

export default config;
