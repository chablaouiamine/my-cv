/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Lato', 'system-ui', 'sans-serif'],
                'heading': ['Montserrat', 'system-ui', 'sans-serif'],
            },
            colors: {
                'primary': '#2c3e50',
                'accent': '#2980b9',
            },
        },
    },
    plugins: [],
}
