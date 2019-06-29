const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 4. referenciando plugin de externalização

// 6...
const modoDev = process.env.NODE_ENV !== 'production'
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetPlugin = require('optimize-css-assets-webpack-plugin')


module.exports = {
    // 1. modo de desenvolvimento / outro modo é de produção (production) que é o padrão
    mode: modoDev ? 'development' : 'production', //6...
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public' // 2. pasta de saída
    },
    optimization:{
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetPlugin({})
        ]
    }, //6. referenciando otimizações
    plugins: [
        new MiniCssExtractPlugin({ // 4. referenciando plugin de externalização
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,  // 5. estava assim antes: /\.css$/
            use: [
                MiniCssExtractPlugin.loader, // 4. este plugin é conflitante com o style-loader, por isso ele ta comentado
                // 'style-loader', // 3. Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // 3. interpreta @import, url()...
                'sass-loader', // 5...
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader'] // 7.. imagens
        }]
    }
}