/** @type {import('tailwindcss').Config} */

import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Anuphan', 'sans-serif', ...fontFamily.sans],
      mono: ['Azeret Mono', 'monospace'],
    },
    extend: {
      colors: {
        // Light
        'bg-light': '#fff',
        // Dark
        'bg-dark': '#2c2c2c',
        // Card
        card: {
          background: {
            light: '#fff',
            dark: '#222123',
          },
          description: '#64748b',
        },
        input: {
          text: {
            light: '',
            dark: '#727172',
          },
          background: {
            light: '#fff',
            dark: '#1E1D1E',
          },
          border: {
            light: '#e2e8f0',
            dark: '#373537',
          },
        },
        // Primary
        primary: {
          '050': '#EAE2F8',
          100: '#CFBCF2',
          200: '#A081D9',
          300: '#8662C7',
          DEFAULT: '#724BB7',
          500: '#653CAD',
          600: '#51279B',
          700: '#421987',
          800: '#34126F',
          900: '#240754',
        },
        // Secondary
        secondary: {
          '050': '#FFE3E3',
          100: '#FFBDBD',
          200: '#FF9B9B',
          300: '#F86A6A',
          DEFAULT: '#EF4E4E',
          500: '#E12D39',
          600: '#CF1124',
          700: '#AB091E',
          800: '#8A041A',
          900: '#610316',
        },
        // Neutrals
        neutrals: {
          '050': '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          DEFAULT: '#627D98',
          600: '#486581',
          700: '#334E68',
          800: '#243B53',
          900: '#102A43',
        },
        // Supporting
        'teal-vivid': {
          '050': '#F0FCF9',
          100: '#C6F7E9',
          200: '#8EEDD1',
          300: '#5FE3C0',
          400: '#2DCCA7',
          DEFAULT: '#17B897',
          600: '#079A82',
          700: '#048271',
          800: '#016457',
          900: '#004440',
        },
        'yellow-vivid': {
          '050': '#FFFBEA',
          100: '#FFF3C4',
          200: '#FCE588',
          300: '#FADB5F',
          400: '#F7C948',
          DEFAULT: '#F0B429',
          600: '#DE911D',
          700: '#CB6E17',
          800: '#B44D12',
          900: '#8D2B0B',
        },
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
