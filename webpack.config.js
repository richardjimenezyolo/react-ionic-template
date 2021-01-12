const path = require("path");

module.exports = {
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, "www"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.join(__dirname, "www"),
		compress: true,
		port: 5000,
	},
};
