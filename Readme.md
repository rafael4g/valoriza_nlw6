# PROJETO BACKEND - NLW6 ROCKETSEAT

### 💻 Sobre o VALORIZA
Projeto desenvolvido para administrar autenticação e validação de usuarios, com intuito de registrar elogios,
e criação de tags apenas pelo admim. Projeto desenvolvido na semana NLW6 Rocketseat na missão node.js.
## 

## Iniciando projeto e Instalando Bibliotecas

```bash
# iniciando projeto
yarn init -y

# biblioteca Framework web rápido, flexível e minimalista 
yarn add express

# inicializando typescript
yarn tsc --init

# biblioteca que altera arquivos typescript para o formato que o node possa entender
yarn add ts-node-dev -D

# biblioteca para password
yarn add uuid

# instalando biblioteca: ORM, @Decorators, Banco de dados
yarn add typeorm reflect-metadata sqlite3

# biblioteca para erros asyncronous
yarn add express-async-errors

# biblioteca jsonwebtoken
yarn add jsonwebtoken

# bliblioteca para criptográfica
yarn add bcryptjs

# bliblioteca para expor novos atributos ou excluir pelo typeorm
yarn add class-transformer

# bliblioteca booster para front-end
yarn add cors

# typagens para ambiente de desenvolvimento
yarn add @types/express -D
yarn add @types/uuid -D
yarn add @types/jsonwebtoken -D
yarn add @types/bcryptjs -D
yarn add @types/cors -D

```

## Verbos http
* GET    => Buscar uma informação
* POST   => Inserir (Criar) uma informação
* PUT    => Alterar uma informação
* DELETE => Remover um dado
* PATCH  => Alterar uma informação específica

## Para utilização de sqlite e outros bancos, todas as descrições de configurações esta em :
- [Typeorm](https://typeorm.io/#/using-ormconfig)

## Criando migrations e entidades
```bash
# criando/configurando migration CreateUsers
yarn typeorm migration:create -n CreateUsers

# executando migration
yarn typeorm migration:run

# criando/configurando entidades
yarn typeorm entity:create -n User

# criando/configurando migration CreateTags
yarn typeorm migration:create -n CreateTags

# executando migration
yarn typeorm migration:run

# criando/configurando migration de inclusão de campo password
yarn typeorm migration:create -n AlterUserAddPassword

# executando migration
yarn typeorm migration:run

# criando/configurando migration de inclusão de campo password
yarn typeorm migration:create -n CreateCompliments

# executando migration
yarn typeorm migration:run


```

## 🎲 Criação de repositories
* Serve como um tradutor de queryLanguages

## 🚧 Configurando tsconfig.json

- "strict": false,
- "strictPropertyInitialization": false,
- "experimentalDecorators": true,
- "emitDecoratorMetadata": true, 

   - ### Modificações nas typagens, atribuir em:
      -  "typeRoots": ["./src/@types"], 


 ## 🎲 Criação de Midleware
 - ensureAuthenticaded.ts
    - Verifica se o usuario esta autenticado ou token invalido
    - Repassa o Id do usuario para o request
 - ensureAdmin.ts
    - Recupera o usuario pelo request
    - Verifica se o usuario é admin
---


### Author
Feito com ❤️ por Rafael Silva