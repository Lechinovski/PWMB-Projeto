/*----------------------------------------------------------------*
 *             SENAC-PW-Aula02 - Exemplo #01                      *
 *                  Declarando variáveis: "var"                   *
 * vamos tratar 3 tipos de variáveis: string, numero e boolean    *
 *----------------------------------------------------------------*/
//calculo do índice de Massa Corpórea => IMC = {Peso / (Altura * Altura)}
//
var peso = 66;                              // variável tipo NUMÉRICA ineira
var altura = 1.70;                          // variável tipo NUMÉRICA
var textoResultado = "O IMC calculado:  ";  // variável tipo STRING 
var resultadoOK    = true;                 // variável tipo BOOLEAN
msgResultado= "Cara....Parabens!!!";       // variável tipo String    
//
var imcCalculado = (peso / (altura * altura));
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
