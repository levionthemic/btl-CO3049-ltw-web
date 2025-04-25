/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'Nunito Sans': ['Nunito Sans', 'sans-serif']
      },
      colors: {
        mainColor: {
          100: '#CDEAE1',
          200: '#AEE1D1',
          300: '#8FD8C1',
          400: '#74CFAE',
          500: '#65B599',
          600: '#519C83',
          700: '#3F8370',
          800: '#306B5E',
          900: '#25554B'
        },
        mainColor1: {
          100: '#FFE8D9',
          200: '#FED0B3',
          300: '#FCB88D',
          400: '#F4A261 ',
          500: '#F78A4B',
          600: '#F3753B',
          700: '#EF5E2F',
          800: '#E94927',
          900: '#D9371E'

        },
        mainColor2: {
          50: '#EAEAEA'
        }
      }
    }
  },
  plugins: []
}

