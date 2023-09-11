/*----------------------------------------------------------------*
 *             SENAC-PW-Aula02 - Exemplo #03                      *
 *                  Declarando variáveis: "const"                   *
 * vamos tratar 3 tipos de variáveis: string, numero e boolean    *
 *----------------------------------------------------------------*/
//calculo do índice de Massa Corpórea => IMC = {Peso / (Altura * Altura)}
//
const peso = 66;                              // variável tipo NUMÉRICA ineira
const altura = 1.70;                          // variável tipo NUMÉRICA
const textoResultado = "O IMC calculado:  ";  // variável tipo STRING 
let resultadoOK    = true;                 // variável tipo BOOLEAN
msgResultado= "Cara....Parabens!!!";       // variável tipo String    
//
const imcCalculado = (peso / (altura * altura));
//
if (imcCalculado > 20) {
    resultadoOK = false;
}
//
if (!resultadoOK){
    msgResultado="Cara....Cuida-te!!!"
}
console.log(textoResultado+imcCalculado)
console.log(msgResultado);

