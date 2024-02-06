const HTMLWebpackPlugin = require('html-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');
const WebpackUtil = require( './config/webpack.utils.cjs' );
const Dotenv = require('dotenv-webpack');
// const webpackConfig = require('../lib/webpack.config.cjs');
const webpackConfigAlias = WebpackUtil.webpackLibraryAliasConfiguration(['e-ui-react']);
const Path = require('path');
// const baseUrl = 'http://localhost:8080/';
const baseUrl = 'http://localhost:8081/';

module.exports = {
 mode: 'development',
 performance: {
    hints: false,
   // maxEntrypointSize: 512000,
    maxAssetSize: 512000
},
entry: './src/index.js',
 output: {
    path: Path.resolve(__dirname, 'dist/'),
    publicPath: baseUrl, 
    /* When we have URL Routes (react-router-dom), the  build is loading the scripts in Relative path -
     * To resolve it we used publicPath
     */ 
},
 module:{
    rules:[
        {
            test: /\.txt$/i,
            use: 'raw-loader',
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [ "file-loader" ],
        },/*
        {
            test: /\.(woff|woff2|ttf)$/,
            use: [ "url-loader" ],
        }, */
        {
            test:/\.css$/,
            use: [ "style-loader", "css-loader" ]
        },
        {
            test:/\.scss$/,
            use: [ "style-loader", "css-loader", "sass-loader" ]
        },
        {
            test:/\.sass$/,
            use: [ "style-loader", "css-loader", "sass-loader" ]
        },
        {
            test: /\.js$/,
            use: [{
                loader: "babel-loader",
                options: {
                  presets: ['@babel/preset-env']
                }
              }]
        }
    ]
 },
 plugins:[
  new Dotenv(),
  new HTMLWebpackPlugin({
    template: Path.resolve(__dirname, "public","index.html")
  })
 ],
 optimization:{
    splitChunks : { chunks: "all" }
 },
 resolve: {
    symlinks: false,
    alias: Object.assign( webpackConfigAlias, {
        '@Assets': Path.resolve(__dirname, 'public/assets'),
        '@DocConfig': Path.resolve(__dirname, 'src/config'),
        '@DocCore': Path.resolve(__dirname, 'src/templates'),
        '@DocUtils': Path.resolve(__dirname, 'src/utils'),
        '@DocReactAdvancedTopics': Path.resolve(__dirname, 'src/templates/react/AdvancedTopics'),
        '@DocReactCodeEditorsViewers': Path.resolve(__dirname, 'src/templates/react/CodeEditorsViewers'),
        '@DocReactComponents': Path.resolve(__dirname, 'src/templates/react/Components'),
        '@DocReactFeatures': Path.resolve(__dirname, 'src/templates/react/Features'),
        '@DocReactFormElements': Path.resolve(__dirname, 'src/templates/react/FormElements'),
        '@DocReactMaps': Path.resolve(__dirname, 'src/templates/react/Leaflet'),
        '@DocReactHeadersAndFooters': Path.resolve(__dirname, 'src/templates/react/HeadersAndFooters'),
        '@DocReactLayout': Path.resolve(__dirname, 'src/templates/react/Layout'),
        '@DocNodeJavascript': Path.resolve(__dirname, 'src/templates/react/NodeJavascript'),
        '@DocReactReadyMadeScreen': Path.resolve(__dirname, 'src/templates/react/ReadyMadeScreen'),
        '@DocReactThemes': Path.resolve(__dirname, 'src/templates/react/Themes'),
        '@DocReactVisualization': Path.resolve(__dirname, 'src/templates/react/Visualization'),
        // Needed when library is linked via `npm link` to app
        /** This is implemented when the React Hooks are not working under the library */
        react: Path.resolve("./node_modules/react"),
        filename:'main.js',
        publicPath: '/'
    })
 },
 devServer: { // Needed to make react-router-dom to work
    historyApiFallback: true
 }
};