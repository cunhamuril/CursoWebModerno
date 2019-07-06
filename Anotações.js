***** ALGUNS COMANDOS DO PROMPT DE COMANDO DO WINDOWS *****
"cd 'pasta'" -> Acessa pasta especificada
"cd ../" -> Abre pasta acima, volta para pasta anterior
"mkdir 'pasta'" -> Cria pasta especificada
"code ." -> code abre o VSCode, o ponto(.) faz com que abra já na pasta atual
"pwd" -> informa a pasta atual //linux
"dir" -> lista onde eu estou
"ls" -> mostra os arquivos da pasta //linux

"npm install -g http-server" -> instalar um mini servidor
"http-server ." --> inicia servidor
"http-server -c-1 ." -> inicia e não armazena em cache de jeito nenhum
"http-server -c10" -> inicia não armazena em cache por 10seg por exemplo

"dir(element)" -> direciona o elemento especificado
"start programa.extensao" -> starta qualquer programa
"start explorer.exe ." -> abre o windows explorer. O ponto (.) abre na pasta do diretorio especifico





***** ALGUNS ATALHOS DO VSCODE *****
ctrl + ; = "Comentar e descomentar"
alt + shift + f = "Formatar"
ctrl + p = "Pesquisar arquivo"
alt + shift + ↓ = "Duplicar linha"


Dica HTML no VSCODE : 

(header.cabecalho>h1)+(aside.nav>ul>li) // fazendo assim e apertando enter
// o html fica assim: 
	<header class="cabecalho">
	        <h1></h1>
	    </header>
	    <aside class="nav">
	        <ul>
	            <li></li>
	        </ul>
	</aside>																												/


.conteudo[id="legal"] // fazendo assim e apertando enter
// o html fica assim:
	<div class="conteudo" id="legal"></div>																					/








* =================================================================================================================================================== *
*                                                                       NODE JS                                     								  *
* =================================================================================================================================================== *

<diretorio> node -v -> "Informa a versão do node"
<diretorio> npm -v -> "Node Package Manager (Gerenciador de Pacotes do Node)  // -v -> versão" 
<diretorio> npm i lodash -> "i -> istall // lodash é uma biblioteca"
<diretorio> npm i -g nodemon -> "-g -> global // nodemon é um biblioteca global / toda vez que o server.js for atualizado, ele automaticamente atualiza o servidor"
<diretorio> node pasta/arquivo.js -> "Executa o arquivo .js no terminal node"
<diretorio> node src/servidor.js -> "Colocando na porta informada no servidor"

<diretorio> nodemon ./nomedoarquivo.js -> 'Vai executar o nodemon'

<diretorio> npm init -> "Como vai ser seu arquivo Package.json"
<diretorio> npm i "// Instala dependencias"
<diretorio> npm init -y -> "-y significa que vai responder todas as perguntas automaticamente como sim"
<diretorio> npm i node-schedule "agendamento com temporizador"

// SCRIPTS E DEP

<diretorio> npm start -> "Start foi criado como um script no Package.json // Start é um script padrão do node"
<diretorio> npm run dev -> "Dev foi criado como um script no Package.json // dev NÃO é um script padrão do node"

<diretorio> npm i --save axios -> "--save vai criar uma área para criar as dependencias no projeto // axios é um exemplo "
<diretorio> npm i --save express@4.16.2 -E -> "Salvando a dependencia express / @versao / -E -> versão exata"
<diretorio> npm cache clear --hard -> "Força a limpeza do cache"

//

"devDependecies":{
	"dependecia": "1.0.0" // dependecia e versão
	"dependecia": "^1.0.0" // pode ir evoluindo tanto na versão minor quanto na versão fix
	"dependecia": "~1.0.0" // pode ir evoluindo na versão fix
}


ctrl + c = "forçar parada"


















 * =================================================================================================================================================== *
 *                                                                         GULP                                     								   *
 * =================================================================================================================================================== *


 ----------------------------------------------------------------- COMANDOS DO TERMINAL ----------------------------------------------------------------

