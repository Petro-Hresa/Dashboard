const path = require('path');
const HWP = require('html-webpack-plugin');
const MCEP = require('mini-css-extract-plugin');


module.exports = {
   mode : 'development',
   cache: true,
   entry: ['./public/'],
   devtool: 'inline-source-map',
   plugins: [
      new HWP({
         filename: 'index.html',
         template: './public/index.html',
         inject: 'body',
      }),
      new MCEP({filename: 'styles/style.css'})

   ],

   resolve:{
      extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
   },

   module:{
      rules:[
         {//styles
            test: /\.(s[ac]|c)ss$/i,
            use: [ MCEP.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            exclude: /node_modules/,
         },

         {//images
            test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
            type: 'asset',
         },

         {//html
            test: /\.html$/i,
            loader: "html-loader",
         },

         {//fonts
            test: /\.(woff(2)?|eot|ttf|otf)$/,
            exclude: /node_modules/,
            type: 'asset/resource',
            generator: {
               filename: "fonts/[name].[hash][ext]", 
            },
         },

         {//scripts
            test: /\.[jt]s(x)?$/,
            use:['babel-loader', 'ts-loader'],
            exclude: /node_modules/
         },
      ]

   },

   performance : {
      hints : false
   },

   output: {
      filename:  'scripts/index.[fullhash].js',
      assetModuleFilename: 'images/[hash][ext][query]',
      path: path.resolve(__dirname, 'dist/'),
      clean: true,
      publicPath: '/',
   },

   devServer: {
      static: {directory: path.join(__dirname, './dist')},
      compress: true,
      hot: false,
      historyApiFallback: true,
      port: 3001,
      open: true,
   },

}
