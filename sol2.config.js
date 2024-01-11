const path  = require('path');

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
        splitChunks: { minSize: 0, },
    },
    context: __dirname,
};
