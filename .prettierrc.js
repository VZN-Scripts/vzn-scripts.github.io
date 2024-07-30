/** @type {import("prettier").Config} */
const config = {
    tabWidth: 4,
    useTabs: false,
    printWidth: 120,
    singleQuote: false,
    trailingComma: "all",
    /**
     * Note:
     * The order of plugins in this array is crucial for functionality.
     * Do not change the order, as this will prevent both plugins from working correctly.
     */
    plugins: ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
    importOrder: ["^node:", "<THIRD_PARTY_MODULES>", "^[./]"],
    importOrderParserPlugins: ["typescript", "classProperties", "decorators-legacy"],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    tailwindFunctions: ["cn"],
};

module.exports = config;
