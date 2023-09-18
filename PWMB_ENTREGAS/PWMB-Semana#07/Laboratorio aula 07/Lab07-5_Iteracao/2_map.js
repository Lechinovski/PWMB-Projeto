/*------------------------------------------------------*
 *SENAC - TADS - Programacao Web                        *
 * Exemplos de utilizacao de forEach                    *
 *------------------------------------------------------*
 */
var sequencia = 0;

var numerosAleatorios = [2, 4, 6, 8]; // vetor original

var dobroDaLista = numerosAleatorios.map(function (itemAtual) {
    let itemAlterado = itemAtual * 2
    return itemAlterado; // retorna o item original multiplicado por 2
});
console.log("*--------------------------------------------------------------------------*");
console.log(`*Caso #${++sequencia}: Faz ITERAÇÃO map() - Acessar um ITEM INterno do Array*` );
console.log("*--------------------------------------------------------------------------*");
console.log(dobroDaLista); // imprime [4 , 8 , 12 ,16]

/*------------------------------------------------------*
 * Exemplo #2 *
*------------------------------------------------------*
*/
var produtosMercado = [
    {
        idProduto: "LT1234",
        nmProduto: "Leite em Po Vaquinha Feliz",
        qtdEstoque: "10"
    },
    {
        idProduto: "FR543",
        nmProduto: "Farinha de Trigo - Trigo Bom",
        qtdEstoque: "101"
    },
    {
        idProduto: "PR6543",
        nmProduto: "Bacon - Porquinho Feliz",
        qtdEstoque: "40"
    },
    {
        idProduto: "RC9876",
        nmProduto: "Rucula - Prato Saboroso",
        qtdEstoque: "40"
    }
]
var produtoDaPrateleira = produtosMercado.map(function (item, indice) {
    return item.nmProduto;
});
/* mostra em console :
[
’ Leite em Po Vaquinha Feliz ’,
’ Farinha de Trigo - Trigo Bom ’,
’ Bacon - Porquinho Feliz ’,
’ Rucula - Prato Saboroso ’
]
*/
console.log("*--------------------------------------------------------------------------*");
console.log(`*Caso #${++sequencia}: Faz ITERAÇÃO map() - Acessar um ELEMENTO do item Interno do Array*` );
console.log("*--------------------------------------------------------------------------*");
console.log(`...Acessou aos Produtos:  ${produtoDaPrateleira}`);

/**
 * Manipulação de elementos dentro do array
 */
console.log("*--------------------------------------------------------------------------*");
console.log(`*Caso #${++sequencia}: Manipulando  ELEMENTOS do item Interno do Array*` );
console.log("*--------------------------------------------------------------------------*");
var produtoElemento = produtosMercado.map(function (item2, indice2) {
    console.log(`Item ${indice2} : ID=${item2.idProduto}     
    NOME=${item2.nmProduto}   
    QTD=${item2.qtdEstoque}`);
});
