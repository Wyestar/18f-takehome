const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	output: {
		publicPath: "/"
	},
	devServer: {
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader"
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/public/index.html",
			filename: "./index.html"
		})
	]
};

// devServer: {
// 	port: 3001,
// 		publicPath: '/',
// 		historyApiFallback: true
// }