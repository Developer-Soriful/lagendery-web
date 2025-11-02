// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#FFF',
                secondery: "#006C76",
                for_button: "#00AFAA"
            },
        },
    },
    plugins: [],
}
