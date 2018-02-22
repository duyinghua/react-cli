var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    entry: path.resolve(APP_PATH, 'index.js'),
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    //babel重要的loader在这里
    module: {
        rules: [
            /*{
             test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
             loader: require.resolve('url-loader'),
             options: {
             limit: 10000,
             name: 'static/media/[name].[hash:8].[ext]',
             },
             },*/
            {
                test: /\.(scss|sass|less|css)$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader', 'less-loader', 'postcss-loader']
            },
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                include: APP_PATH,
            },
            {
                loader: require.resolve('file-loader'),
                // Exclude `js` files to keep "css" loader working as it injects
                // it's runtime that would otherwise processed through "file" loader.
                // Also exclude `html` and `json` extensions so they get processed
                // by webpacks internal loaders.
                exclude: [/\.(js|jsx|mjs|less|scss|css)$/, /\.html$/, /\.json$/],
                options: {
                    name: 'static/[name].[hash:8].[ext]',
                },
            },
        ]
    },

    devtool: 'eval-source-map', //开发环境

    devServer: {
        compress: true, // 启用Gzip压缩
        historyApiFallback: true, // 为404页启用多个路径
        hot: true, // 模块热更新，配置HotModuleReplacementPlugin
        https: false, // 适用于ssl安全证书网站
        noInfo: true, // 只在热加载错误和警告
        // ...
    },

    plugins: [
        new InterpolateHtmlPlugin({
            PUBLIC_URL: '/public'
            // You can pass any key-value pairs, this was just an example.
            // WHATEVER: 42 will replace %WHATEVER% with 42 in index.html.
        }),
        new HtmlwebpackPlugin({
            title: '',
            template: 'public/index.html'
        })
    ],
}
