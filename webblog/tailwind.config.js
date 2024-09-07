/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', './**/*.py'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [
      require('daisyui'),
  ],
}

