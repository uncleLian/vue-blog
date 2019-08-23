module.exports = {
    presets: [
        '@vue/app',
        '@vue/babel-preset-jsx'
    ],
    plugins: [
        [
            'component',
            {
                'libraryName': 'element-ui',
                'styleLibraryName': 'theme-chalk'
            }
        ]
    ]
}
