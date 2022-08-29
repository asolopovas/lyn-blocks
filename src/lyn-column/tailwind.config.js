/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/lyn-column/*js'],
    safelist: [
        {
          pattern: /^border/,
        },
      ],
}
