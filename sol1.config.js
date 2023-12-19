module.exports = {
	context: __dirname,
	entry: {
		main: "./src/index.js"
	},
	devtool: false,
	optimization: {
		// Instruct webpack not to obfuscate the resulting code
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
