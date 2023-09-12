document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    
    if (email === 'seuemail@example.com' && senha === 'suasenha') {
        alert('Login bem-sucedido!'); 
    } else {
        alert('Credenciais inválidas. Tente novamente.'); 
    }
});

window.addEventListener('load', function() {
    let nome = window.prompt('Qual é o seu nome?');
    let res = document.getElementById('resultado');

    if (nome) {
        res.innerHTML = `<p>Olá, <strong>${nome}</strong>! Bem-vindo ao Curso PW do Senac! &#x1F596;</p>`;
    }
});
