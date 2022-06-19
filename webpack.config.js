const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { SourceMapDevToolPlugin } = require('webpack');
const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === 'production';
  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'build'),
      filename: isProduction ? '[name].[contenthash].js' : '[name].js',
      sourceMapFilename: '[name].js.map'
    },
    devServer: {
      port: 8081,
      open: true
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-transform-runtime'],
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        },
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader']
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: 'file-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html'
      }),
      new SourceMapDevToolPlugin({
        filename: '[file].map'
      }),
      new ModuleFederationPlugin({
        name: 'login',
        filename: 'remoteEntry.js',
        remotes: {
        },
        exposes: {
          './login': './src/bootstrap.js'
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react
          }
        }
      })
    ]
  };
};
