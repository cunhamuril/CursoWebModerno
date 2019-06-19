const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsistas?


console.log("Todos os alunos são bolsistas?")

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

/*const resultado = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    if(acumulador == true && atual == true){
        return true
    }else{
        return false;
    }
})

if(resultado == true){
    console.log("Verdadeiro")
}else{
    console.log("Falso")
}*/

// Desafio 2: Algum aluno é bolsista?

console.log("\nAlgum aluno é bolsista?")

const algumBolsista = (res, bol) => res || bol
console.log(alunos.map(b => b.bolsista).reduce(algumBolsista))

/*const resultado2 = alunos.map(b => b.bolsista).reduce(function(ac, at){
    if(ac == true || at == true){
        return true;
    }else{
        return false;
    }
})

if(resultado2 == true) console.log("Verdadeiro");
else console.log("Falso");*/
