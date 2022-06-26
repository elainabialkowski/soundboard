/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: "#74114E",
        secondary: "#25074E",
        tertiary: "0E0F30"
      }
    },
    fontFamily: {
      'poppins' : ['Poppins']
    }
  },
  plugins: [],
}
