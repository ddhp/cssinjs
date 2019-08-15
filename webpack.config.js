module.exports = {
    mode: 'development',
    entry: {
        main: './index.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                    },
                }],
            },
        ],
    },
};
