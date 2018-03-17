const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');


module.exports = {
    entry: {
        polyfills: path.resolve(__dirname, 'src', 'polyfills.ts'),
        vendor: path.resolve(__dirname, 'src', 'vendor.ts'),
        bundle: path.resolve(__dirname, 'src', 'main.ts'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][hash].js'
    },
    resolve: { 
        extensions: ['.js', '.css', '.ts', '.html'],
        modules: ['node_modules']
    },
    resolveLoader: {
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['awesome-typescript-loader', 'angular2-template-loader?keepUrl=true'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader', 
                            options: {importLoaders: 1}
                        }
                    ]
                })

            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin('main[hash].css', { allChunks: true }),
        new CleanWebpackPlugin([path.resolve(__dirname, 'dist')]),
        new webpack.ContextReplacementPlugin( /angular(\\|\/)core(\\|\/)/, path.resolve(__dirname, './src')),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: 'public/index.html',
            minify: false
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        })
    ],
    devServer: {
        historyApiFallback: true,
        host: process.env.HOST || '0.0.0.0',
        port: process.env.PORT || '8001'
    }
};
