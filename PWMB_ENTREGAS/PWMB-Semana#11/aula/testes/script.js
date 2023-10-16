function gentilico() {
    var txtpais = document.querySelector('input#txtpais');
    var pais = txtpais.value.toLowerCase(); // Converter para minúsculas
    
    var gentilicos = {
        'brasil': 'Brasileiro',
        'argentina': 'Argentino',
        'eua': 'Estadunidense',
        'peru': 'Peruense',
        'itália': 'Italiano',
        'frança': 'Francês',
        'república tcheca': 'Tcheco'
    };
    
    var res = document.querySelector('#res');

    if (gentilicos[pais]) {
        res.innerHTML = `<p>Você Nasceu em  <strong>${pais}</strong></p>`;
        res.innerHTML += `<p>Portanto você é <strong>${gentilicos[pais]}</strong></p>`;
    } else {
        res.innerHTML = `<p>Não existe este país na base de dados</p>`;
    }
}