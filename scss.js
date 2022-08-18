const extensions = ['.scss']

module.exports = {
    overrides: [
        {
            files: extensions.flatMap(ext => [`*${ext}`, `**/*${ext}`]),
            extends: 'stylelint-config-standard-scss',
            customSyntax: 'postcss-scss',
        },
    ],
}
