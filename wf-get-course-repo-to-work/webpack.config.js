const pathResolve = require('path').resolve
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = ({pathToEntryFile}) => {

  const configOut = {
    devtool: 'source-map',
    mode: 'none',
    context: pathResolve(__dirname),
    entry: `./${pathToEntryFile}`,
    output: {
      //  must specified output.publicPath otherwise
      //  devServer.historyApiFallback will not work
      publicPath: '/',
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['*', '.mjs', '.js', '.ts', '.jsx', '.tsx']
    },
    module: {
      rules: [
        {
          test: /\.m?(j|t)sx?$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" }
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'lab',
      })
    ]
  }

  // console.log(configOut)
  return configOut
};
