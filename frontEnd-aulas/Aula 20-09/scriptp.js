// Exercício 1 – Mudar o texto de um parágrafo
// Crie um parágrafo com um ID e um botão.
// Quando o botão for clicado, o texto do parágrafo deve ser alterado para:
// "Texto alterado com sucesso!"


let mensagem = document.getElementById("mensagem")
let button = document.getElementById("btn")


button.addEventListener("click",function(){
    mensagem.style.backgroundColor = "black"
    mensagem.style.color = "white"
    mensagem.innerText = "Texto alterado com sucesso!"
    
})