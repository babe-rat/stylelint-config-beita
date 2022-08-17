module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-rational-order',
        'stylelint-config-prettier',
    ],
    customSyntax: 'postcss-less',
    plugins: ['stylelint-declaration-block-no-ignored-properties'],
    rules: {
        'declaration-empty-line-before': null,
    },
}
