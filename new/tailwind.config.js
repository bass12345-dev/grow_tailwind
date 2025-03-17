 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens : {
      sm : '480px',
      md : '890px',
      lg : '1024px',
      'max-890': {'max': '890px'}, // Define a custom max breakpoint
    },
    extend: {
      colors : {
        growPrimaryColor: '#02abe2'
      },
      fontFamily : {
        inter: ["Inter", "sans-serif"],
      }
    },
    container : {
      center : true,
      padding : {
        DEFAULT : '1rem',
        sm : '1.5rem'
      }
    }
  },
  plugins: [],
}