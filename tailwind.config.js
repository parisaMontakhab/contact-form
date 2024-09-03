module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors :{
        primary_greenlight :'hsl(148, 38%, 91%)',
        primary_greenmedium : 'hsl(169, 82%, 27%)',
        primary_red : 'hsl(0, 66%, 54%)',
        neutral_white : 'hsl(0, 0%, 100%)',
        neutral_graymedium : 'hsl(186, 15%, 59%)',
        neutral_graydark : 'hsl(187, 24%, 22%)'
        
      },
      fontFamily: {
        sans: ['Karla', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        bold: 700,
      },
      fontSize: {
        'label': '16px',
      },
    },
  },
  plugins: [],
};
