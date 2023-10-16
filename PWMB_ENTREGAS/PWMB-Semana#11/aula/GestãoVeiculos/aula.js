let contadorExemplo=0;
//
/*
 */
var dadosDivx = document.getElementById('divx');
const listaVeiculos = [
  { fabricante: "Ford", modelo: "Ranger" },
  { fabricante: "Ford", modelo: "Maverick" },
  { fabricante: "Ford", modelo: "F-150" },
  { fabricante: "Ford", modelo: "Territory" },
  { fabricante: "BMW", modelo: "iX3 M Sport" },
  { fabricante: "BMW", modelo: "xDrive50" },
  { fabricante: "BMW", modelo: "320I 16V Turbo  " },
  { fabricante: "Fiat", modelo: "Pulse" },
  { fabricante: "Fiat", modelo: "Mobi" },
  { fabricante: "Fiat", modelo: "500e" },
  { fabricante: "Audi", modelo: "A3" },
  { fabricante: "Audi", modelo: "Q8" },
  { fabricante: "Audi", modelo: "Rs6" },
  { fabricante: "Audi", modelo: "A1" },
  { fabricante: "VolksWagen", modelo: "Polo" },
  { fabricante: "VolksWagen", modelo: "Nivus" },
  { fabricante: "VolksWagen", modelo: "Virtus" },
  { fabricante: "VolksWagen", modelo: "Voyage" },
  { fabricante: "VolksWagen", modelo: "Gol" }
]
function montaLista() {
   
  let { fabricante, modelo } = listaVeiculos;
  const list = document.getElementById("list");
  const labelNomeFilme = document.createElement("p");
  labelNomeFilme.innerText = "Concessionária de Veículos ";
  document.getElementById("divx").appendChild(labelNomeFilme);
  listaVeiculos.forEach((veiculo, indice) => {
    list.innerHTML += `<li><a href="#">${list.children.length + 1} - ${veiculo.fabricante} - ${veiculo.modelo}</a></li>`;
  })
}
function recarregarAPagina(){
  window.location.reload();
} 