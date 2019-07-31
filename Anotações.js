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

$ node -v -> "Informa a versão do node"
$ npm -v -> "Node Package Manager (Gerenciador de Pacotes do Node)  // -v -> versão" 
$ npm i lodash -> "i -> istall // lodash é uma biblioteca"
$ npm i -g nodemon -> "-g -> global // nodemon é um biblioteca global / toda vez que o server.js for atualizado, ele automaticamente atualiza o servidor"
$ node pasta/arquivo.js -> "Executa o arquivo .js no terminal node"
$ node src/servidor.js -> "Colocando na porta informada no servidor"

$ nodemon ./nomedoarquivo.js -> 'Vai executar o nodemon'

$ npm init -> "Como vai ser seu arquivo Package.json"
$ npm i "// Instala dependencias"
$ npm init -y -> "-y significa que vai responder todas as perguntas automaticamente como sim"
$ npm i node-schedule "agendamento com temporizador"

// SCRIPTS E DEP

$ npm start -> "Start foi criado como um script no Package.json // Start é um script padrão do node"
$ npm run dev -> "Dev foi criado como um script no Package.json // dev NÃO é um script padrão do node"

$ npm i --save axios -> "--save vai criar uma área para criar as dependencias no projeto // axios é um exemplo "
$ npm i --save express@4.16.2 -E -> "Salvando a dependencia express / @versao / -E -> versão exata"
$ npm cache clear --hard -> "Força a limpeza do cache"


---------------------------------------------------------------------- YARN ------------------------------------------------------------------------

$ yarn init -> "Praticamente parecido com o npm init"
$ yarn add @babel/cli -> "instalando o cli do babel"
$ yarn add @babel/preset-env -> "instalando o preset-env do babel"

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
$ npm i -g gulp-cli 

"Dentro da pasta gulp (exemplo da aula, mas deverá ser a pasta do projeto) deverá ser executado o seguinte comando:"
$ npm i // para instalar as dependências

// Gulp está instalado e pronto para usar...

$ gulp --help // Comando para acessar o help de gulp e ver seus comandos

"Dentro da pasta basico (exemplo da aula) deverá ser executado comando:"
$ gulp // será executado a task default do gulpfile.js



 ----------------------------------------------------------- PROJETO SPA (Single Page Application) -----------------------------------------------------



1. "VISÃO GERAL DO CÓDIGO"
	Arquivos SCSS
	Arquivos HTML
	Arquivos JS
	package.json



2. "ESTRUTURANDO A BUILD"
	// 1 - Instalar dependências
	$ npm i

	// 2 - Criar pasta gulpTasks dentro da pasta spa e criar os seguintes arquivos:
	app.js // Tasks relacionadas aos arquivos da aplicação
	deps.js // Trabalhar com as dependências da aplicação
	servidor.js // Criação e monitoramento do servidor

	// 3 - Definição da estrutura básica do arquivos da pasta gulpTasks	

	// 4 - Implementar a estrutura básica no arquivo da pasta spa:
	gulpfile.js

	// 5 - Testar
	$ gulp // não vai executar as tasks 'deps' e 'app' porque vai precisar da seguinte flag no comando:
	$ gulp --production // foi definida no código gulpfile.js
				
							/* No arquivo package.json já foi definida o script 'start' e 'build' com os comandos:
								start: "gulp"
								build: "gulp --production" */

	$ npm start // neste caso ele irá executar o gulp
	$ npm run build // ele irá executar a construção que foi definida com o comando "gulp --production"



3. "BUILD DAS DEPENDÊNCIAS"
	// 1 - Trabalhando com o arquivo deps.js

	// 2 - Executar gulp:
	$ npm start



4. "BUILD DA ALICAÇÃO"
	// 1 - Trabalhando com o arquivo app.js 

	// 2 - Executar gulp:
	$ npm start



4. "ADICIONANDO WEBSERVER"
	// 1 - Trabalhando com o arquivo servidor.js 

	// 2 - Executar build do gulp sem startar o servidor:
	$ npm run build

	// 3 - Executar o gulp startando o servidor:
	$ npm start


















 * =================================================================================================================================================== *
 *                                                                         WEBPACK                                     								   *
 * =================================================================================================================================================== *


 ------------------------------------------------------------ 1. ESTRUTURA BÁSICA DO PROJETO -----------------------------------------------------------
 
 1. "INSTALAR..."
 $ npm init -y // Criar arquivo package.json | -y = sim para todos

 // mudar o nome do projeto no package.json de webpack para capitulo-webpack (por exemplo), para evitar conflitos
 // colocar devdependecies o webpack no arquivo package.json

