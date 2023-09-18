/*-------------------------------------------------*
 *   SENAC- Anáslie e Desenvolvimento de Sistemas  *
 *                Programação Web                  *
 *   Prof. Veríssimo                   set/2023    *
 *-------------------------------------------------*
 *        Exemplos do uso de IF ENCADEADO          *
 *-------------------------------------------------*/
/**Para demonstração, utilizaremos a classificação 
 * do IMC (índice de Massa Corporal)
 * https://abeso.org.br/obesidade-e-sindrome-metabolica/calculadora-imc/
 */
var altura = 1.65;
var peso = 189.0
imcCalculado = peso / (altura * altura);;
var msgResultado;
if (imcCalculado < 16) {
    msgResultado = `Baixo peso muito grave "  ${imcCalculado}   kg/m²`;
} else if (imcCalculado >= 16 && imcCalculado <= 16.99) {
    msgResultado = `Baixo peso grave "  ${imcCalculado}   kg/m²`;
} else if (imcCalculado >= 17.00 && imcCalculado <= 18.49) {
    msgResultado = `Baixo peso "  ${imcCalculado}   kg/m²`;
} else if (imcCalculado >= 18.50 && imcCalculado <= 24.99) {
    msgResultado = `Peso Normal "  ${imcCalculado}   kg/m²`;
} else if (imcCalculado >= 25.00 && imcCalculado <= 29.99) {
    msgResultado = `Sobrepeso"  ${imcCalculado}   kg/m²`;
} else if (imcCalculado >= 30 && imcCalculado <= 34.99) {
    msgResultado = `Obesidade grau I "  ${imcCalculado}   kg/m²`;
} else if (imcCalculado >= 35.00 && imcCalculado <= 39.99) {
    msgResultado = `Obesidade grau II "  ${imcCalculado}   kg/m²`;
} else if (imcCalculado >= 40.00) {
    msgResultado = `Obesidade grau III "  ${imcCalculado}   kg/m²`;
}
console.log(msgResultado)
