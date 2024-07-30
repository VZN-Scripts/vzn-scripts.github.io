/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
        "./components/**/*.{js,jsx,ts,tsx,md,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "hsl(var(--color-primary) / <alpha-value>)",
                secondary: "hsl(var(--color-secondary) / <alpha-value>)",
            },
        },
    },
    darkMode: "class",
    plugins: [],
};
