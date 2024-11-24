const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const WebpackObfuscator = require('webpack-obfuscator');
const WebpackUtil = require( './config/webpack.utils.cjs' );
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpackConfigAlias = WebpackUtil.webpackLibraryAliasConfiguration(['e-ui-react']);
const Path = require('path');
const baseUrl = '/';

module.exports = (env, options)=>{
const isDevelopment = options.mode === 'development';

return {
 mode: isDevelopment ? 'development' : 'production',
 performance: {
    hints: false,
   // maxEntrypointSize: 512000,
    maxAssetSize: 512000
},
entry: './src/index.js',
 output: {
    path: Path.resolve(__dirname, 'dist/'),
    publicPath: baseUrl, 
    clean: true
    /* When we have URL Routes (react-router-dom), the  build is loading the scripts in Relative path -
     * To resolve it we used publicPath
     */ 
},
target: 'web',
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
  new Dotenv({
    path: isDevelopment ? './.env.development' : './.env.production',
  }),
  new HTMLWebpackPlugin({
    template: Path.resolve(__dirname, "public","index.html")
  }),
  // Copy files from the public folder to the dist folder
  new CopyWebpackPlugin({
    patterns: [
      {
        from:  Path.join(__dirname, 'public/assets'),
        to: Path.join(__dirname, 'dist/assets'),
        globOptions: {
            dot: true
        }
      },
      {
        from:  Path.join(__dirname, 'public/.htaccess'),
        to: Path.join(__dirname, 'dist'),
        globOptions: {
            dot: true
        }
      },
      {
        from:  Path.join(__dirname, 'nexus'),
        to: Path.join(__dirname, 'dist/nexus'),
        globOptions: {
            dot: true
        }
      }
    ],
    options: {
        concurrency: 100,
    },
  })
 ],
 optimization:{
    splitChunks : { chunks: "all" }
 },
 resolve: {
    symlinks: false,
    alias: Object.assign( webpackConfigAlias, {
        '@Nexus': Path.resolve(__dirname, 'nexus'),
        '@Assets': Path.resolve(__dirname, 'public/assets'),
        '@DocConfig': Path.resolve(__dirname, 'src/config'),
        '@DocCore': Path.resolve(__dirname, 'src/templates'),
        '@DocUtils': Path.resolve(__dirname, 'src/utils'),
        '@DocReactAdvancedTopics': Path.resolve(__dirname, 'src/templates/react/AdvancedTopics'),
        '@DocReactCodeEditorsViewers': Path.resolve(__dirname, 'src/templates/react/CodeEditorsViewers'),
        '@DocReactComponents': Path.resolve(__dirname, 'src/templates/react/Components'),
        '@DocReactFeatures': Path.resolve(__dirname, 'src/templates/react/Features'),
        '@DocReactFonts': Path.resolve(__dirname, 'src/templates/react/Fonts'),
        '@DocReactFormElements': Path.resolve(__dirname, 'src/templates/react/FormElements'),
        '@DocReactMaps': Path.resolve(__dirname, 'src/templates/react/Maps'),
        '@DocReactMedia': Path.resolve(__dirname, 'src/templates/react/Media'),
        '@DocReactHeadersAndFooters': Path.resolve(__dirname, 'src/templates/react/HeadersAndFooters'),
        '@DocReactLayout': Path.resolve(__dirname, 'src/templates/react/Layout'),
        '@DocNodeJavascript': Path.resolve(__dirname, 'src/templates/react/NodeJavascript'),
        '@DocReactReadyMadeScreen': Path.resolve(__dirname, 'src/templates/react/ReadyMadeScreen'),
        '@DocReactThemes': Path.resolve(__dirname, 'src/templates/react/Themes'),
        '@DocReactUtility': Path.resolve(__dirname, 'src/templates/react/Utilities'),
        '@DocReactVisualization': Path.resolve(__dirname, 'src/templates/react/Visualization'),
        '@DocBackendUserModules': Path.resolve(__dirname, 'src/templates/backend/UserModules'),
        // Needed when library is linked via `npm link` to app
        /** This is implemented when the React Hooks are not working under the library */
        react: Path.resolve("./node_modules/react"),
        filename:'main.js',
        publicPath: '/'
    })
 },
 devServer: { // Needed to make react-router-dom to work
    historyApiFallback: true,
    port: 8080, // Replace with your desired port number
 }
};

};