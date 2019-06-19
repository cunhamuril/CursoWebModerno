const perguntas = [
    "Grande sábio, me ajude a descobrir",
    "Lord da sabedoria, me diga",
    "Seria possível me ajudar a descobrir",
    "Senhor Sued, poderia me responder",
    "Diga me, oh poderoso lord, o que"
]

const respostas = [
    "Hoje é meu dia de folga",
    "Não recebo para responder este tipo de pergunta",
    "Passa amanhã!",
    "Volta segunda!",
    "Você não merece tal resposta"
]

let elementoEntrada = document.getElementById("inputField")
let elementoSaida = document.getElementById("answer")

let resposta = "";
let ocultar = false;
let contador = 0;

let perguntaPadrao = perguntas[Math.floor(Math.random() * perguntas.length)]
let respostaPadrao = respostas[Math.floor(Math.random() * respostas.length)]

elementoEntrada.addEventListener("input", (e) =>{
    let element = e.target;

    if(e.data == ";"){
        ocultar = !ocultar
        element.value = element.value.substring(0, element.value.length - 1) //Vai esconder o ponto e vírgula
        return;
    }
    if(ocultar){
        if(e.inputType == "deleteContentBackward"){
            resposta = resposta.substring(0, resposta.value.length - 1)
            contador = ((contador - 1) < 0 ? 0 : contador-1)
            return
        }

        element.value = element.value.substring(0, element.value.length - 1) + perguntaPadrao.charAt(contador++)
        resposta += e.data
    }
})

function mostrarResposta(){
    let elementoResposta = document.getElementById("answer");

    if(contador <= 0){
        elementoResposta.innerText = respostaPadrao;
    }else{
        elementoResposta.innerText = resposta;
    }
}




