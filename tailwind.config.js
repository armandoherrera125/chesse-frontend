/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                strongyellow: 'var(--color-strongyellow)',
                strongyellowDark: 'var(--color-strongyellow-dark)',
            },
        },
    },
    plugins: [],
};
