/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.js', './src/**/*.jsx', './public/index.html'],
    theme: {
        fontFamily: {
            redhat: ['Red Hat Text', 'sans-serif'],
            lobster: ['Lobster Two', 'sans-serif'],
            roboto: ['Roboto Slab', 'sans-serif'],
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
            mono: ['Menlo', 'monospace'],
        },
        extend: {
            boxShadow: {
                'inset-md': 'inset 0 4px 6px rgba(40, 8, 8, 0.31), inset 0 -4px 6px rgba(40, 8, 8, 0.31)',
                'inset-sides': '  inset 0 12px 25px rgba(81, 93, 83, 0.2), -8px 0 20px rgba(20, 74, 30, 0.22),  inset 8px 0 20px rgba(20, 74, 30, 0.22)',
            },
            hardShadow: {
                'hard-shadow': 'shadow 0 4px 6px rgba(0, 0, 0, 0.1)',
            },
            textShadow: {
                outline: '0 0 4px white, 0 0 4px white', // create a white outline
            },
        },
    }, plugins: [
    ]
};