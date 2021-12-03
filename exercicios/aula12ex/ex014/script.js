function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom Dia
        img.src = 'images/dia.png'
        document.body.style.background = '#e4b764'
    } else if (hora >= 12 && hora < 18) {
        // BOA Tarde
        img.src = 'images/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //Boa Noite
        img.src = 'images/noite.png'
        document.body.style.background = '#515154'
    }
}

