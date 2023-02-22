/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'palette-1': '#EDE0D4',
        'palette-2': '#E6CCB2',
        'palette-3': '#DDB892',
        'palette-4': '#B08968',
        'palette-5': '#7F5539',
        'palette-6': '#9C6644'
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
