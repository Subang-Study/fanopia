/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "M-blue": "#A3E6F4",
                "M-pink": "#F4A2AB",
                "M-black": "#3F3C41",
                "M-white": "#fffffe",
                "M-Gray": "#7F7676",
            },
        },
    },
    plugins: [],
};
