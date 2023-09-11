function carregar(){
    var msg=window.document.getElementById("msg")
    var img=window.document.getElementById("imagem")
    var data=new Date()
    var hora = data.getHours()
    //hora=9
    msg.innerHTML=`Agora são ${hora} horas.`
    if (hora >=0 && hora < 12){
        //bom dia
        img.src = "img/manha_.png"
        document.body.style.background="#e2cd9f"
    } else if (hora >=12 && hora < 18){
        //boa tarde 
        img.src = "img/tarde_.png"
        document.body.style.background="#d38861"
    } else {
        //boa noite
        img.src = "img/noite_.png"
        document.body.style.background="#b9a3a9"
    }
}