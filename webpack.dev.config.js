const path=require('path');
const { CleanWebpackPlugin }=require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');

const SRC_PATH=path.resolve(__dirname,"src");
const BUILD_PATH=path.resolve(__dirname,"dist");
const APP_PORT=3000;
const CONTENT_BASE=path.join(__dirname,"public");

const pluginList=[
    new HtmlWebpackPlugin({
        template:"public/index.html",
        filename:"index.html"
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: '[name].[hash:8].css',
        chunkFilename: '[id].css'

    }),
]

module.exports={
    bail:true,
    mode:"development",
    entry:{
        main: path.join(SRC_PATH,"index.tsx")
    },
    devtool:"inline-source-map",
    output: {
        path: BUILD_PATH,
        publicPath: "/",
        filename: "[name].[hash:8].js",

    },
    resolve:{
        extensions: [".ts",".tsx",".js",".jsx"]
    },
    module:{
        rules:[
                {
                    test: /\.(ts|tsx)$/i,      
                    use: {
                        loader: 'ts-loader',
                    },
                    exclude: /(node_modules)/,
                },
                {
                        test: /\.css$/i,
                        loaders: [MiniCssExtractPlugin.loader, 'css-loader']
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                            {
                                loader:'file-loader'
                            }
                    ]
                },
                {
                    test: /\.(ts|tsx|js)$/,
                    enforce: 'pre',
                    use: ['source-map-loader'],
                },
                {
                    test: /\.svg$/,
                    loader: 'svg-inline-loader'
                }
            ]
    },
    devServer:{
        host:'0.0.0.0',
        port: APP_PORT,
        contentBase:path.join(__dirname,'public'),
        watchContentBase:true,
        historyApiFallback: true,
        progress:true
    },
    plugins:pluginList
};