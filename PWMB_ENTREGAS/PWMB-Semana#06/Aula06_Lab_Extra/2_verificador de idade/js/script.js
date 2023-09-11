function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    //var res = document.getElementById("res")
    var res = document.querySelector("div#res")
    //if (fano.value.length == 0 || fano.value > ano){
    if (fano.value.length == 0 || Number(fano.value) > ano){    
        window.alert("Verifique os dados e tente novamente!")
    } else {
        var fsex= document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML=`Idade Calculada: ${idade}`
        var img=document.createElement("img")
        img.setAttribute("id","foto")
        var genero = ' '
        if  (fsex[0].checked){   
            genero= "Masculino"
            if (idade >=0 && idade <= 10){
               //criança
               img.setAttribute("src", "img/crianca_h.png")
            } else if (idade < 25) {
                //jovem
                img.setAttribute("src", "img/jovem_h.png")
            }   else if (idade < 60) {
                //Adulto
                img.setAttribute("src", "img/adulto_h.png")
            } else {
                //idoso
                img.setAttribute("src", "img/idoso_h.png")
            }
        } else {
            genero = "Femenino"
            //xxxxxxxxxxxxxxxxxxx
            if (idade >=0 && idade <= 10){
                //criança
                img.setAttribute("src", "img/crianca_m.png")
             } else if (idade < 25) {
                 //jovem
                 img.setAttribute("src", "img/jovem_m.png")
             }   else if (idade < 60) {
                 //Adulto
                 img.setAttribute("src", "img/adulto_m.png")
             } else {
                 //idoso
                 img.setAttribute("src", "img/idoso_m.png")
             }
            //xxxxxxxxxxxxxxxx
                } 
            res.style.textAlign="center"        
            res.innerHTML=`O genero:  ${genero}, com ${idade} anos  de idade`
            res.appendChild(img)
        }
    

}