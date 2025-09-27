// Ao pressionar as teclas "r", "g" ou "b", mude a cor de fundo da página para vermelho, verde ou azul, respectivamente.

document.addEventListener("keydown", function(e){
    switch(e.key){
        case 'r': 
        document.body.style.backgroundColor = "red"
        break
        case 'g': 
        document.body.style.backgroundColor = "green"
        break
        case 'b': 
        document.body.style.backgroundColor = "blue"
        break
    }
})