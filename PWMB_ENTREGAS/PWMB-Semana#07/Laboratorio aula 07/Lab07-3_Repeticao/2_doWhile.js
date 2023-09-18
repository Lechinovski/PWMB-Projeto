/*-------------------------------------------------*
 *   SENAC- Anáslie e Desenvolvimento de Sistemas  *
 *                Programação Web                  *
 *   Prof. Veríssimo                   set/2023    *
 *-------------------------------------------------*
 *    Exemplo de estrutura de repetição doWhile    *
 *-------------------------------------------------*/
 const numeroBase=7
 var controle = 1; 
 console.log("*-------------------------------------------------------------*")
console.log("*                 Tabuada - Loop de repetição doWhile          *")
console.log("*--------------------------------------------------------------*")
  do {
     let produto = numeroBase * controle;
     console.log(`${numeroBase} * ${controle} = ${produto}`)
     controle++
 } while (controle <=10)