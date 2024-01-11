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
            cacheGroups: {
                // 禁用这个缓存组，以便我们可以一次专注于一件事情。
                default: false,
                defaultVendors: {
                    // 我们也可以将此属性设置为：`splitChunks.minSize: 0`。
                    // 由于此属性默认情况下被缓存组继承。
                    minSize: 2,

                    // 强制请求模块的最小 chunk 数。
                    minChunks: 2,

                    // Q: 新的块应该包含哪些模块？
                    // A: 来自 `node_modules` 的模块。
                    test: /node_modules/,
                },
            },
        },
    },
    context: __dirname,
};
