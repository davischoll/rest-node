# Desafio | NodeJS Developer

Projeto construído como desafio teste para processo de seleção da [Compasso UOL](https://compassouol.com/).
Desenvolvimento de uma API REST em Java Script ([Node.js](https://nodejs.org/en/)), contemplando as operações básicas de um CRUD para cadastro de Clientes e Cidades.

## Pré-requisitos

Para rodar a aplicação em ambiente de desenvolvimento com um servidor local, será necessário apenas o NodeJS/NPM.

```
$ git clone https://github.com/davischoll/rest-node-compasso.git
$ npm install
$ npm start
```

## Banco de Dados - SQLite

Para fins didáticos e dada a natureza da aplicação, o banco de dados utilizado para esta tarefa foi o **[SQLite](https://www.sqlite.org/index.html)**. Portanto, não será necessária nenhuma configuração extra.

Ao iniciar a aplicação e rodar o comando `npm start` pela primeira vez, o arquivo do banco será criado e estará vazio e pronto para o uso.

As tabelas construídas serão as seguintes:

- cities:
  - city_id
  - city_name
  - city_uf
- customers:
  - id
  - name
  - gender
  - birthday
  - age
  - city_id

## Testando funcionalidades

A fim de realizar e testar as operações, pode-se utilizar, além do browser do navegador, qualquer software que simule requisições REST, como o [Insomnia](https://insomnia.rest/) ou [Postman](https://www.postman.com/), configurando requisições de cadastro, consulta, alteração e remoção para os seguintes endpoints:

### Cidades

- **POST**: `http://localhost:3000/cities`
  - Cadastra nova cidade, informando os campos básicos através do Body da requisição em formato JSON:
  ```
  {
    "name": "Curitiba",
    "uf": "PR"
  }
  ```
- **GET**: `http://localhost:3000/cities`
  - Sem parâmetros: Retorna lista de todas as cidades cadastradas.
  - Informando os campos `name` ou `uf` via Query String, realizará uma busca pelo nome da cidade ou pelo seu estado, retornando todos os resultados encontrados.

### Clientes

- **POST**: `http://localhost:3000/customers`
  - Cadastra novo cliente ao informar os campos no Body da requisição:
  ```
  {
    "name": "New Customer",
    "gender": "F",
    "birthday": "1994-11-05",
    "age": 26,
    "city_id": 1
  }
  ```
- **GET**: `http://localhost:3000/customers`

  - Retorna lista de todos os clientes cadastrados.

- **GET**: `http://localhost:3000/customers/:id`

  - Informando número do ID do cliente, retorna os dados do cliente cadastrado, caso ele exista.

- **GET**: `http://localhost:3000/customers/select/:name`

  - Informando um nome, retorna lista de todos os clientes encontrados que contenham este nome.

- **DELETE**: `http://localhost:3000/customers/:id`

  - Remove o cliente pelo ID informado.

- **PATCH**: `http://localhost:3000/customers/:id`
  - Altera o nome do cliente pelo ID, informando o novo nome no Body da requisição:
  ```
  {
    "name": "Customer Updated"
  }
  ```

### Utilizados neste projeto:

- [ExpressJS](https://expressjs.com/) - _Fast, unopinionated, minimalist web framework for Node.js_
- [SQLite3](https://www.sqlite.org/index.html) - _Small. Fast. Reliable. Choose any three._

## Licença

Licenciado sob a licença MIT - veja [LICENSE](LICENSE) para mais informações.

## Autor:

- **Davi Scholl** - [LinkedIn](https://www.linkedin.com/in/davischoll/)
