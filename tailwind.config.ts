import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-bg': '#f8f7f4',
        'light-text': '#1a202c',
        'dark-bg': '#0a192f',
        'dark-text': '#e6f1ff',
        'accent-light': '#4f46e5', // Indigo
        'accent-dark': '#facc15',  // Gold
      },
      fontFamily: {
        sans: ['var(--font-lora)', ...fontFamily.sans],
        serif: ['var(--font-playfair)', ...fontFamily.serif],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-2%)' },
          '50%': { transform: 'translateY(2%)' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
