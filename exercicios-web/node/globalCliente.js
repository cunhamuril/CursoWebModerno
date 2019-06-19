require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!' // Por causa do método freeze, o atributo não pode ser mais modificado
console.log(MinhaApp.nome)