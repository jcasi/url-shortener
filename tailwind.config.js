/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                antiflash: "#f5f6f7",
                gunmetal: "#202C39",
                bluemetal: "#283845",
                goldsage: "#B8B08D",
                peachyellow: "#F2D492",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};
