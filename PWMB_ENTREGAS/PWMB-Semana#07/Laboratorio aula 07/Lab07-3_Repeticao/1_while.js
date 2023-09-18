/*-------------------------------------------------*
 *   SENAC- Anáslie e Desenvolvimento de Sistemas  *
 *                Programação Web                  *
 *   Prof. Veríssimo                   set/2023    *
 *-------------------------------------------------*
 *    Exemplo de estrutura de repetição WHILE      *
 *-------------------------------------------------*/
/**
 * Faremos a tabuada de um determinado numero
 */
const numeroBase=7
var controle = 1; 
console.log("*-------------------------------------------------------------*")
console.log("*                 Tabuada - Loop de repetição While           *")
console.log("*-------------------------------------------------------------*")
 while (controle <=10){
    let produto = numeroBase * controle;
    console.log(`${numeroBase} * ${controle} = ${produto}`)
    controle++
}
