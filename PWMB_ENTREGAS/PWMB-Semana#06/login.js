document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  var emailInput = document.getElementById("email").value;
  var senhaInput = document.getElementById("senha").value;

  window.location.href = "perfil.html?email=" + encodeURIComponent(emailInput);
});
