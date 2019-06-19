const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // O callbacka acontece quando voce chama a funcao como parametro
fabricantes.forEach(fabricante => console.log(fabricante))