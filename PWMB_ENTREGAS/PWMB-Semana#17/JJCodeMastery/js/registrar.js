function verificarSenha() {
    const senhaInput = document.getElementById("senha").value;
    const confirmaSenhaInput = document.getElementById("confirmaSenha").value;
    if (senhaInput === confirmaSenhaInput) {
        const nome = document.getElementById("nome").value;
        const cpf = document.getElementById("cpf").value;
        const email = document.getElementById("email").value;
        const telefone = document.getElementById("telefone").value;
        if (verificarCPFDuplicado(cpf)) {
            alert("Já existe um usuário com esse CPF.");
        } else {
            registrar(nome, cpf, email, telefone, confirmaSenhaInput);
        }
    } else {
        alert("As senhas não coincidem. Tente novamente.");
    }
}

function verificarCPFDuplicado(cpf) {
    const usuariosJSON = localStorage.getItem('usuario');
    if (usuariosJSON) {
        const usuarios = JSON.parse(usuariosJSON);
        return usuarios.some(usuario => usuario.cpf === cpf);
    }
    return false;
}

var usuarios = [];

function registrar(nome, cpf, email, telefone, confirmaSenhaInput) {
    const usuariosJSON = localStorage.getItem('usuario');
    if (usuariosJSON) {
        usuarios = JSON.parse(usuariosJSON); // Recupera os usuários existentes
    }

    // Verifica se o CPF já está cadastrado
    if (verificarCPFDuplicado(cpf)) {
        alert("Já existe um usuário com esse CPF.");
        return; // Interrompe o registro se o CPF estiver duplicado
    }

    const usuario = {
        nome: nome,
        cpf: cpf,
        email: email,
        telefone: telefone,
        senha: confirmaSenhaInput
    };

    usuarios.push(usuario); // Adiciona o novo usuário ao array existente

    // Atualiza os dados no localStorage
    const usuariosAtualizadosJSON = JSON.stringify(usuarios);
    localStorage.setItem('usuario', usuariosAtualizadosJSON);
}

function adicionarLocalStorage() {
    const usuariosJSON = JSON.stringify(usuarios);
    localStorage.setItem('usuario', usuariosJSON);
}
