/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                default: '#010E78',
                deep: '#0011FF',
                light: '#D2EBFF',
                sky: '#BAE7F3',
                muted: '#DEEFFE33',
                soft: '#C6E4FF',
                accent: '#003D8C73',
                white: '#ffffff',
                black: '#000000',
                graySpace: '#212121',
                softGray: '#B4B4B4',
                steelGray: '#585F69',
                frostGray: '#F9F9F9',
                defaultErro: '#FF0000',
            },
        },
    },
    plugins: [],
}