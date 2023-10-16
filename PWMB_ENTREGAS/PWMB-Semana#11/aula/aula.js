let nome = "João Vitor";
let lastName = "Lechinovski Teixeira";

function concatenarNome(name, lastName) {
    return `Olá ${name} ${lastName}, seja bem-vindo!`
}

console.log(concatenarNome(nome, lastName))


//2
let nomeCompleto = function(name, lastName) {
    return `Olá ${name} ${lastName}, seja bem-vindo!` 
}

console.log(nomeCompleto(nome, lastName))

//3
let marcaCarro = ['Ford', 'BMW', 'FIAT', 'AUDI', 'Volkswagen']

let mostrarArray = function() {
    marcaCarro.forEach(a => {
        console.log(a)
    })
}

mostrarArray();

//4
let frutas = ['Maçã', 'Banana', 'Ananás', 'Pitaya', 'Bergamota', 'Physalis']

let excluirFrutas = function(frutaExcluida) {
    frutas.shift(frutaExcluida)
}

frutas.forEach(a => {
    console.log(a)
})

excluirFrutas("Maçã")

frutas.forEach(element => {
    console.log(element)
});

//5

