/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            keyframes: {
                fadein: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
            animation: {
                fadein3s: 'fadein 3s',
                fadein2s: 'fadein 2s',
            },
            gridTemplateColumns: {
                'auto-fill': 'repeat(auto-fill, minmax(240px, 1fr))',
            },
        },
    },
    plugins: [],
};
