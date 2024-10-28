/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'xsm':'300px',
      'sm': '400px',
      'sm1': '450px',
      'sm2': '600px',
      'md': '750px',
      'xl':'1280px'
    },
    extend: {},
    fontFamily: {
      'custom': ['Kanit'],
      'cus': ['Kode'],
      'pop': ['Poppins'],
      '122': ['Heartbit'],
      'mc': ['MouldyCheese'],
      'roso':['Russo'],
      'Chivo':['Chivo Mono'],
      'Yusei':['Yusei Magic']
  },
  }, 
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
}

