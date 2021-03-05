<p align="center"><img width="150" src="https://media-exp1.licdn.com/dms/image/C560BAQGAl_2YVtcsFg/company-logo_200_200/0/1614113370753?e=1623283200&v=beta&t=paMDxPBut4LOaJF_U9fc54EPzYsY4ii6Kpw7p71QYrs" alt="Pikachu"></a></p>
<h1 align="center"> Roga Labs Technical Challenge </h1>

<!-- Index session-->
<p align="center">
 <a href="#-sobre">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
  <a href="#-diferenciais">Diferenciais</a> •
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-como-executar-o-projeto">Como executar o projeto</a>
</p>

<!--About session-->

## 💻 Sobre a Roga Labs

A tecnologia surgiu para facilitar, organizar e automatizar a vida das pessoas. É com esse propósito que desenvolvemos soluções para o mundo corporativo e governamental, resolvendo problemas reais do dia-a-dia. Nossa missão é prover soluções digitais em diversos segmentos, sempre com o objetivo de aumentar a eficiência dos nossos clientes.

---

<!--Layout session-->

## <!--Functionalities session-->

## ⚙️ Funcionalidades

- [✔️] Deverá ser apresentado a listagem de usuários cadastrados;

  - Componente `ListStudents.vue`

- [✔️] Quando não possuir nenhum usuário, deverá exibir a mensagem "Não há usuários cadastrados";

  - Componente: `ListStudents.vue`, Linha `10` e `152`

- [✔️] Quando realizar a busca e não tiver nenhum usuário com o critério informado, deverá exibir a mensagem: "Não há usuários com os critérios de busca utilizados";

  - Componente: `ListStudents.vue`, Linha `11` e `148`

- [⚠️] A listagem deverá ser persistida no LocalStorage;

  - A listagem foi persistida num `banco de dados local`, permitindo assim um maior controle da aplicação. Podemos `buscar`, `criar`, `editar` e `excluir` usuários. O arquivo `db.json`, na raiz do projeto, controla o fluxo de dados '`mockando`' uma api `REST`.

- [✔️] Alteração do Card quando o usuário estiver ativo ou inativo;
  - Quando o usuário estiver ativo, o mesmo pode ser editado e excluído. Se estiver inativo, essas ações não são permitidas. Os usuários ativos tem um círculo `Verde` ao lado de seus nomes, já os inativos, um `Vermelho`.

---

## 🚀 Diferenciais

- [✔️] Implementação da busca

  - Componentes: `SearchInput.vue` e `ListStudents.vue`

- [✔️] Implementação do filtro

  - Componentes: `FilterSelect.vue` e `ListStudents.vue`

- [⚠️] Utilização do Vuetify

  - Como o `Vuetify` ainda não tem compatibilidade com o Vue 3, o framework `Bootstrap` foi usado em seu lugar.

- [❌] Deploy da aplicação no Heroku ou Netlify

  - O deploy da aplicação não pôde ser feito, já que não conseguiriamos consumir nossa api REST local.

---

<!--Tecnologies session-->

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Front-end**

- Html5
- Css3
- Sass
- Bootstrap
- Javascript
- Vue.js 3
- Vue Test Utils
- Jest
- Axios
- Husky
- Lint-staged
- Commitlint
- Gitflow

#### **Utilitários**

- Editor: **[Visual Studio Code](https://code.visualstudio.com/)** → Extensions: **[Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)**

---

<!--Running session-->

## 🚀 Como executar o projeto

### Pré-requisitos

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)

#### 🎲 Rodando o projeto - Frontend

```bash

# Clone o repositório
$ git clone <repositorio>

# Acesse a pasta do projeto no seu (terminal, bash, prompt de comando)

# Instale as dependências
$ yarn

# Execute o script "api"
$ yarn api

# A api iniciará na porta: 3000
http://localhost:3000/students

# Execute o script "serve"
$ yarn serve

# O projeto iniciará na porta: 8080
http://localhost:8080

```

### Compilar e minificar para produção

```
yarn build
```

### Rodar testes unitários

```
yarn test:unit
```

### Executar lint nos arquivos

```
yarn lint
```

---

<!--Bottom session-->
<h4 align=center>Feito com ❤️ por Willian Silva 👋 <a href="https://www.linkedin.com/in/wiriyamu/">Entre em contato :)</a></a></h4>
