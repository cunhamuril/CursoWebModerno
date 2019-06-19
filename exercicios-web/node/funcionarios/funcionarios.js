const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

// DESAFIO: Mulher chinesa com menor salario

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario > funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario))
    //console.log(funcionarios)

   /* const mulher = mulher => mulher.genero == 'F'
    const pais = p => p.pais === 'China'
    //const menorSalario = (func, funcAtual) => func.salario <= funcAtual.salario
    const menor = m =>  m.salario < 3000
    
    console.log(funcionarios.filter(mulher).filter(pais).filter(menor)) // MINHA TENTATIVA */

    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})