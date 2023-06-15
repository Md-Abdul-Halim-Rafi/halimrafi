/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                inter: [" var(--font-inter)", ...fontFamily.sans],
            },
            colors: {
                dark: "#095354",
                light: "#F5F5F5",
                primary: "#095354",
                primaryDark: "#58E6D9",
            },
        },
        textColor: {
            dark: "#095354",
            light: "#ffed4a",
            danger: "#e3342f",
        },
    },
    plugins: [],
};
