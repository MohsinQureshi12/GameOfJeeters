/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customDark: '#272727',
        customGray: '#646456',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to top, #646456,#272727)',
      },
      fontFamily: {
        krub: ['Krub', 'sans-serif'],
      },
      // textShadow: {
      //   'default': '2px 2px 4px rgba(0, 0, 0, 0.5)', // Example shadow
      // },
      boxShadow: {
        'text-yellow': '0 2px 0 #9f8a01, 0 3px 0 #806c01, 0 5px 0 #574b00, 0 8px 0 #423801, 0 10px 0 #342c00, 0 12px 0 #282300, 0 14px 0 #1e1a00, 0 18px 5px rgba(0, 0, 0, 0.5)',
      },

      
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0px 2px 0px rgba(0, 0, 0, 6)', // Example shadow
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

