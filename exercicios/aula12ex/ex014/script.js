function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `<p>Agora são ${hora} horas.</p>`

    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML += '<p><strong>Bom dia!</strong></p>'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
        msg.innerHTML += '<p><strong>Boa tarde!</strong></p>'
    } else {
        //BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
        msg.innerHTML += '<p><strong>Boa noite!</strong></p>'
    }
}
