module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
        require("cssnano")({
            preset: 'default'
        }),
        require("@fullhuman/postcss-purgecss")({
            content: ['./*.html', './js/*.js'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        })
    ]
};