/*-------------------------------------------------*
 *   SENAC- Anáslie e Desenvolvimento de Sistemas  *
 *                Programação Web                  *
 *   Prof. Veríssimo                   set/2023    *
 *-------------------------------------------------*
 *           escopo de variável                    *
 *-------------------------------------------------*/
//------------Escopo GLOBAL
var nomeCliente = 'Joaquim Jose';
var nomeCliente2 = 'Maria Antonieta';
//
function mostrarCliente(){
  var sobrenome = 'da Silva Xavier'
  console.log(`O cliente é ${nomeCliente}`)
//Modificando a variável global 
nomeCliente += ` ${sobrenome} `

}

mostrarCliente();
console.log(`\nO nome completo do cliente é: ${nomeCliente} `)
console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*")
//
//------------Escopo de escopo (local)
/*-----------------------------------------------------------------*
 *Uma variável se torna local quando ela é declarada dentro de uma *
 *função, de tal maneira a qual ela somente estará acessível dentro* 
 *dessa função.                                                    *
 *-----------------------------------------------------------------*
 */
 
 function mostrarCliente2(){
  
  let sobrenome2 = 'Josepha Johanna von Habsburg'
  console.log(`\nO nome completo do cliente é: ${nomeCliente2} ${sobrenome2}`)

}
console.log(`\nO nome completo do cliente2 é: ${nomeCliente2} ${sobrenome2} `)
/** resultado: ReferenceError: sobrenome2 is not defined */
mostrarCliente2();
//
/*-----------------------------------------------------------------*
 *Uma variável local no bloco da estrutura IF (com let)            *
 *-----------------------------------------------------------------*
 */
if (true) { 
  let codProduto = 1234; 
  console.log(`O código do Produto é: ${codProduto}`) // Aparecerá 1234 em console
} 
console.log(`O código do Produto fora do bloco IF é: ${codProduto}`); 
//Erro a produzir:  ReferenceError: codProduto is not defined
// pois let declara o escopo de bloco da variável codProduto
//
/*-----------------------------------------------------------------*
 *Uma variável local no bloco da estrutura IF                      *
 *-----------------------------------------------------------------*
 */
 if (true) { 
  let codProduto2 = 1234; 
  console.log(`O código do Produto é: ${codProduto2}`) // Aparecerá 1234 em console
} 
console.log(`O código do Produto fora do bloco IF é: ${codProduto2}`); 
//Erro a produzir:  ReferenceError: codProduto2 is not defined
// pois let declara o escopo de bloco da variável codProduto2
//

