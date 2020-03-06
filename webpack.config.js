const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3002,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.ts(x?)$/,
        use: [{ loader: 'ts-loader' }, { loader: 'eslint-loader' }],
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        use: ['file-loader'],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'index_bundle.js',
  },
};
