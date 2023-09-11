//let num = document.getElementById("fnum")
let num = document.querySelector("input#fnum")
//let lista = document.getElementById("flista")
let lista = document.querySelector("select#flista")
//let res = document.getElementById("res")
let res = document.querySelector("div#res")
let valores=[]
//
function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML=""
    } else {
        window.alert(`Numero Informado (${num.value}) inválido (Deve ser entre 0 e 100 e não pode ser repetido)`)
    } 
    num.value = ""
    num.focus()   
 }
 function isNumero(n){
    if (Number(n) >=1 &&  Number(n)<=100){
        return  true
    } else{
        return false
    }
}
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true 
    } else {
        return false
    }
}
function finalizar(){
    if (valores.length==0){
        window.alert("Adicione valores antes de finalizar")
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos]> maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos] 

        }
        media = soma/tot
        res.innerHTML = ""
        res.innerHTML+=`<p>Ao todo, temos ${tot} elementos cadastrados</p>`
        res.innerHTML+=`<p>o maior valor informado foi  ${maior}</p>`
        res.innerHTML+=`<p>o menor valor informado foi  ${menor}</p>`
        res.innerHTML+=`<p>A soma dos valore   ${soma}</p>`
        res.innerHTML+=`<p>A Média dos valore   ${media}</p>`

    }
 }