$ npm i



2. "CODIFICAR"

// pasta src, arquivo pessoa.js, arquivo principal.js 
// ...



3. "CRIAR ARQUIVO"

webpack.config.js // Nome padrão do arquivo de configuração

// e codificar...

$ npm start // vai startar o webpack



4. "TESTAR"

$ npm start && node dist/main.js // starta o webpack e executa o arquivo gerado main.js (&& serve para concatenar outro comando)



------------------------------------------------------------------------ 2. CSS e SASS ----------------------------------------------------------------

1. "DEPOIS DA AULA DE SISTEMA DE MÓDULOS..."

// configurar pasta de saída no arquivo webpack.config.js

// configurar o loader no arquivo webpack.config.js para carregar css

// configurar no arquivo package.json colocando as dependências do css-loader e style-loader

$ npm i



2. "EXTERNALIZANDO ARQUIVO .CSS"

// configurar no arquivo package.json colocando as dependências para extrair arquivo .css
// mini-css-extract-plugin

$ npm i

// referenciar o plugin no arquivo webpack.config.js

// referencia o style no index.html



3. "CARREGANDO ARQUIVO .SCSS(SASS)"

// configurar no arquivo package.json colocando as dependências para carregar arquivo .scss
// node-sass & sass-loader

$ npm i

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

$ npm start // vai startar no modo development
$ npm run build // vai startar no modo production



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



5. "Filtrar Fotos por Cidade (jQuery Plugin)"

	// criar pasta src/js/plugins. Arquivo cityButtons.js
	// codificar ...
	// criar tag para os buttons no arquivo galery.html
	// referenciar no arquivo index.js



6. "Executando o Plugin"

	// referenciar o plugin no arquivo src/js/core/includes.js
	// importar no arquivo cityButtons.js



7. "Implementando o Footer"

	// criar arquivo src/pages/template/footer.html
	// codificar ...
	// importar no arquivo index.html
	//

















* =================================================================================================================================================== *
*                                                                           REACT                                     			                 	  *
* =================================================================================================================================================== *

// iniciando...
$ npm i -g create-react-app // vai instalar o react de forma global

$ create-react-app nomedoprojeto // iniciar um novo projeto

$ cd nomeDoProjeto 
$ npm start



------------------------------------------------------------ PROJETO CALCULADORA  -----------------------------------------------------------

$ npm i -g create-react-app
$ create-react-app calculadora

"https://fonts.google.com/specimen/Roboto+Mono" // Fonte que será utilizada --> thin

$ npm start



1. "Componente Calculator"

// criar pasta main dentro de src. criar arquivos Calculator.css e Calculator.jsx
// codificar...

// importar no arquivo index.js

// limpar o que estava escrito e codificar no arquivo index.css



2. "Componente Button #01"

// criar pasta components dentro de src. criar arquivos Button.css e Button.jsx
// codificar ...

// importar no arquivo Calculator.jsx



3. "Componente Display"

// criar os arquivos Display.css e Display.jsx dentro da pasta components
// codificar ...

// importar no arquivo Calculator.jsx

// alterar a grid com 1fr no Calculator.css



4. "Componente Button #02"

// Alterações Button.css e Button.jsx
// Alterações em Calculator.jsx



5. "Implementando a lógica"

// codificar Calculator.jsx



--------------------------------------------------------- PROJETO CADASTRO DE USUÁRIO  -----------------------------------------------------------

1. "Implementando o Backend (JSON Server)"

	// criar pasta crud e crud/backend
	$ cd react/crud/backend
	$ npm init -y
	$ npm i --save json-server@0.13.0 -E

	// criar arquivo db.json dentro da pasta crud/backend
	// codificar ...

	// no arquivo package.json da pasta backend apaga o script test e insere script start
	$ npm start

	// o backend foi startado na porta 3001
	"http://localhost:3001/users"
	"http://localhost:3001/users/2" --> por exemplo: vai para o usuário de ID 2



