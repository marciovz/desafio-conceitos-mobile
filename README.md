# DESAFIO4-REACT NATIVE
  

## Visão geral
O desafio4-React Native é uma implementação mobile utilizando react native para construção de uma aplicação mobile para listar os repositórios armazenados no servidor.

O desafio 4 é a resolução do desafio do módulo 1 parte 3 do curso Bootcamp da Rocketseat para aplicação dos conhecimentos iniciais sobre React Native.

O desafio é composto pela construção de uma lista de repositórios. A aplicação se integra com o servidor construído no desafio02-NodeJS responsável pelo gerenciamanto e armazenamento da listagem de repositórios. Para cada repositório da lista é possível adicionar um like para o repositório, sendo atualizado no servidor backend via integração.

O aplicativo foi desenvolvido apenas em ambiente android, porém pode ser instalado em sistemas IOS, entretando como não foi testado no mesmo, pode haver a necessidade de alguma alteração em seu código fonte.

### Funcionalidades
- Listagem dos repositórios.
- Adição de um like a um repositório.


### Bibliotecas
- axios: utilizada para fazer requisições http para o servidor;
<br />

## Instalação 
	
### 1. Requisitos para instalação
- NodeJS na versão 8 ou superior;
- yarn ou npm;
- Emulador android previamente instalado;

### 2. Download

Clonar o projeto para sua máquina local e instalar as dependências.
```bash
 # clonar o repositório
 $ git clone https://github.com/marciovz/desafio4-conceitos-mobile.git
 
 # acessar a pasta do projeto
 $ cd desafio4-conceitos-mobile
 
 # instalar as dependências do projeto
 $ yarn
```

<br />

## Rodando a aplicação

Os passos abaixo foram criados utilizando um celular android como emulador conectado a máquina via porta USB.

### 1. Iniciar o servidor backend
Acessar a pasta do projeto do servidor backend via terminal rodar o comando abaixo:
```bash
$ yarn dev
```

### 2. Configurar o ip da backend
Altere o ip de acesso a api do backend, inserindo o ip da máquina onde está rodando o backend.

```code
  const api = axios.create({
    // put here your localhost ip
    baseURL: "http://192.168.1.104:3333",
  });
```

### 3. Iniciar a aplicação
Abrir o emulador ou conectar o android na porta USB da máquina.

Criar o bundle da aplicação
```bash
$ yarn android
```

Iniciar o a aplicação
```bash
$ yarn start
```

A aplicação irá abrir no emulador.
Você pode ver a lista de repositórios e adicionar likes.
