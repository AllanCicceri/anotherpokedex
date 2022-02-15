
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
      },
      height:{
        '100px':"100px"
      }

    },
  },
  plugins: [],
}
