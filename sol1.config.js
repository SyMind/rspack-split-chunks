module.exports = {
	context: __dirname,
	entry: {
		main: "./src/index.js"
	},
	devtool: false,
	optimization: {
		// 命令 webpack 不要压缩生成的代码
		minimize: false,
		splitChunks: {
            minSize: 0,
        },
	},
	experiments: {
		futureDefaults: true,
	},
	cache: false,
};
