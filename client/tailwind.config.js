// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [ "./src/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}", ],
    theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      }, 
      
    },
    
  },
  // ...
};