* =================================================================================================================================================== *
*                                                    		PROJETO BASE DE CONHECIMENTO                                     			              *
* =================================================================================================================================================== *

//iniciar versão final
$ psql -U postgres 	// iniciar o PostgreSQL com usuário postgres(padrão)
$ mongod 			// iniciar o MongoDB
backend/$ npm start 					// iniciar o servidor backend
frontend/$ npm run serve -- --port 8081	// iniciar o servidor frontend na porta 8081

---------------------------------------------------------------------- BACKEND ------------------------------------------------------------------------

// repositório no GitHub: https://github.com/cod3rcursos/knowledge
// senha postgres: 123456
// senha mongod: 12341234

-------------------------- PostgreSQL ------------------------------

// Iniciando no PostgreSQL

// após copiar o caminho do bin do postgre no path do sistema:
$ psql -U postgres // entrar no postgre ('postgres' é o nome do user)

// COMANDOS
$ \l 								// listar schemas
$ create database teste_install; 	// criar DB teste_install
$ \c teste_install 					// conectar no BD
$ \dt 								// listar tabelas
$ \q								// quit
$ \! cls							// limpar tela

--------------------------------------------------------------------

// startar mongodb, postgre, versão final: be e fe, versão inicial: be e fe

// Pasta versão-inicial/backend > instalar dependencias
$ npm i

// para que serve as dependências instaladas:
devDependencies > nodemon 		// laucher do sistema para desenvolvimento
> pm2 							// laucher do sistema para produção
> pg 							// postgre
> passport, passport-jwt		// parte de segurança
  e jwt-simple			 		
> node-schedule 				// migrar informações de DB
> mongoose 						// acessar MongoDB
> moment 						// parte que data
> knex 							// acessa DB relacional, query builder
> express						// framework web para fazer os webservices
> cors 							// cross origin request -> liberar acessos de origes diferentes
> consign						// injetar dependencias todas no arquivo principal (index.js)
> body-parser					// extensão do express para fazer parse de todos os tipos de req
> bcrypt-nodejs					// criptografia

// instalar knex globalmente
$ npm i -g knex

$ npm start 


"Banco de dados usando KNEX"
// no postgre: 
$ CREATE DATABASE knowledge;

// no backend
$ knex init // criar arquivo knex
$ knex migrate:make create_table_users // cria tabela users
$ knex migrate:make create_table_categories
$ knex migrate:make create_table_articles
$ knex migrate:latest // criar tables definidas nas migrations da primeira para a última -> método UP
$ knex migrate:rollback // "     "       "       "    "         " última para a primeira -> método DOWN





------- VERSÃO FINAL --------
postgres=# CREATE DATABASE knowledge_final;
postgres=# UPDATE users SET admin = true WHERE id = 1; //vai setar o user para admin






---------------------------------------------------------------------- FRONTEND ------------------------------------------------------------------------

// Pasta versão-inicial/frontend > instalar dependencias
$ npm i