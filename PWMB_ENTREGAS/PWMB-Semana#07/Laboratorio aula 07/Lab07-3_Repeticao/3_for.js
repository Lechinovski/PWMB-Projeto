/*-------------------------------------------------*
 *   SENAC- Anáslie e Desenvolvimento de Sistemas  *
 *                Programação Web                  *
 *   Prof. Veríssimo                   set/2023    *
 *-------------------------------------------------*
 *    Exemplo de estrutura de repetição FOR        *
 *-------------------------------------------------*/
const numeroBase = 7
var controle = 1;
console.log("*-------------------------------------------------------------*")
console.log("*                 Tabuada - Loop de repetição FOR             *")
console.log("*-------------------------------------------------------------*")
for (controle = 1; controle <= 10; controle++) {
    let produto = numeroBase * controle;
    console.log(`${numeroBase} * ${controle} = ${produto}`)

} 