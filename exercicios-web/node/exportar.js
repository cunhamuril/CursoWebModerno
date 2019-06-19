console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'
} // Dessa maneira não funciona. O objeto não será retornado

console.log(module.exports)

module.exports = { publico: true } // Se quiser que funcione deverá ser assim