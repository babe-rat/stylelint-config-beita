const extensions = ['.less']

module.exports = {
    overrides: [
        {
            files: extensions.flatMap(ext => [`*${ext}`, `**/*${ext}`]),
            customSyntax: 'postcss-less',
        },
    ],
}
