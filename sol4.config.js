const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        main: './src',
    },
    devtool: false,
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
    },
    optimization: {
        // 命令 webpack 不要压缩生成的代码
        minimize: false,
        splitChunks: {
            minSize: 0,
            chunks: 'all',
            minChunks: 4,
            cacheGroups: {
                // 禁用缓存组。
                default: false,
            },
        },
    },
    context: __dirname,
};
