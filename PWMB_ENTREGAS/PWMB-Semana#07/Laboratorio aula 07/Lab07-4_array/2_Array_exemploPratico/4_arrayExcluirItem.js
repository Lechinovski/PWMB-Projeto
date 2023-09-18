/*------------------------------------------------------*
 *SENAC - TADS - Programacao Web                        *
 *Exemplo de array                                      *
 *------------------------------------------------------*
 */
 var sequencia=0;
 // Delcarando array
 const listaDeProdutos = ["Camisa manga madura",
     "Chinelos Ava Iana",
     "Galochas happy horse",
     "Metacapacete magntico",
     "Luvas Bionicas"
 ];
 console.log("*============================================================*");
 console.log("                      Este é o ARRAY                         *");
 console.log("*===========================================================*");
 console.log(listaDeProdutos);
 
 /*----------------------------------------------------------------------------*
  *                                 REMOVER -   SHIFT
  *----------------------------------------------------------------------------*
 */
 console.log("*-------------------------------------------------------------*");
 console.log(`*Caso #${++sequencia}:removendo o primeiro item da listaDeProdutos: ${listaDeProdutos[0]}`);
 console.log("*-------------------------------------------------------------*");
 listaDeProdutos.shift();
 console.log(listaDeProdutos);
 //
 // removendo o ultimo item da listaDeProdutos : " Sacolas de palha de Coco Verde "
 let ultimaPosicao=listaDeProdutos[listaDeProdutos.length - 1];
 console.log("*-------------------------------------------------------------*");
 console.log(`*Caso #${++sequencia}:removendo ÚLTIMO (POP) item da listaDeProdutos: ${ultimaPosicao}`);
 console.log("*-------------------------------------------------------------*");
 
 
 listaDeProdutos.pop();
 
 console.log(`...Item "${ultimaPosicao}"(POP)excluido com Sucesso !!!` );
 console.log(listaDeProdutos);
 //
 /* Remover um elemento de acordo com sua posicao ;
 Nosso exemplo " Galochas happy horse " nestecaso , proceder :
  1 - Localizar o indice do item desejado: metodo " indexOf "
  2 - usar metodo splice ( se indice for  direrente de -1 , eh claro )
  O metodo splice recebe dois parametros :  o primeiro eh a posicao no array e
  o segundo eh a quantidade de elementos a remover
  */
  console.log("*-------------------------------------------------------------*");
  console.log(`*Caso #${++sequencia}:Remover um elemento de acordo com sua posicao `);
  console.log("*-------------------------------------------------------------*");
  let argumentoEncontraPosicao="Galochas happy horse";
 let indiceDoItem = listaDeProdutos.indexOf(argumentoEncontraPosicao);
 if (indiceDoItem > -1) {
     listaDeProdutos.splice(indiceDoItem, 1);
     console.log(`...Item ("${argumentoEncontraPosicao}")excluido com Sucesso !!!` );
 } else{
     console.log(`...Item ("${argumentoEncontraPosicao}") NÃO LOCALIZADO, portanto Não excluido!!!` );
 }
 console.log(listaDeProdutos);
 
 