const escola = "Cod3r"

console.log(escola.charAt(4)) // vai retornar o índice do caractere
console.log(escola.charAt(5)) 
console.log(escola.charCodeAt(3)) //pegar o valor na tabela ask unicode
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3)) 

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
console.log(escola.replace(3, 'e')) //substitui o indice

console.log('Ana,Maria,Pedro'.split(','))
