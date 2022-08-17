const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
	mode: "development",
	target: "web",
	devtool: "cheap-module-source-map",
	entry: "./index",
	output: {
		path: path.resolve(__dirname, "build"),
		publicPath: "/",
		filename: "bundle.js",
	},
	devServer: {
		historyApiFallback: true,
		allowedHosts: "all",
		headers: { "Access-Control-Allow-Origin": "*" },
		https: false,
		devMiddleware: {
			stats: "minimal",
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html",
			favicon: "src/favicon.ico",
		}),
		new ESLintPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /(\.css)$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
};
