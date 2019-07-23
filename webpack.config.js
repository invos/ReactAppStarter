const config = {
    entry: './main.js',
    output: {
        filename: 'index.js',
    },
    devServer: {
        inline: true,
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env', '@babel/react']
                }
            }
        ]
    }
}

module.exports = config;