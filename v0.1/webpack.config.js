var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var phaserModule = path.join(__dirname, '../phaser/v2/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
var pixi = path.join(phaserModule, 'build/custom/pixi.js');
var p2 = path.join(phaserModule, 'build/custom/p2.js');

var webpackConfig = {
	entry: {
		'kroppli-editor': './src/index.tsx',
		'vendor': './app/vendor.ts'
	},

	output: {
		path: 'app/build',
		filename: '[name].bundle.js',
		sourceMapFilename: '[name].map',
		devtoolModuleFilenameTemplate: 'file://[absolute-resource-path]',
 	    devtoolFallbackModuleFilenameTemplate: 'file://[absolute-resource-path]?[hash]'
	},

	plugins: [
		new ExtractTextPlugin("style.css"),
		new webpack.optimize.CommonsChunkPlugin({ name: ['kroppli-editor', 'vendor'], minChunks: Infinity }),
	],

	module: {
		preLoaders: [
			{ test: /\.js$/, loader: 'source-map-loader' }
		],
		noParse: [
			/node_modules\/localforage\/dist\/localforage.js/,
			path.join(__dirname, 'node_modules', 'dist'),
			path.join(__dirname, 'node_modules', 'bundles')
		],
		loaders: [
			{ test: /pixi\.js/, loader: 'expose?PIXI' },
			{ test: /p2\.js/, loader: 'expose?p2' },
      		{ test: /phaser-split\.js$/, loader: 'expose?Phaser' },

			{ test: /\.ts$/,   loader: 'ts-loader' },
			{ test: /\.tsx$/,   loader: 'ts-loader' },
			{ test: /\.html$/, loader: 'html-loader' },
			{ test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!sass-loader?sourceMap')
			}
		]
	},

	devServer: {
		contentBase: 'app',
		publicPath: '/build'
	},

	devtool: 'eval-source-map',
	cache: true,
	debug: true,

	resolve: {
		root: [ path.join(__dirname, 'src'), path.join(__dirname, '_kroppliph') ],
		extensions: ['', '.ts', '.tsx', '.js'],
		modulesDirectories: ['src', 'node_modules'],
		alias: {
			'phaser': phaser,
			'pixi': pixi,
			'p2': p2
		}
	}
};


module.exports = webpackConfig;
