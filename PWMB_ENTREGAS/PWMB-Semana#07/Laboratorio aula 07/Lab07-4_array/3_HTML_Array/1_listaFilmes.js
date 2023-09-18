/**---------------------------------------------*
 *   SENAC - TADS - Programação Web             *                
*  Exemplo manipulacao de Array               *
*----------------------------------------------*/
/* 
https://exame.com/casual/mais-lidas-hollywood-elege-os-100-melhores-filmes-de-todos-os-tempos/
 */
var dadosDivx = document.getElementById('divx');
const listaFilmes = [
    "Os Sete Samurais (1954)",
    "Bonnie e Clyde - Uma Rajada de Balas (1967)",
    "Apertem os Cintos… O Piloto Sumiu (1980)",
    "Doutor Jivago (1965)",
    "Contatos Imediatos de Terceiro Grau (1977)",
    "Quem Quer Ser um Milionário? (2008)",
    "A Ponte do Rio Kwai (1957)"
]
function montaLista() {
    
    const divList = document.getElementById("divLista");
    
    const list = document.getElementById("list");
    const labelNomeFilme = document.createElement("p");
    labelNomeFilme.innerText = "Hollywood elege os 100 melhores filmes de todos os tempos ";
    document.getElementById("divx").appendChild(labelNomeFilme);
    for (i = 0; i < listaFilmes.length; i++) {
        list.innerHTML += `<li><a href="#">${list.children.length + 1} - ${listaFilmes[i]}</a></li>`;
    }
    



}