const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 4. referenciando plugin de externalização

module.exports = {
    mode: 'development',  // 1. modo de desenvolvimento / outro modo é de produção (production) que é o padrão
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public' // 2. pasta de saída
    },
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
                'sass-loader', // 5.
            ]
        }]
    }
}