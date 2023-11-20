document.addEventListener("DOMContentLoaded", function () {
    // Função para obter parâmetros da URL
    function obterParametroDaURL(nome) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(nome);
    }

    // Obtém o nome e o preço do curso da URL
    const nomeDoCurso = obterParametroDaURL("curso");
    const precoDoCurso = obterParametroDaURL("preco");

    // Atualiza o conteúdo dos parágrafos com o nome e o preço do curso
    const paragrafoNomeDoCurso = document.querySelector("#nomeDoCurso");
    paragrafoNomeDoCurso.textContent = `Nome do Curso: ${nomeDoCurso || "Curso não especificado"}`;

    const paragrafoPrecoDoCurso = document.querySelector("#precoDoCurso");
    paragrafoPrecoDoCurso.textContent = `Preço: R$ ${precoDoCurso || "Preço não especificado"}`;
});