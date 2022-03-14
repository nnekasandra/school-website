module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'orange': '#fd7e14',
        'yellow': '#ffc107',
        'dim-blue':' #0c2e60',
        'active-color': 'rgba(0,0,0,.9)',
        'gradient-orange': '#ee390f',
        'gradient-yellow': '#f9b700',
        'text-color': '#556172',
        'grey': '#777',
        'background': '#f7f7f7',
        'white': '#fff',
        'border-color': 'rgb(240, 244, 246)',
        'heading-color': 'rgb(85, 97, 114);',
        'gray':'#888888'
      }
    },
    screens: {
      'md': '991px',
      'lg': '992px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}