/*-------------------------------------------------*
 *   SENAC- Anáslie e Desenvolvimento de Sistemas  *
 *                Programação Web                  *
 *   Prof. Veríssimo                   set/2023    *
 *-------------------------------------------------*
 *           Interpolção vs Concatenação           *
 *-------------------------------------------------*/
 const nome = "Joaquim Jose";
 const sobrenome = " da Silva Xavier";
 
 // Concatenação usando o operador '+'
 const nomeCompleto = nome + " " + sobrenome;
 console.log(nomeCompleto); // Saída: "Joaquim Jose da Silva Xavier"
 
 // A Concatenar tudo 
 const saudacao = "Caro: ";
 const mensagem = saudacao + nome +sobrenome + ", tudo está concatenado !";
 console.log(mensagem); 
 console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*"); 
 /*------------------------------------------------------------------
 A interpolação de strings permite inserir variáveis ou expressões 
 dentro de uma string usando template literals (delimitadas por crases `).
 --------------------------------------------------------------------
 */
  
 // Interpolação '+'
 nomeCompletoInterpolado = `${nome} ${sobrenome}`
  console.log(nomeCompletoInterpolado); // Saída Com Interpolação: "Joaquim Jose da Silva Xavier"
 
 // Interpolar tudo
 const saudacao2 = "Caro: ";
 const mensagem2 = `${saudacao} ${nome} ${sobrenome}, tudo está Interpolado !`;
 console.log(mensagem2); 
 /*------------------------------------------------------------------
 Mais exemplos..... interpolação 
 --------------------------------------------------------------------
 */
 console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*");  
 const produto = "smartphone";
const preco = 499.99;

// Interpolação de strings com template literals
const descricao = `O ${produto} custa ${preco} dólares.`;
console.log("Descrição:", descricao); 

// Interpolação com expressões
const desconto = 0.1;
const precoComDesconto = preco * (1 - desconto);
console.log(`Com ${desconto * 100}% de desconto, o preço fica em $${precoComDesconto.toFixed(2)}.`);
