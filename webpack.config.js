const HTMLWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	inject: 'body',
	template: `${__dirname}/app/index.html`,
	output: 'index.html'
});

module.exports = {
	entry: [
	 './app/index.js',
	 './app/main.scss'
 ],
 output: {
  path: `${__dirname}/dist`,
  filename: 'bundle.js'
 },
	module: {
    rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }, {
				test: /\.jpe?g$|\.svg$|\.png$/i,
				loader: 'file-loader?regExp=(image.*)&name=[1]'
			}
    ]
  },
	plugins: [
		new ProgressBarPlugin(),
		new CopyWebpackPlugin([
			{ from: './app/assets', to: 'assets/' }
		]),
		HTMLWebpackPluginConfig
	]
};
