/*-------------------------------------------------*
 *   SENAC- Anáslie e Desenvolvimento de Sistemas  *
 *                Programação Web                  *
 *   Prof. Veríssimo                   set/2023    *
 *-------------------------------------------------*
 *                 Exemplos do uso de IF           *
 *-------------------------------------------------*/
//let valorInformado;
const valorInformado=20;

// Exemplo 1: Verificar se um número é positivo ou negativo


if (valorInformado > 0) {
    console.log("O valor informado  é positivo.");
} else {
    console.log("O valor informado é negativo.");
}

// Exemplo 2: Verificar se um número é par ou ímpar

if (valorInformado % 2 === 0) {
    console.log("O valor informado é parrrrr.");
} else {
    console.log("O valor informado é ímpar.");
}

// Exemplo 3: Verificar se uma pessoa é maior de idade

if (valorInformado >= 18) {
    console.log("O valor informado é de um pessoa  MAIOR de idade.");
} else {
    console.log("O valor informado é de um pessoa  MENOR de idade.");
}

// Exemplo 4: Verificar se uma variável é undefined

if (typeof valorInformado === "undefined") {
    console.log("A variável não foi definida.");
} else {
    console.log("A variável está definida. ");
}