"Instalação do gulp versão global (i = install, -g = global)"
<diretorio> npm i -g gulp-cli 

"Dentro da pasta gulp (exemplo da aula, mas deverá ser a pasta do projeto) deverá ser executado o seguinte comando:"
<gulp> npm i // para instalar as dependências

// Gulp está instalado e pronto para usar...

<gulp> gulp --help // Comando para acessar o help de gulp e ver seus comandos

"Dentro da pasta basico (exemplo da aula) deverá ser executado comando:"
<gulp/basico> gulp // será executado a task default do gulpfile.js



 ----------------------------------------------------------- PROJETO SPA (Single Page Application) -----------------------------------------------------

1. "VISÃO GERAL DO CÓDIGO"
	Arquivos SCSS
	Arquivos HTML
	Arquivos JS
	package.json

2. "ESTRUTURANDO A BUILD"
	// 1 - Instalar dependências
	<dir/spa> npm i

	// 2 - Criar pasta gulpTasks dentro da pasta spa e criar os seguintes arquivos:
	app.js // Tasks relacionadas aos arquivos da aplicação
	deps.js // Trabalhar com as dependências da aplicação
	servidor.js // Criação e monitoramento do servidor

	// 3 - Definição da estrutura básica do arquivos da pasta gulpTasks	

	// 4 - Implementar a estrutura básica no arquivo da pasta spa:
	gulpfile.js

	// 5 - Testar
	<dir/spa> gulp // não vai executar as tasks 'deps' e 'app' porque vai precisar da seguinte flag no comando:
	<dir/spa> gulp --production // foi definida no código gulpfile.js
				
							/* No arquivo package.json já foi definida o script 'start' e 'build' com os comandos:
								start: "gulp"
								build: "gulp --production" */

	<dir/spa> npm start // neste caso ele irá executar o gulp
	<dir/spa> npm run build // ele irá executar a construção que foi definida com o comando "gulp --production"

3. "BUILD DAS DEPENDÊNCIAS"
	// 1 - Trabalhando com o arquivo deps.js

	// 2 - Executar gulp:
	<dir/spa> npm start

4. "BUILD DA ALICAÇÃO"
	// 1 - Trabalhando com o arquivo app.js 

	// 2 - Executar gulp:
	<dir/spa> npm start

4. "ADICIONANDO WEBSERVER"
	// 1 - Trabalhando com o arquivo servidor.js 

	// 2 - Executar build do gulp sem startar o servidor:
	<dir/spa> npm run build

	// 3 - Executar o gulp startando o servidor:
	<dir/spa> npm start


















 * =================================================================================================================================================== *
 *                                                                         WEBPACK                                     								   *
 * =================================================================================================================================================== *


 ------------------------------------------------------------ 1. ESTRUTURA BÁSICA DO PROJETO -----------------------------------------------------------
 
 1. "INSTALAR..."
 <dir/webpack> npm init -y // Criar arquivo package.json | -y = sim para todos

 // mudar o nome do projeto no package.json de webpack para capitulo-webpack (por exemplo), para evitar conflitos
 // colocar devdependecies o webpack no arquivo package.json

<dir/webpack> npm i

2. "CODIFICAR"

// pasta src, arquivo pessoa.js, arquivo principal.js 
// ...

3. "CRIAR ARQUIVO"

webpack.config.js // Nome padrão do arquivo de configuração

// e codificar...

<dir/webpack> npm start // vai startar o webpack

4. "TESTAR"

<dir/webpack> npm start && node dist/main.js // starta o webpack e executa o arquivo gerado main.js (&& serve para concatenar outro comando)



------------------------------------------------------------------------ 2. CSS e SASS ----------------------------------------------------------------

1. "DEPOIS DA AULA DE SISTEMA DE MÓDULOS..."

