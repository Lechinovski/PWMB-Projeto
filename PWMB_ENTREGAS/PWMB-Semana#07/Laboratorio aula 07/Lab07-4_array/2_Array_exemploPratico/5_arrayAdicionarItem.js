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
  *                                 ADICIONAR -   PUSH
  *                           Adicionando um item na lista
  *----------------------------------------------------------------------------*
 */
 console.log("*-------------------------------------------------------------*");
 console.log(`*Caso #${++sequencia}:Adicionando (PUSH) item *`);
 console.log("*-------------------------------------------------------------*");
 let argumentoPush="Sacolas de palha de CocoVerde";
 listaDeProdutos.push(argumentoPush)
 console.log(`...Veja  ITEM ADICIONADO "${argumentoPush}" no Array abaixo:`)
 console.log(listaDeProdutos);
 console.log(`...Veja  Novo tamanho da lista: "${listaDeProdutos.length}" do Array`)
 
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
 