*********************** PARTE 1 *************************

// Criei a pasta projeto/ pasta scr e dentro da pasta criei um arquivo chamado servidor.js
const porta = 3003 

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) =>{
    res.send({ nome: 'Notebook', preco: 123.45}) // Converter para JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})



// Dentro da pasta projeto criei o package.json
npm init -s 



// Dentro do package.json criei uma dependencia express com versão especificada 
<dir>npm i --save express@4.16.2 -E


// Coloquei a porta para executar 
<dir>node src/servidor.js //endereço em uso na porta 3003


// parei o precesso e executei novamente o comando anterior para verificar
<dir>node src/servidor.js


// Alterei no package.json o arquivo principal de index.js para src/servidor.js, ficando assim:
"main": "src/servidor.js",


// Criei um script Start colocando nodemon
"scripts": {
    "start": "nodemon",
    "test": "echo \"Error: no test specified\" && exit 1"


// Instalei o nodemon em devDependencies com a versão específica
<dir> npm i --save-dev nodemon@1.14.11 -E

// O package.json ficou assim: 
{
  "name": "projeto",
  "version": "1.0.0",
  "description": "",
  "main": "src/servidor.js",
  "scripts": {
    "start": "nodemon",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "4.16.2"
  },
  "devDependencies": {
    "nodemon": "1.14.11"
  }
}


// Reproduzi o nodemon utilizando o comando 
<dir>npm start


// Testei no Postman 
"GET> http://localhost:3003/servidor"





*********************** PARTE 2 *************************

// Criei um arquivo na pasta src bancoDeDados.js
const sequence = {
    _id: 1,
    get id() { return this._id++}
}

const produtos = {}

function salvarProduto(produto){
    if (!produto.id) produto.id = sequence.id
    produto[produto.id] = produto
    return produto
}

function getProduto(id){
    return produtos[id] || {}
}

function getProdutos(){
    return Object.values(produtos)
}

module.exports = { salvarProduto, getProduto, getProdutos }


// Criei um import no arquivo servidor alterando o app.get e criandos mais duas funções: uma get e uma post
const porta = 3003 

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')

app.get('/produtos', (req, res, next) =>{
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id)) // Acessando o produto através do ID
})

app.post('/produtos', (req, res, next) =>{
    const produtos = bancoDeDados.salvarProduto({ // Salvar
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})


// No postman coloquei lá no post, aba body
//atributos como nome: dasdas, preco: 000.2 e etc

"http://localhost:3003/produtos"



*********************** PARTE 3 Final *************************

// Instalei uma nova dependencia 
<dir>npm i --save body-parser@1.18.2 -E


// Alterei o arquivo servidor.js adicionando o body-parser, ficando assim:
const porta = 3003 

const express = require('express')
const app = express()
const bodyParser = require('body-parser') // DETALHE
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true })) // DETALHE

app.get('/produtos', (req, res, next) =>{
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) =>{
    const produtos = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})

// No postman coloquei lá no postman, aba body
//atributos como nome: dasdas, preco: 000.2 e etc


// Nova funçao put para alterar, no arquivo servidor.js
app.put('/produtos/:id',(req, res, next)=> {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

// Testa o put no postman

// Criei uma função para exclusão no arquivo bancoDeDados.js
function excluirProduto(id){
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = {salvarProduto, getProduto, getProdutos, excluirProduto}; // DETALHE

// Adicionei no arquivo servidor.js
app.delete('/produtos/:id',(req, res, next)=> {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
})

// Testa o delete no postman


