2. "Criando Projeto Frontend"

	// dentro da pasta crud
	$ create-react-app frontend

	// no arquivo package.json da pasta frontend inserir as dependencias
	// axios, bootstrap, font-awesome, react-router e react-router-dom
	$ npm i



3. "Criando Componentes (Template)"

	// startar o frontend em outro terminal, pois um terminal já vai estar executando o JSON Server
	$ npm start

	// criar pastas components e components/template dentro da pasta src
	// criar arquivos .css e .jsx dentro da pasta template e codificar

	// criar pasta main dentro da pasta src
	// criar arquivos App.css e App.jsx dentro da pasta main e codificar

	// referenciar o arquivo src/main/app.jsx, no arquivo src/index.js
	// apagar arquivos da pasta src: app.js, app.test.js, app.css e logo.svg



4. "Aplicando estilo (CSS Grid)"

	// codificar src/main/App.css
	
	// referenciar fonte montserrat no arquivo public/index.html
	<link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700" rel="stylesheet">



5. "Componente Logo"
	
	// Criar pasta src/assets e src/assets/imgs e colar o arquivo logo.png
	// importar logo no arquivo src/components/template/Logo.jsx
	// dar estilo no arquivo src/components/template/Logo.css



6. "Componente Cabeçalho"
	
	// importar bootstrap e font-awesome no arquivo src/main/App.jsx
	// referenciar icon, title e subtitle

	// referenciar no arquivo src/components/template/Main.jsx

	// codificar o header.jsx e header.css



7. "Componente Footer"
	
	// codificar Footer.jsx e Footer.css



8. "Componente Navegação"

	// codificar Nav.jsx e Nav.css



9. "Componente Conteúdo"

	// codificar Main.jsx e Main.css	

	// criar pasta home dentro de components. arquivo Home.jsx

	// referenciar no arquivo App.jsx



10. "Componente Cadastro Usuário #01"
	
	// criar pasta user dentro de components. arquivo UserCrud.jsx e codificar



11. "Implementando Rotas (React Router)"
	
	// dentro da pasta main, criar arquivo Routes.jsx e codificar
	
	// no arquivo App.jsx, importar o router e realizar modificações
	
	// ajustar arquivo Nav.jsx e Logo.jsx importando { Link } from 'react-router-dom'

		/* Dica: para a URL não ficar com o hash(#), pode se utilizar o BrowserRouter ao invés de HashRouter
		 	como está no arquivo App.jsx */		 



12. "Componente Cadastro Usuário #02"

	// importar o axios no arquivo UserCrud.jsx e codificar...



13. "Componente Cadastro Usuário #03"

	// criar formulário na função renderForm no arquivo UserCrud.jsx
	// testar ...



14. "Componente Cadastro Usuário #04"
	
	// codificar o arquivo UserCrud.jsx para aparecer a lista de usuários

		// na função render coloca "console.log(this.state.list)" para testar ver se o console aparece os usuários no array
		// criar função componentWillMount() que vai fazer aparecer os usuários assim que carregar a página

	// codificar outras funções
	// renderizar
	// testar



15. "Adicionando Responsividade"
	
	// alterações no arquivo App.css
	// alteraçoes no arquivo Nav.css
	// alteraçoes no arquivo Logo.css

















* =================================================================================================================================================== *
*                                                                           VUE JS                                     			                 	  *
* =================================================================================================================================================== *

// Instalar o vue/cli de forma global

$ npm install -g @vue/cli 

/--------------------------------------------------------- PROJETO CALCULADORA  ----------------------------------------------------------

$ vue create calculator // para iniciar o projeto

















* =================================================================================================================================================== *
*                                                                 BANCO RELACIONAL                                     			                 	  *
* =================================================================================================================================================== *

// Comandos MySQL
$ mysql -u root -p // acessar servidor de BD

$ create schema wm // comando DDL create
$ use wm // começar utilizar o query pelo terminar
$ quit // sai do query

ctrl + shift + e -> comando para executar a query no VSCODE

















* =================================================================================================================================================== *
*                                                             BANCO NÃO RELACIONAL                                     			                 	  *
* =================================================================================================================================================== *


--------------------- MongoDB -----------------------

$ mongod // executar no terminal que daí vai iniciar o servidor -> localhost:27017
$ mongo // executa o client do mongo
$ help // ajuda
$ show dbs // mostra os dbs
