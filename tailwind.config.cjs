/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                aqua: '#7fdbff',
                blue: '#0074d9',
                navy: '#001f3f',
                teal: '#39cccc',
                green: '#2ecc40',
                olive: '#3d9970',
                lime: '#01ff70',
                yellow: '#ffdc00',
                orange: '#ff851b',
                red: '#ff4136',
                fuchsia: '#f012be',
                purple: '#b10dc9',
                maroon: '#85144b'
            }
        }
    }
}
