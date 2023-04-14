/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
      mono: ['Azeret Mono', 'monospace'],
    },
    extend: {
      colors: {
        // Light
        'bg-light': '#F5F5FA',
        // Dark
        'bg-dark': '#333333',
        // Primary
        'primary-050': '#FFE8D9',
        'primary-100': '#FFD0B5',
        'primary-200': '#FFB088',
        'primary-300': '#FF9466',
        'primary-400': '#F9703E',
        'primary-500': '#F35627',
        'primary-600': '#DE3A11',
        'primary-700': '#C52707',
        'primary-800': '#AD1D07',
        'primary-900': '#841003',

        // Neutral
        'neutral-050': '#F5F7FA',
        'neutral-100': '#E4E7EB',
        'neutral-200': '#CBD2D9',
        'neutral-300': '#9AA5B1',
        'neutral-400': '#7B8794',
        'neutral-500': '#616E7C',
        'neutral-600': '#52606D',
        'neutral-700': '#3E4C59',
        'neutral-800': '#323F4B',
        'neutral-900': '#1F2933',

        // Supporting
        'indigo-050': '#E0E8F9',
        'indigo-100': '#BED0F7',
        'indigo-200': '#98AEEB',
        'indigo-300': '#7B93DB',
        'indigo-400': '#647ACB',
        'indigo-500': '#4C63B6',
        'indigo-600': '#4055A8',
        'indigo-700': '#35469C',
        'indigo-800': '#2D3A8C',
        'indigo-900': '#19216C',

        'red-050': '#FFEEEE',
        'red-100': '#FACDCD',
        'red-200': '#F29B9B',
        'red-300': '#E66A6A',
        'red-400': '#D64545',
        'red-500': '#BA2525',
        'red-600': '#A61B1B',
        'red-700': '#911111',
        'red-800': '#780A0A',
        'red-900': '#610404',

        'yellow-050': '#FFFAEB',
        'yellow-100': '#FCEFC7',
        'yellow-200': '#F8E3A3',
        'yellow-300': '#F9DA8B',
        'yellow-400': '#F7D070',
        'yellow-500': '#E9B949',
        'yellow-600': '#C99A2E',
        'yellow-700': '#A27C1A',
        'yellow-800': '#7C5E10',
        'yellow-900': '#513C06',

        'green-050': '#E3F9E5',
        'green-100': '#C1EAC5',
        'green-200': '#A3D9A5',
        'green-300': '#7BC47F',
        'green-400': '#57AE5B',
        'green-500': '#3F9142',
        'green-600': '#2F8132',
        'green-700': '#207227',
        'green-800': '#0E5814',
        'green-900': '#05400A',
      },
    },
  },
  plugins: [],
};
