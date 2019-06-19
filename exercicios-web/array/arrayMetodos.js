const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] //constante não pode atribuir mais nada para a constante piloto

pilotos.pop() // massa quebrou o carro! /  retira o elemento da ultima posição do array (((CONCEITO DE PILHA)))
console.log(pilotos)

pilotos.push('Verstappen') // adiciona um novo elemento na ultima posição (((CONCEITO DE FILA)))
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento (((CONCEITO DE FILA)))
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona o primeiro elemento (((CONCEITO DE PILHA)))
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou novamente :(
console.log(pilotos)    

const algunsPilotos1 = pilotos.slice(2) // novo array 
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)