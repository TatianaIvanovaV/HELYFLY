const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') 
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const PATHS = { // объект PATHS для более удобного обращения с путями, да и краткости записей
    source: path.join(__dirname, '../src'),
    dist: path.join(__dirname, '../dist'),
    assets: 'assets/'
}

module.exports = {
    externals: {
        paths: PATHS
    },
    entry: {    // app == [name] - ярлык точки входа
        app: PATHS.source // т.к. точка входа одна (index.js), то можно не указывать конкретный файл '/index.js'
    },
    output: {
        // filename: '[name].js', //[name] == ярлыку из entry, т.е. каждой точке входа будет соответствовать свой файл
        filename: `${PATHS.assets}js/[name].[hash].js`, // используя синтаксис ES6, определяем новый путь для названия результирующего файла
        path: PATHS.dist,    // указываем каталог для создания output
        publicPath: '/' // каталог для webpack-dev-server, где он ищет index.html
    },
    module: {
        rules: [ // на каждое расширение файла по правилу в виде объекта
            {
                test: /\.js$/,  // регулярка для всех js-файлов
                loader: 'babel-loader', // обработчик 'babel-loader' для всех файлов из регулярки в test
                exclude: '/node_modules/'   // исключить папку node_modules из ока лоадера
            },{
                test: /\.pug$/,
                loader: 'pug-loader',
                options: { pretty: true }
             },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]"
                }
            },
            {
                test: /\.styl$/, 
                use: [
                   'style-loader',
                   MiniCssExtractPlugin.loader,
                   {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                    },
                   {
                    loader: 'postcss-loader',
                    options: { sourceMap: true, config: { path: `./postcss.config.js` }  }
                    },
                   {
                       loader: 'stylus-loader',
                       options: { sourceMap: true }
                   }

                 ]
           },{
               test: /\.css$/,
               use: [
                   'style-loader',
                   MiniCssExtractPlugin.loader,
                   {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                    },
                   {
                    loader: 'postcss-loader',
                    options: { sourceMap: true, config: { path: `./postcss.config.js` }  }
                  }
                 ]
           },
           
        ]
    },
    plugins: [ 
            new MiniCssExtractPlugin({
                filename: `${PATHS.assets}css/[name].[hash].css`,
            }),
            new CopyWebpackPlugin([
                {
                    from: `${PATHS.source}/img`,
                    to: `${PATHS.assets}img`
                },
                {
                    from: `${PATHS.source}/fonts`,
                    to: `${PATHS.assets}fonts`
                },
                {
                    from: `${PATHS.source}/static`,
                    to: 'static'
                }
            ]),
            new HtmlWebpackPlugin({
                hash: false,
                template: `${PATHS.source}/pug/pages/index.pug`,
            })
        ]
}