const webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'app/main.js'),
        MyCourseware: path.resolve(__dirname, 'app/MyCourseware.js')

    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loader: 'style!css'
            }, {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }, {
                test: /\.js[x]?$/,
                loaders: ['babel-loader?presets[]=es2015&presets[]=react'],
                exclude: /(node_modules|bower_components)/
            }, {
                test: /\.woff$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
            }, {
                test: /\.woff2$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"
            }, {
                test: /\.(eot|ttf|svg|gif|png)$/,
                loader: "file-loader"
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'app/template/index.html',
            chunks: ['main'],
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'MyCourseware.html',
            template: 'app/template/MyCourseware.html',
            chunks: ['MyCourseware'],
            inject: 'body'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            "window.Tether": 'tether'
        })
    ],
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './dist',
        colors: true,
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        stats: 'errors-only',
        host: process.env.HOST,
        port: process.env.PORT || 10330
    }
}