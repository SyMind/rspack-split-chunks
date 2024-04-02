const UnderstandingChunkGraphPlugin = require('./UnderstandingChunkGraphPlugin');

module.exports = {
	context: __dirname,
	entry: {
		main: "./src/index.js"
	},
	devtool: false,
	optimization: {
		// Instruct webpack not to obfuscate the resulting code
		minimize: false,
		splitChunks: false
	},
	experiments: {
		futureDefaults: true,
	},
	cache: false,
	plugins: [
		new UnderstandingChunkGraphPlugin()
	]
};
