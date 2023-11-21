const parametros = new URLSearchParams(window.location.search);
const nome = parametros.get('nome');
const email = parametros.get('email');

if (nome && email) {
    document.getElementById("nome").textContent = nome;
    document.getElementById("email").textContent = email;
    var caminhoDaImagem = 'fotoperfil.png';
    var imagem = document.getElementById('foto');
    imagem.src = caminhoDaImagem;
}