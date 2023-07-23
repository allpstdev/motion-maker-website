module.exports = {
    bracketSpacing: true,
    printWidth: 140,
    semi: false,
    singleQuote: true,
    trailingComma: 'none',
    tabWidth: 4,
    singleAttributePerLine: true,
    arrowParens: 'avoid',
    jsxSingleQuote: true,
    overrides: [
        {
            files: 'package*.json',
            options: {
                printWidth: 1000
            }
        }
    ]
}
