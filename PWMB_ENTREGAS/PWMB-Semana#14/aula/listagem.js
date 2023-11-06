document.addEventListener('DOMContentLoaded', function () {
    const clientesJSON = localStorage.getItem('cliente');
    if (clientesJSON) {
        const clientes = JSON.parse(clientesJSON);
        const tabela = document.getElementById('tabela-clientes');
        clientes.forEach(cliente => {
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
            novaLinha.appendChild(nomeCell);
            novaLinha.appendChild(sobrenomeCell);
            novaLinha.appendChild(dataCell);
            novaLinha.appendChild(cidadeCell);
            novaLinha.appendChild(ufCell);
            novaLinha.appendChild(cepCell);
            novaLinha.appendChild(enderecoCell);
            novaLinha.appendChild(numeroCell);
            tabela.appendChild(novaLinha);
        });
    } else {
        alert('Nenhum cliente foi encontrado no Local Storage.');
    }
})