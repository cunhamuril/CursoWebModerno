const webpack = require('webpack')

module.exports = {
    mode: 'development',  // modo de desenvolvimento / outro modo é de produção (production) que é o padrão
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public' // pasta de saída
    }
}