// configurar pasta de saída no arquivo webpack.config.js

// configurar o loader no arquivo webpack.config.js para carregar css

// configurar no arquivo package.json colocando as dependências do css-loader e style-loader

<dir/webpack> npm i

2. "EXTERNALIZANDO ARQUIVO .CSS"

// configurar no arquivo package.json colocando as dependências para extrair arquivo .css
// mini-css-extract-plugin

<dir/webpack> npm i

// referenciar o plugin no arquivo webpack.config.js

// referencia o style no index.html

3. "CARREGANDO ARQUIVO .SCSS(SASS)"

// configurar no arquivo package.json colocando as dependências para carregar arquivo .scss
// node-sass & sass-loader

<dir/webpack> npm i

// modificar webpack.config.js 


// dentro da pasta assets ...
// criar pasta scss; arquivos index.scss e botao.scss
// criar arquivo index.js

// modificar o arquivo principal.js



---------------------------------------------------------- 3. DESENVOLVIMENTO E PRODUÇÃO ----------------------------------------------------------------

// configurar no arquivo package.json ...
// devdependencies: cross-env; optimize-css-assets-webpack-plugin; uglify-webpack-plugin
// scripts: build

// modificar webpack.config.js 

<dir/webpack> npm start // vai startar no modo development
<dir/webpack> npm run build // vai startar no modo production



-------------------------------------------------------- 4. CARREGANDO ARQUIVOS DE IMAGENS --------------------------------------------------------------

// referenciar imagem no arquivo estilo.css

// configurar no arquivo package.json colocando a dependência file-loader

// modificar webpack.config.js 


------------------------------------------------------------ 5. ADICIONANDO WEBSERVER -------------------------------------------------------------------


// configurar no arquivo package.json colocando a dependência webpack-dev-server

// modificar webpack.config.js 

// altera o script "start" do arquivo package.json de "webpack" para "webpack-dev-server"


















 * =================================================================================================================================================== *
 *                                                                         JQUERY                                     								   *
 * =================================================================================================================================================== *

 Formas de baixar o jQuery: 
  -- npm 
  -- site jQuery
  -- jQuery CDN

















 * =================================================================================================================================================== *
 *                                                                       BOOTSTRAP                                     								   *
 * =================================================================================================================================================== *

Formas de instalar o Bootstrap:
-- npm
-- site Bootstrap
-- boostrap CDN

O boostrap depende de outras duas dependênciasn, são elas:
-- jQuery
-- Popper // tool tips

Duas dependências iniciais: boostrap e http-server

$ npm install --save-dev jquery@3.3.1 -E// instalando dependencia jQuery (-E -> versão exata)
$ npm install --save-dev popper.js@1.14.3 -E // instalando depencia Popper
$ npm i // instalar todas dependências

$ npm start // startando o http-server

















* =================================================================================================================================================== *
*                                                      PROJETO GALERIA (Bootstrap/jQuery/Webpack)                                     				  *
* =================================================================================================================================================== *

* Webpack e package.json já configurado 

	$ npm i

1. "Referenciando os estilos (SCSS)"	

	// criar pasta src/scss/. arquivos custom.scss e index.scss
	// importar no arquivo src/index.js que é o entry do webpack

	$ npm run build // testar se está funcionando a build


2. "Implementando o Header"
  	
  	// criar pastas src/pages/ e src/pages/template. arquivo header.html
  	// codificar...
  	// importar no arquivo index.html

	$ npm start


3. "Carregando HTML via Ajax (includes)"

	// criar pastas src/js/ e src/js/core (core é o nucleo). Arquivo includes.js
	// codificar...
	// importar no arquivo index.js as dependências e o includes.js


4. "Implementando a Galeria de Fotos"

	// criar pastas src/pages/galery. arquivos galeryHeader.html e galery.html
	// codificar ...
	// importar no arquivo index.html
	// customizar o header da galeria no arquivo src/scss/custom.scss
























