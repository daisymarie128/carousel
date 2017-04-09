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
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
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
