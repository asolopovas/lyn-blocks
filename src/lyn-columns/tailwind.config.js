/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/lyn-columns/*js'],
    safelist: [
        {
          pattern: /gap/,
        },
        {
          pattern: /grid/,
        },
      ],
}
