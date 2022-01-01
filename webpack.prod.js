const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");



module.exports = {
    mode: 'production',
    entry: './src/client/index.js',
    stats: 'verbose',

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js',
        libraryTarget: 'var',
        library: 'Client',
        assetModuleFilename: 'src/client/img/[name].[ext]'

    },
    optimization: {
        chunkIds: 'named',
        minimize: true,
        minimizer: [
            '...',
            new CssMinimizerPlugin(),

            // new TerserPlugin({
            //     parallel: true,
            //     terserOptions: {
            //     },
            // }),
            // new OptimizeCssAssetsPlugin({}),
        ]
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /.s?css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],

                // use: ['style-loader', 'css-loader', 'sass-loader']

            }
            //             ,
            //             {
            //                 test: /\.(png|jpe?g|gif|svg)$/i,
            //                 use:[
            //                     {
            //                     loader:'url-loader',
            //                     options:{
            //                         limit:1024,
            //                     }
            //                 }
            //                 ],
            // // // type:'javascript/auto'
            //                 type:'asset/resource',

            //             }
            ,
            //         {
            //             // test: /\.png$/,
            //             test: /\.(png|jpe?g|gif|svg)$/i,

            //             use: [{
            //                 loader: 'file-loader',
            //                 options: {
            //                     name: '[name].[ext]'
            //                 }
            //             }]
            //         },
            //             {
            //     test: /\.svg$/,
            //     loader: 'svg-inline-loader'
            // },
            {
                test: /\.svg/,
                use: {
                    loader: "svg-url-loader",
                    options: {
                        // make all svg images to work in IE
                        iesafe: true,
                    },
                },
            }


        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        // new MiniCssExtractPlugin({filename:'[name].css'}),
        new MiniCssExtractPlugin(),
        new WorkboxPlugin.GenerateSW()

    ]
}
