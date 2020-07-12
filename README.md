<h1 align="center">

:computer: **DESAFIO 1-3**: Funções e estruturas de repetição

</h1>

<h1 align="center">
    <img alt="Logo LaunchBase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px">
</h1>

<p align="center">
    <a href="https://www.linkedin.com/in/antonio-stanislaw-dos-santos-47a077106/">
        <img alt="Made by Antonio Stanislaw" src="https://img.shields.io/badge/made%20by-Antonio Stanislaw-%23ee9538">
    </a>
    <a href="LICENSE">
        <img alt="LICENSE" src="https://img.shields.io/badge/license-MIT-%23ee9538">
    </a>

</p>

<h5 align="center">
<p style=color:black>ÍNDICE</P>

[Sobre o desafio](#-Sobre-o-desafio) | [Tecnologias Utilizadas](#-Tecnologias-Utilizadas) | [Como baixar o projeto](#-Como-baixar-o-projeto) | [Licença](#-Licença)

</h5>

## 🚀 Sobre o desafio

Desafio feito no Bootcamp LaunchBase, que consiste em fortalecer alguns conceitos repassados no curso, são eles:

- Funções e métodos;
- Estruturas de repetição;
- Escopos. 


### Usuários e tecnologias(Desafio - 1)

No desafio 1 - foi criado um algoritmo que armazena em um array de usuários (objetos), onde cada usuário terá um ***nome*** e suas ***tecnologias*** (novo array), por exemplo:

```js
const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }

]

```

O algoritimo deverá pecorrer todo array de usuários e imprimir as informações dos usuários, como exemplo abaixo:

```

Carlos trabalha com HTML, CSS
Jarmine trabalha com JavaScript, CSS
Tuane trabalha com HTML, Node.js

```

### Busca por tecnologia(Desafio - 2)

No desafio 2 - Foi criado um algoritmo que receberar os dados de um objeto de usuários do array e retorna ***SE*** o usuário trabalha com ***CSS*** ou não. Retornando um valor do tipo boolean (***true/false***), por exemplo:

```js

function checaSeUsuarioUsaCSS(usuario) {
  // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
  // SE encontrar, retorne true da função, caso contrário retorne false
}

```

Estabelcer um condicional verificar cada usuário, onde se o mesmo trabalhar com CSS exibir na tela as informações do usuário.

Por exemplo:

```js

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuario[i].nome} trabalha com CSS`);
  }
}

```

### Soma de despesas e receitas (Desafio - 3)

Nesse desafio foi criado um algoritmo que calcula a soma de receitas e despesas de usuários e no fim retorne o seu saldo (receitas - despesas)

Nesse algoritmo deve-se pecorrer o array de usuários e chamar a função soma passando os parametros de despesa e receita que foram coletado por duas outras funções.

Funções criadas:

```js
function calculaReceita(usuario) {}
function calculaDespesa(usuario) {}
function calculaSaldo(receitas, despesas) {}
```

No fim exibir todos os usuários em tela e seus respectivos saldos com a mensagem **POSITIVO** ou **NEGATIVO** dependendo do saldo, por exemplo:

```
Fulano possui saldo POSITIVO de 43.3
Sicrano possui saldo NEGATIVO de -90.3
```
---

## 🛠️ Tecnologias Utilizadas

- JavaScript

---

## ⏬ Como baixar o projeto
Executar o Seguinte comando no seu **Terminal** ou no **CMD**:

```bash

$git clone https://github.com/stanislawiaw2018/bootcamp-launchbase-desafio1-3.git

```

---

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
:rocket: Exercício resolvido com muita dedicação e esforço por [Antonio Stanislaw](https://www.linkedin.com/in/antonio-stanislaw-dos-santos-47a077106/) :man_technologist: