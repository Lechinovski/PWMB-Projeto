/*------------------------------------------------------*
 *SENAC - TADS - Programacao Web                        *
 *Exemplo de array                                      *
 *------------------------------------------------------*
 */
/**
 * O exemplo abaixo, não utiliza Array
 */
var carro1 = "Fusca";
var carro2 = "Brasoca";
var carro3 = "Kombi";
console.log("*-------------------------------------------------*")
console.log("*     Manipulação de Variáveis sem uso de ARRAY   *")
console.log("*-------------------------------------------------*")
console.log(`Carro 1 - ${carro1}`);
console.log(`Carro 2 - ${carro2}`);
console.log(`Carro 3 - ${carro3}`);

/**
 * O exemplo abaixo, UTILIZA Array
 */
var arrayCarro = ["Fusca", "Brasoca", "Kombi"];
console.log("*-------------------------------------------------*")
console.log("*     Manipulação de Variáveis COM uso de ARRAY   *")
console.log("*-------------------------------------------------*")
for (let contador=0; contador < arrayCarro.length; contador++) {
    console.log(`Carro ${contador+1} - ${arrayCarro[contador]}`);
}