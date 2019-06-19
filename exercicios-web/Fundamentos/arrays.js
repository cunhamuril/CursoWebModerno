const valores = [7.7, 8.9, 6.3, 9.2]  //array são os vetores
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length)  //lenght qantidade de elementos

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop()) //pop vai tirar o ultimo elemento do array
delete valores[0]
console.log(valores)

console.log(typeof valores)