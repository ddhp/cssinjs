const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: {
        vanilla: './vanilla/index.js',
        emotion: './emotion/index.js',
        jss: './jss/index.js',
    },
    plugins: [
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    process.env.NODE_ENV === 'production'
                    ? { loader: MiniCssExtractPlugin.loader } 
                    : 'style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                    },
                }],
            },
        ],
    },
};
