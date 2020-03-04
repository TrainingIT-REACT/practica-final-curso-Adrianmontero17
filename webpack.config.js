const path = require('path')
const HymlWebPackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

 module.exports = {
     entry: {
         main: './src/index.js',
         vendor: ["react","react-dom","react-router-dom"],
     },
     output:{
         path: path.resolve(__dirname, 'build'),
         filename: '[name].[chunkhash:8].js' 
     },
     module:{
         rules:[
             {
                 test: /\.(js|jsx)/,
                 exclude: /node_modules/,
                 loader: "babel-loader"
             },
             {
                 test: /\.css$/,
                 use: ["style-loader","css-loader"]
             },
            {
                test: /\.(gif|svg)$/i,
                loader: "file-loader?name=[name].[ext]"
            },
            {
                test: /\.(ogg|mp3|wav|mpe?g)$/i,
                use: 'file-loader'
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                  loader: 'url-loader',
                },
            },
         ]
     },
     plugins:[
        new HymlWebPackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new WorkboxPlugin.InjectManifest({
            swSrc: './src/sw.js',
          })
     ],
     devServer:{
        contentBase: './build',
        historyApiFallback: true
     },
     optimization:{
         runtimeChunk: "single",
         splitChunks:{
             cacheGroups:{
                 vendor:{
                     test: "vendor",
                     name: "vendor",
                     enforce: true,
                     chunks: "all"
                 }
             }
         }
     }
 }