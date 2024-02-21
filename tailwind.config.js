/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.{html,js}", "html/**/*.html"],
    theme: {
      extend: {
        backgroundImage: {
          'artorias-image': "url(../img/artorias.jpg)"
        },
        fontFamily: {
          'navigation': ['"Press Start 2P"', "system-ui"],
        },
      },
    },
    plugins: [],
  }