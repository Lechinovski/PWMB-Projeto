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

