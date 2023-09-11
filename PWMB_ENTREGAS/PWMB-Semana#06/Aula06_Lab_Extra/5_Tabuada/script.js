var existe = false
function gerarTabuada(){
    var  num     = document.getElementById("txtnum")
    let areaTab = document.getElementById("seltab")

    if (num.value.length ==0){
        window.alert("por Favor, informe um numero")
    } else {
        /*
        <option value="v1" selected>Valor 1</option>
        <option value="v2"         >Valor 2</option>
        */
        let numeroDigitado = Number(num.value)
        let c = 1
        areaTab.innerHTML='' //Limpa a tabuada
        while (c <=10){
            let item = document.createElement("option")
            item.text = `${numeroDigitado} x ${c} = ${numeroDigitado * c}`
            item.value=`tab${c}`
            areaTab.appendChild(item)
            //c +=1
            c++
        }
        let res= document.querySelector("div#res")
        res.innerHTML=""
        let br = document.createElement("br")
        res.appendChild(br)
        let botao = document.createElement("button")
        botao.setAttribute("type","button")
        botao.setAttribute("onclick", "seleciona()")
        botao.appendChild(document.createTextNode("Seleciona"))
        
        res.appendChild(botao)
        existe = false
    }
}
function seleciona(){
    let selecao = document.getElementById("seltab")
    //console.log("o índice e:"+selecao.selectedIndex)
    if (selecao.selectedIndex<0) {
        window.alert("Selecione uma opçao")
    }// else {
     //   window.alert(`"o índice e:"${selecao.selectedIndex}`)
     //   window.alert(`"o Texto e:"${selecao.options[selecao.selectedIndex].text}`)
     //   window.alert(`"A CHAVE e:"${selecao.options[selecao.selectedIndex].value}`)
    //}
    let res= document.querySelector("div#res")
    
    let br = document.createElement("br")
    res.appendChild(br)
    
    if (Boolean(existe)){
        document.getElementById("xuxu").innerHTML=`Você seleconou ${selecao.options[selecao.selectedIndex].text}`          
    } else {
        let paragrafo = document.createElement("span")
        paragrafo.id="xuxu"
        paragrafo.innerHTML = `Você seleconou ${selecao.options[selecao.selectedIndex].text}`      
        res.appendChild(paragrafo)
        existe = true
    }
}
        
   