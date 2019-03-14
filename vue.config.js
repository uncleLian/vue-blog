// 配置参数
// https://cli.vuejs.org/zh/config/
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
const isGzip = false // 是否开启Gzip压缩

module.exports = {
    baseUrl: '/',
    outputDir: 'docs',
    lintOnSave: true,
    productionSourceMap: false,
    css: {
        sourceMap: false,
        modules: false,
        loaderOptions: {
            stylus: {
                // 全局引入index.styl文件
                import: [resolve('./src/assets/css/index.styl')]
            }
        }
    },
    devServer: {
        port: 8002,
        // proxy: {
        //     '/Api': {
        //         target: '',
        //         changeOrigin: true,
        //         pathRewrite: {
        //             '^/Api': ''
        //         }
        //     }
        // }
    },
    chainWebpack(config) {
        config.module
            .rule('svg')
            .exclude.add(resolve('src/assets/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/assets/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    },
    configureWebpack: config => {
        if (isGzip && process.env.NODE_ENV === 'production') {
            const CompressionWebpackPlugin = require('compression-webpack-plugin')
            const productionGzipExtensions = ['js', 'css']
            config.plugins.push(
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                    threshold: 10240,
                    minRatio: 0.8,
                    deleteOriginalAssets: false
                })
            )
        }
    }
}
