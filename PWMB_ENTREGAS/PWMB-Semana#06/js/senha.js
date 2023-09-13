document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    var nome = new URLSearchParams(window.location.search).get("nome");
    var email = new URLSearchParams(window.location.search).get("email");
    
    var senhaInput = document.getElementById("senha").value;
    var confirmaSenhaInput = document.getElementById("confirmaSenha").value;

    if (senhaInput === confirmaSenhaInput) {
        window.location.href = "perfil.html?nome=" + encodeURIComponent(nome) + "&email=" + encodeURIComponent(email);
    } else {
        alert("As senhas não coincidem. Tente novamente.");
    }
});
