/** @type {import("prettier").Config} */
const config = {
    tabWidth: 4,
    useTabs: false,
    printWidth: 120,
    singleQuote: false,
    trailingComma: "all",
    plugins: ["prettier-plugin-tailwindcss"],
    tailwindFunctions: ["cn"],
};

module.exports = config;
