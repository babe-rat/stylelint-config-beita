module.exports = {
    extends: [
        'stylelint-config-standard',
        require.resolve('./less.js'),
        require.resolve('./scss.js'),
        require.resolve('./vue.js'),
        'stylelint-config-rational-order',
        'stylelint-config-prettier',
    ],
    plugins: ['stylelint-declaration-block-no-ignored-properties'],
    rules: {
        // 声明前不允许空一行
        'declaration-empty-line-before': null,
    },
}
