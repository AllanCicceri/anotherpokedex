
module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",  ],
  theme: {
    extend: {
      fontFamily: {
        'pokefont':['Pokemon Solid', 'sans-serif'],
      },
      backgroundImage: 
      {
        'world-map': "url('/public/pokeworldmap.webp')",
        'bgPokeball': "url('../src/assets/imgs/pokeball.png')",
      },
      height:{
        '100px':"100px"
      }

    },
  },
  plugins: [],
}
