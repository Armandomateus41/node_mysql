SEQUECNIA PARA CRIAR O PROJETO 
Criar o aquivoi package
## npm init

mkdir meu-projeto
cd meu-projeto
npm init -y
### npm install express
2. Instalação do Express
Instale o pacote Express:

bash
Copiar código
npm install express
O comando npm install express serve para instalar o Express, que é um framework leve e rápido para construir aplicações web e APIs com Node.js.

2.Como instalar todas as dependência com Node.js

Como rodar projeto baixado 
insdtalar todsa as dependeciasd indicadas Pelo package,json
### npm install

Para rodar o prjecto
### node app.js
### npm app.js
4. Carregar projeto com Nodemon
O Nodemon é uma ferramenta útil para projetos Node.js, pois reinicia automaticamente o servidor sempre que detecta alterações nos arquivos. Aqui está como configurá-lo e usá-lo para carregar seu projeto:
Instalação Global
bash
Copiar código
npm install -g nodemon
Instalação Local (no projeto)
bash
Copiar código
npm install --save-dev nodemon
Nota: Instalar localmente é recomendado para garantir que todos os desenvolvedores usem a mesma versão do Nodemon no projeto.
3. Rodar o Nodemon Manualmente
   ### nodemon app.js

Criaçãpo de API
1. POST (Criar ou Cadastrar)
   ### POST /usuarios
2. GET (Visualizar)  
   ### GET /usuarios 
Uso: Recuperar informações de um recurso existente.
Exemplo: Obter detalhes de um usuário ou listar todos os usuários.

1. PUT (Atualizar Completamente)
Uso: Atualizar um recurso existente, substituindo completamente o conteúdo.
Exemplo: Atualizar todas as informações de um usuário.
### PUT /usuarios/{id}

1. PATCH (Atualizar Parcialmente)
Uso: Atualizar parcialmente um recurso.
Exemplo: Atualizar apenas o email de um usuário. 
### PATCH /usuarios/{id}
1. DELETE (Apagar)
Uso: Remover um recurso existente.
Exemplo: Deletar um usuário.
http
Copiar código
### DELETE /usuarios/{id}

1. OPTIONS (Verificar Opções Disponíveis)
Uso: Retorna os métodos permitidos em uma rota específica.
Exemplo: Saber quais métodos estão disponíveis para /usuarios.

### OPTIONS /usuarios

7. HEAD (Cabeçalho de uma Requisição)
Uso: Retorna apenas os cabeçalhos da resposta, sem o corpo. Útil para verificar a existência de um recurso ou metadados.
Exemplo: Verificar se um usuário existe.

### HEAD /usuarios/{id}

8. TRACE (Depuração)
Uso: Retorna o que foi enviado pelo cliente, usado para fins de depuração.
Exemplo: Verificar como uma requisição está sendo interpretada.

### TRACE /usuarios

Resumo de Uso Prático
Método	Ação	Uso Comum
POST	Criar	Criar um novo recurso
GET	Ler	Recuperar informações
PUT	Atualizar completamente	Substituir todo o conteúdo do recurso
PATCH	Atualizar parcialmente	Atualizar partes específicas do recurso
DELETE	Excluir	Apagar um recurso
OPTIONS	Opções Disponíveis	Saber quais métodos são suportados
HEAD	Cabeçalhos	Verificar metadados ou existência
TRACE	Depuração	Diagnosticar problemas de comunicação


Comando basico de MYSQL
Criar o banco 
Criar banco MYSQ
### create database armando character set utf8mb4 collate utf8mb4_unicode_ci;

2.Criar tabela
### create table `users`(
### `id` int not null auto_increment,
### `name` varchar(220) collate utf8mb4_unicode_ci default null,
### `email` varchar(220) collate utf8mb4_unicode_ci default null, 
### primary key (`id`)
### ) engine=InnoDB default charset=utf8mb4 collate=utf8mb4_unicode_ci;

3. Seleção de registro 
   #### select id, name, email from users;

4.  Cadastar o registro no banco de dados
### insert into users (name, email) values ('Armando', 'armando@example.com');
5. colocar limite no banco de dados
   ### select id, name, email from users limit 3;

limitar  quantidade de registro  selecionado no banco de bados e indicar o inicio
### select id, name, email from users limit 2 offset 4;
exemplo

pg= 1,2
pg = 
Página 3 (pg = 3), registros 5 a 6:

6. Acrescentar condição na busca de registros
### SELECT id, name, email FROM users WHERE email = 'armando@example.com';

7. Para filtrar nomes que começam com a letra "A":
   ### SELECT id, name, email FROM users WHERE name LIKE 'A%';

8. ondenar os registros retonrado do banco de dados 
   Exemplos:
1. Ordenar em ordem crescente (padrão):
   ### SELECT id, name, email FROM users ORDER BY name;
Ordenar em ordem decrescente:
### SELECT id, name, email FROM users ORDER BY name DESC;
Ordenar por mais de uma coluna:
### SELECT id, name, email FROM users ORDER BY name, id;
Ordenar com condições adicionais:
### SELECT id, name, email FROM users WHERE name LIKE 'A%' ORDER BY email ASC;
   Combinar com LIMIT e OFFSET:
 ### SELECT id, name, email FROM users ORDER BY id DESC LIMIT 5 OFFSET 0;
  

9. Editar registro no banco de dados
### update users set name = 'Armando 3a',  email='armando@example.com' where id = 3; 

10. apagar oi registro no banco de dados 
    ### delete from users where id=2;

CONEXÃO DE BANCO DE DADOS
  Sequelize e uma bibioterca Javascript que facilita o gerenciamento de banco de dado SQL
  ### npm install sequelize
  ### npm install --save sequelize 
 Instalar  o drive do banco de dados

 ### $ npm install --save mysql2