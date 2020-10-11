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
        template:"./src/index.html",
        filename:"index.[hash:8].html"
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: '[name].[hash:8].css',
        chunkFilename: '[id].css'

    }),
]

module.exports={
    entry:{
        main: path.join(SRC_PATH,"index.tsx")
    },
    mode:"development",
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
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'ts-loader'
                    }
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
            }
        ]
    },
    devServer:{
        host:'0.0.0.0',
        port: APP_PORT,
        contentBase :path.join(__dirname,'public'),
        watchContentBase: true,
    },
    plugins:pluginList
};