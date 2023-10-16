
function calcularQuadrado() {
    const informaResultado = document.querySelector("#informaResultado");
    var txtNumero = window.document.querySelector('input#txtNumero')
    var numero = Number(txtNumero.value)
}

function quadrado(numero) {
    var resposta = numero * numero;
    return resposta;
}

function verificarNumero(numero) {
    if (numero > 0) {
        informaResultado.innerHTML = `<p>O quadrado de ${numero} é: ${quadrado(numero)}</p>`
    } else {
        window.alert("Não é possivel fazer, informe um valor maior que 0")
    }
}
