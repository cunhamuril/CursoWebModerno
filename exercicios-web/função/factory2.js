function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1    
    }
}

console.log(criarProduto('Bombril', 15))
console.log(criarProduto('Notebook', 2543.95))
console.log(criarProduto('iPad', 15000))