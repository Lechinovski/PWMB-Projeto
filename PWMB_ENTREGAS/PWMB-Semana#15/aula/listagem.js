document.addEventListener('DOMContentLoaded', function () {
    const clientesJSON = localStorage.getItem('cliente');
    if (clientesJSON) {
        const clientes = JSON.parse(clientesJSON);
        const tabela = document.getElementById('tabela-clientes');
        clientes.forEach((cliente, index) => {
            const novaLinha = document.createElement('tr');
            const nomeCell = document.createElement('td');
            nomeCell.innerHTML = `<span>${cliente.nome}</span>`;
            const sobrenomeCell = document.createElement('td');
            sobrenomeCell.innerHTML = `<span>${cliente.sobrenome}</span>`;
            const dataCell = document.createElement('td');
            dataCell.innerHTML = `<span>${cliente.data}</span>`;
            const cidadeCell = document.createElement('td');
            cidadeCell.innerHTML = `<span>${cliente.cidade}</span>`;
            const ufCell = document.createElement('td');
            ufCell.innerHTML = `<span>${cliente.uf}</span>`;
            const cepCell = document.createElement('td');
            cepCell.innerHTML = `<span>${cliente.cep}</span>`;
            const enderecoCell = document.createElement('td');
            enderecoCell.innerHTML = `<span>${cliente.endereco}</span>`;
            const numeroCell = document.createElement('td');
            numeroCell.innerHTML = `<span>${cliente.numero}</span>`;
            const acoes = document.createElement('td');

            // Adicionando botão Excluir
            const excluirButton = document.createElement('button');
            excluirButton.textContent = 'Excluir';
            excluirButton.onclick = function () {
                excluir(index, clientes); // Passando o índice como parâmetro
            };
            acoes.appendChild(excluirButton);

            // Adicionando espaço entre os botões
            acoes.appendChild(document.createElement('br'));

            // Adicionando botão Editar
            const editarButton = document.createElement('button');
            editarButton.textContent = 'Editar';
            editarButton.onclick = function () {
                editar(index, cliente, clientes); // Passando o índice como parâmetro
            };

            acoes.appendChild(editarButton);
            novaLinha.appendChild(nomeCell);
            novaLinha.appendChild(sobrenomeCell);
            novaLinha.appendChild(dataCell);
            novaLinha.appendChild(cidadeCell);
            novaLinha.appendChild(ufCell);
            novaLinha.appendChild(cepCell);
            novaLinha.appendChild(enderecoCell);
            novaLinha.appendChild(numeroCell);
            novaLinha.appendChild(acoes);
            tabela.appendChild(novaLinha);
        });
    } else {
        alert('Nenhum cliente foi encontrado no Local Storage.');
    }

    // Função para excluir cliente
    window.excluir = function (index, clientes) {
        alert('Excluir cliente na linha: ' + (index + 1));
        // Remove o cliente do array usando o método splice
        clientes.splice(index, 1);
        // Atualiza o array no Local Storage
        localStorage.setItem('cliente', JSON.stringify(clientes));
        // Recarrega a página para refletir as alterações
        location.reload();
    }

});