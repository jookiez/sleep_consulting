import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        leaf: {
          400: '#8fa290',
          500: '#7a8e7b',
          600: '#667566',
        },
        moon: {
          50: '#f3f1f7',
          100: '#e6e2ef',
          200: '#d0c9e0',
          300: '#b9b0d0',
          400: '#aea2c9',
          500: '#9688b5',
          600: '#7e6fa1',
          700: '#665a83',
        },
      },
    },
  },
  plugins: [],
};

export default config;
