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
  *                                 RECUPERAR ITEM 
  *                           obter valores da lista (Array)
  *----------------------------------------------------------------------------*
 */
 console.log("*-------------------------------------------------------------*");
 console.log(`*Caso #${++sequencia}: Obtendo o TAMANHO do Array*`);
 console.log("*-------------------------------------------------------------*");
 //---------------------------------- obtendo o tamanho da lista
 console.log(`....Lista de Produtos possui  ${listaDeProdutos.length} itens.`);
 
 //----------------------------------acessando um item especifico
 console.log("*-------------------------------------------------------------*");
 console.log(`*Caso #${++sequencia}: Acessando ITEM ESPECÍFICO*`);
 console.log("*-------------------------------------------------------------*");
 console.log(`...O primeiro item da lista é: "${listaDeProdutos[0]}", e o último é: "${listaDeProdutos[4]}"`);
 //----------------------------------mosstra o item 
 console.log(`...Outra forma de chegar no ultimo item: "${listaDeProdutos[listaDeProdutos.length - 1]}"`);
 /*----------------------------------
                                     pesquisando um item na lista devolve a posicao na qual
                                     se encontra o argumento de pesquisa. 
                                     Se nao encontrar o item, devolve -1 ( um negativo )*/
 console.log("*-------------------------------------------------------------*");
 console.log(`*Caso #${++sequencia}: Pesquisa ESPECÍFICA  no Array*`);
 console.log("*-------------------------------------------------------------*");
 
 let argumentoPesquisa = "Galochas happy horse"
 let resultadoPesquisa = listaDeProdutos.indexOf(argumentoPesquisa);
 if (resultadoPesquisa > 0) {
     console.log(`...OK item "${argumentoPesquisa}" encontrado`);
 } else {
     console.log(`...NAO OK item "${argumentoPesquisa}" NÃO encontrado`);
 }
 