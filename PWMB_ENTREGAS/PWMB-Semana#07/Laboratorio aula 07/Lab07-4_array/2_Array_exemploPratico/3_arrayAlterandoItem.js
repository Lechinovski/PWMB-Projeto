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
 alterando um item ( Em nosso exemplo : item "Chinelos Ava Iana" deve ser alterado 
 para Chinelo do Havai ")
  *----------------------------------------------------------------------------*
 */
 console.log("*-------------------------------------------------------------*");
 console.log(`*Caso #${++sequencia}:ALTERANDO item do Array*`);
 console.log("*-------------------------------------------------------------*");
 let argumentoAlteracao="Chinelo do Havai";
 listaDeProdutos[1] = argumentoAlteracao;
 
 console.log(`...Veja o novo ITEM "${argumentoAlteracao}" no Array abaixo:`);
 console.log(listaDeProdutos);
 