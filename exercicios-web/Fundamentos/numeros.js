const peso1 = 1.0
const peso2 = Number('2.1')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log('A media e: ', media.toFixed(2)) //toFixed é para diminuir as casas decimais
console.log(media.toString(2)) //toString transforma a variavel em string, (2) signifca binario=2
console.log(typeof media)
console.log(typeof Number)