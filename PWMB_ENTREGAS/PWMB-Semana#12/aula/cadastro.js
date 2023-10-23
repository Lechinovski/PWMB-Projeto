
document.addEventListener('DOMContentLoaded', function () {
    // Função para preencher o campo 'uf' com as opções dos estados do Brasil
    function populateStates() {
        const states = [
            { value: 'AC', label: 'AC - Acre' },
            { value: 'AL', label: 'AL - Alagoas' },
            { value: 'AP', label: 'AP - Amapá' },
            { value: 'AM', label: 'AM - Amazonas' },
            { value: 'BA', label: 'BA - Bahia' },
            { value: 'CE', label: 'CE - Ceará' },
            { value: 'DF', label: 'DF - Distrito Federal' },
            { value: 'ES', label: 'ES - Espírito Santo' },
            { value: 'GO', label: 'GO - Goiás' },
            { value: 'MA', label: 'MA - Maranhão' },
            { value: 'MT', label: 'MT - Mato Grosso' },
            { value: 'MS', label: 'MS - Mato Grosso do Sul' },
            { value: 'MG', label: 'MG - Minas Gerais' },
            { value: 'PA', label: 'PA - Pará' },
            { value: 'PB', label: 'PB - Paraíba' },
            { value: 'PR', label: 'PR - Paraná' },
            { value: 'PE', label: 'PE - Pernambuco' },
            { value: 'PI', label: 'PI - Piauí' },
            { value: 'RJ', label: 'RJ - Rio de Janeiro' },
            { value: 'RN', label: 'RN - Rio Grande do Norte' },
            { value: 'RS', label: 'RS - Rio Grande do Sul' },
            { value: 'RO', label: 'RO - Rondônia' },
            { value: 'RR', label: 'RR - Roraima' },
            { value: 'SC', label: 'SC - Santa Catarina' },
            { value: 'SP', label: 'SP - São Paulo' },
            { value: 'SE', label: 'SE - Sergipe' },
            { value: 'TO', label: 'TO - Tocantins' }
        ];

        const selectElement = document.getElementById('uf');

        states.forEach(state => {
            const option = document.createElement('option');
            option.value = state.value;
            option.text = state.label;
            selectElement.appendChild(option);
        });
    }

    // Chame a função para preencher as opções de estados ao carregar a página
    populateStates();

    document.getElementById('cep').addEventListener('keyup', function (event) {
        if (event.key === 'Enter') {
            const cep = document.getElementById('cep').value;
            const url = `https://viacep.com.br/ws/${cep}/json/`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    if (data.erro) {
                        alert('CEP não encontrado. Verifique o CEP digitado.');
                    } else {
                        document.getElementById('cid').value = data.localidade;
                        document.getElementById('end').value = data.logradouro;
                    }
                })
                .catch(error => {
                    console.error('Ocorreu um erro ao buscar o CEP:', error);
                });
        }
    });

    document.getElementById("salvar").addEventListener('click', function () {
        const nome = document.getElementById("nom").value;
        const sobrenome = document.getElementById("sob").value;
        const dadosSalvos = document.getElementById("dados-salvos");
        const valorFormNomeUsuario = document.getElementById("valor_form_nome_usuario");
        valorFormNomeUsuario.textContent = nome + " " + sobrenome;
        dadosSalvos.style.display = "block";
    });

});