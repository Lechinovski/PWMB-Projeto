const elementoPorId = document.getElementById("meuId")
console.log(elementoPorId)
const elementoPorSeletor = document.querySelector("#meuId");
console.log(elementoPorSeletor)

// Manipulando conteúdo do objeto

console.log(elementoPorSeletor.textContent)
elementoPorSeletor.textContent="Novo valor da DIV1";

// Manipulando Atributo

const linkObtido = document.querySelector("a")
console.log(linkObtido)

// Alterando Atributo

linkObtido.setAttribute("href", "https://www.gov.br/cnpq/pt-br")

/*
Manipulação de estrutura DOM
*/ 
// Cria novo elemento

const novaDiv = document.createElement("div");
console.log(novaDiv)
novaDiv.textContent="Aqui vai novo conteudo na DIV"
document.body.appendChild(novaDiv)

/*
Evento - Formulario
*/

const botao = document.querySelector("button");
botao.addEventListener("click", function(){
    window.alert("Clicou no Botão")
})
botao.addEventListener("mouseenter", function(){
    window.alert("Acionou botão")
})
const inputx = document.querySelector("#input1");
inputx.addEventListener("keydown", function() {
    window.alert("Acionou tecla input")
})