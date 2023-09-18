/*------------------------------------------------------*
 *SENAC - TADS - Programacao Web                        *
 * Exemplos de utilizacao de forEach                    *
 *------------------------------------------------------*
 */
var sequencia = 0;
5 /*------------------------------------------------------*
6 * Exemplo #01 *
7 *------------------------------------------------------*
 */
console.log("*-------------------------------------------------------------*");
console.log(`*Caso #${++sequencia}: utilizando forEach*`);
console.log("*-------------------------------------------------------------*");
var arrayNumeros = [12, 22, 33, 44, 45, 667];
function verificaPares1(elemento) {
    if (elemento % 2 == 0)
        console.log(`...O número ${elemento} é par`);
}
arrayNumeros.forEach(verificaPares1);
/*            saída em console :
             O numero 12 é par
             O numero 22 é par
             O numero 44 é par
*/
/*------------------------------------------------------*
6 * Exemplo #02 *
7 *------------------------------------------------------*
*/
let argumentoExclusao="BMW";
console.log("*--------------------------------------------------------------------------*");
console.log(`*Caso #${++sequencia}: forEach com Arrow Function - Exclusão de um ITEM específico "${argumentoExclusao}"*` );
console.log("*--------------------------------------------------------------------------*");


var arrayMarcas = ["Ford", "BMW", "Fiat", "Audi", "Volkswagen"];
arrayMarcas.forEach((marca, indice) => {
    console.log(`...A marca ${marca} corresponde ao índice ${indice}`);
    if (marca === argumentoExclusao) {
        let itemExcluido = arrayMarcas.splice(indice, 1);
        console.log(`......Confira, Excluimos o elemento ${itemExcluido}`)
    }
});
console.log(`......Confira, o Array após a exclusão de "${argumentoExclusao}"`)
console.log(arrayMarcas)
 /* saída esperada:
A marca Ford corresponde ao indice : 0
A marca BMW corresponde ao indice : 1
Confira : Excluimos o elemento BMW
A marca Audi corresponde ao indice : 2
A marca Volkswagen corresponde ao indice : 3
[ ’ Ford ’, ’ Fiat ’, ’ Audi ’, ’ Volkswagen ’ ]
*/