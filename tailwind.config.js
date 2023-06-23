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
                dark: "#075454",
                light: "#FFFFDC",
                primary: "#095354",
                primaryDark: "#58E6D9",
            },
        },
        textColor: {
            dark: "#075454",
            light: "#FFFFDC",
            danger: "#e3342f",
        },
    },
    plugins: [],
};
