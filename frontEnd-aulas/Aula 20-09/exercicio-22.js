// Mudar a cor de fundo de uma div
// Crie uma div com um ID.
// Adicione width: 200px; height: 100px; background-color: lightgray;
// // Ao clicar em um botão, a cor de fundo dessa div deve mudar para amarelo.


let mensagem = document.getElementById("mensagem")
let button = document.getElementById("btn")
let teste = document.getElementById("teste")

button.addEventListener("click",function(){
    mensagem.style.backgroundColor = "black"
    mensagem.style.color = "white"
    mensagem.innerText = "Texto alterado com sucesso!"
    teste.style.backgroundColor = "yellow"

})