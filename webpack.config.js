const ExtractCSSChunksPlugin = require('extract-css-chunks-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './index.js',
    },
    plugins: [
        new ExtractCSSChunksPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
            // ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: ExtractCSSChunksPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: '../',
                            hot: process.env.NODE_ENV !== 'production',
                        },
                    }, {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                ],
            },
        ],
    },
};
