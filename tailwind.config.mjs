const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    colors: {
      blue_banner: '#e6edf8',
      red_banner: '#f8e6e6',
      green_banner: '#e6f8e6',
      yellow_banner: '#f8f8e6',
      purple_banner: '#f8e6f8',
      orange_banner: '#f8f2e6',
      pink_banner: '#f8e6f8',
      gray: '#f8f8f8',
      black: '#111827',
    },
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    }
  }
}