document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    var nomeInput = document.getElementById("nome").value;
    var emailInput = document.getElementById("email").value;

    window.location.href = "senhaRegistrar.html?nome=" + encodeURIComponent(nomeInput) + "&email=" + encodeURIComponent(emailInput);
});
