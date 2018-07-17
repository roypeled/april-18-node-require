const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: './main.js',
	output: {
		filename: 'app.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" }
				]
			}
		]
	},
	devtool: "source-map",
	mode: "development",
	plugins: [
		new HtmlWebpackPlugin(),
	]
};