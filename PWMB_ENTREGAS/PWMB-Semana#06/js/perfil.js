var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var nome = urlParams.get('nome');
var email = urlParams.get('email');

document.getElementById("nome").textContent = nome;
document.getElementById("email").textContent = email;
