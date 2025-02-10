module.exports = {
    plugins: [
        require('postcss-font-base64'),
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
        require("cssnano")({
            preset: 'default'
        }),
        require("@fullhuman/postcss-purgecss")({
            content: ['./*.html', './js/*.js'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
            safelist: [/^fa-/, /^fas/, /^far/, /^fab/]
        }),
        require("postcss-minify")
    ]
};
