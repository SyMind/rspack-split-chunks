const rspack = require("@rspack/core");

/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
	context: __dirname,
	entry: {
		main: "./src/index.js"
	},
	plugins: [
		new rspack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
		}),
		new rspack.ProgressPlugin({})
	].filter(Boolean),
	devtool: false,
	optimization: {
		// Instruct webpack not to obfuscate the resulting code
		minimize: false,
		splitChunks: {
            minSize: 0,
        },
	}
};
