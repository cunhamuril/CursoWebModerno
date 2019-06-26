"COMANDOS CMD"
sonata35
"cd 'pasta'" -> Acessa pasta especificada
"cd ../" -> Abre pasta acima, volta para pasta anterior
"mkdir 'pasta'" -> Cria pasta especificada
"code ." -> code abre o VSCode, o ponto(.) faz com que abra já na pasta atual
"pwd" -> informa a pasta atual
"dir" -> lista onde eu estou
"ls" -> mostra os arquivos da pasta

"npm install -g http-server" -> instalar um mini servidor
"http-server ." --> inicia servidor
"http-server -c-1 ." -> inicia e não armazena em cache de jeito nenhum
"http-server -c10" -> inicia não armazena em cache por 10seg por exemplo

"dir(element)" -> direciona o elemento especificado




***** ALGUNS COMANDOS NO TERMINAL: node.js *****

<diretorio> node -v -> "Informa a versão do node"
<diretorio> npm -v -> "Node Package Manager (Gerenciador de Pacotes do Node)  // -v -> versão" 
<diretorio> npm i lodash -> "i -> istall // lodash é uma biblioteca"
<diretorio> npm i -g nodemon -> "-g -> global // nodemon é um biblioteca global / toda vez que o server.js for atualizado, ele automaticamente atualiza o servidor"
<diretorio> node pasta/arquivo.js -> "Executa o arquivo .js no terminal node"
<diretorio> node src/servidor.js -> "Colocando na porta informada no servidor"

<diretorio> nodemon ./nomedoarquivo.js -> 'Vai executar o nodemon'

<diretorio> npm init -> "Como vai ser seu arquivo Package.json"
<diretorio> npm init -y -> "-y significa que vai responder todas as perguntas automaticamente como sim"
<diretorio> npm i node-schedule "agendamento com temporizador"

// SCRIPTS E DEP

<diretorio> npm start -> "Start foi criado como um script no Package.json // Start é um script padrão do node"
<diretorio> npm run dev -> "Dev foi criado como um script no Package.json // dev NÃO é um script padrão do node"

<diretorio> npm i --save axios -> "--save vai criar uma área para criar as dependencias no projeto // axios é um exemplo "
<diretorio> npm i --save express@4.16.2 -E -> "Salvando a dependencia express / @versao / -E -> versão exata"

//


ctrl + c = "forçar parada"



/* =================================================================================================================================================== */
/*                                                                         GULP                                     								   */
/* =================================================================================================================================================== */



//----------------------------------------------- COMANDOS DO TERMINAL --------------------------------------

"Instalação do gulp versão global (i = install, -g = global)"
<diretorio> npm i -g gulp-cli 

"Dentro da pasta gulp (exemplo da aula, mas deverá ser a pasta do projeto) deverá ser executado o seguinte comando:"
<gulp> npm i // para instalar as dependências

//========================================================================================================================================================
// Gulp está instalado e pronto para usar...

<gulp> gulp --help // Comando para acessar o help de gulp e ver seus comandos

"Dentro da pasta basico (exemplo da aula) deverá ser executado comando:"
<gulp/basico> gulp // será executado a task default do gulpfile.js




