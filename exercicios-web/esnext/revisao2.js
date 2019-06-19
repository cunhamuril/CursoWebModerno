// Arrow Function
const soma = (a, b) => a + b 
// Quando não colocado um corpo na função, o return estará implicito na função, ou seja, não precisa chamar return
console.log(soma(2, 3))


// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})

lexico1()
lexico2()

// Paramero default
function log(texto = 'Node'){
    console.log(texto)
}

log()
log('Sou mais forte')

// Operador rest
function total(...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(2, 3, 4, 5))