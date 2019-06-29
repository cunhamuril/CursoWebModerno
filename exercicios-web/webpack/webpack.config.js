const webpack = require('webpack')

module.exports = {
    mode: 'development',  // modo de desenvolvimento / outro modo é de produção (production) que é o padrão
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public' // pasta de saída
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader' // interpreta @import, url()...
            ]
        }]
    }
}