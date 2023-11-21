var usuariosJSON = localStorage.getItem('usuario');

document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  if (email === 'admin@admin' && senha === 'admin') {
    window.location.href = "admin.html";
  } else {
    if (possuiCadastro(email, senha)) {
      const usuarios = JSON.parse(usuariosJSON);
      const usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);

      if (usuarioEncontrado) {
        window.location.href = "perfil.html?nome=" + encodeURIComponent(usuarioEncontrado.nome) + "&email=" + encodeURIComponent(email);
      } else {
        alert("Usuário não encontrado!");
      }
    } else {
      alert("NÃO CADASTRADO!");
    }
  }


});

function possuiCadastro(email, senha) {
  return usuariosJSON !== null;
}