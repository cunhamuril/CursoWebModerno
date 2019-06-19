console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) //undefined

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length) //lenght é o tamanho

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined) //true

console.log(aprovados)
aprovados.sort() // sort organiza alfabeticamente os elementos 
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // splice ('indice', 'quantos serao elemntos serao excluidos a partir do índice')
console.log(aprovados)