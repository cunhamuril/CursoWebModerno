/*class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}*/

function Pessoa(nome){
    this.nome = nome
    
    this.falar = function(){
        console.log(`Meu nome é ${nome}`)
    }
    
}

const p = new Pessoa('José')

p.falar()