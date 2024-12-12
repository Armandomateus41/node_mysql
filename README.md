SEQUECNIA PARA CRIAR O PROJETO 
Criar o aquivoi package
## npm init

mkdir meu-projeto
cd meu-projeto
npm init -y
### npm install experess
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
   ### nodemon index.js ou app.js

Criaçãpo de API
1. POST (Criar ou Cadastrar)
   ### POST /usuarios
2. GET (Visualizar)  
   ### GET /usuarios 
Uso: Recuperar informações de um recurso existente.
Exemplo: Obter detalhes de um usuário ou listar todos os usuários.

3. PUT (Atualizar Completamente)
Uso: Atualizar um recurso existente, substituindo completamente o conteúdo.
Exemplo: Atualizar todas as informações de um usuário.
### PUT /usuarios/{id}

4. PATCH (Atualizar Parcialmente)
Uso: Atualizar parcialmente um recurso.
Exemplo: Atualizar apenas o email de um usuário. 
### PATCH /usuarios/{id}
5. DELETE (Apagar)
Uso: Remover um recurso existente.
Exemplo: Deletar um usuário.
http
Copiar código
### DELETE /usuarios/{id}

6. OPTIONS (Verificar Opções Disponíveis)
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
