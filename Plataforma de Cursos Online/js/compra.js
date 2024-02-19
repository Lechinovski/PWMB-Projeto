document.addEventListener("DOMContentLoaded", function () {

    function obterParametroDaURL(nome) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(nome);
    }


    const nomeDoCurso = obterParametroDaURL("curso");
    const precoDoCurso = obterParametroDaURL("preco");


    const paragrafoNomeDoCurso = document.querySelector("#nomeDoCurso");
    paragrafoNomeDoCurso.textContent = `Nome do Curso: ${nomeDoCurso || "Curso não especificado"}`;

    const paragrafoPrecoDoCurso = document.querySelector("#precoDoCurso");
    paragrafoPrecoDoCurso.textContent = `Preço: R$ ${precoDoCurso || "Preço não especificado"}`;
});