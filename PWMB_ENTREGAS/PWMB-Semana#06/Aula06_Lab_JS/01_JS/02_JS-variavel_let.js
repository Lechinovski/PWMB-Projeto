/*----------------------------------------------------------------*
 *             SENAC-PW-Aula02 - Exemplo #02                      *
 *                  Declarando variáveis: "let"                   *
 * vamos tratar 3 tipos de variáveis: string, numero e boolean    *
 *----------------------------------------------------------------*/
//calculo do índice de Massa Corpórea => IMC = {Peso / (Altura * Altura)}
//
let peso = 66;                              // variável tipo NUMÉRICA ineira
let altura = 1.70;                          // variável tipo NUMÉRICA
let textoResultado = "O IMC calculado:  ";  // variável tipo STRING 
let resultadoOK    = true;                 // variável tipo BOOLEAN
msgResultado= "Cara....Parabens!!!";       // variável tipo String    
//
let imcCalculado = (peso / (altura * altura));
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
