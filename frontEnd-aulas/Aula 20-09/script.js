// // ---- Primeira Abordagem ----

// let titulo = document.getElementById("titulo")
// console.log(titulo)
// //console.log(document.getElementById("titulo"))

// let paragrafo1 = document.getElementById("paragrafo1")
// console.log(paragrafo1)
// let paragrafo2 = document.getElementById("paragrafo2")
// console.log(paragrafo2)

// // ---- Segunda Abordagem ----

// // let paragrafo1 = document.getElementsByClassName("box")
// // console.log(paragrafo1[1])

// let img = document.getElementById("image")
// console.log(img)

// titulo.innerText = "Troquei"
// paragrafo1.innerText = "Novo teste"
// paragrafo2.innerText = "Novo teste2"
// img.src = "https://play-lh.googleusercontent.com/KSYtAoZi9-GPEvYBUkEvy422--IapW-8JLI7DfGeDE5IkXkp3bEILDOG4aqe2uIP7qxA"
// titulo.style.color = "red"
// titulo.style.fontSize = "30px"
// titulo.style.backgroundColor = "aqua"

// mensagem.style.color = "orange"
// mensagem.style.fontSize = "40px"
// mensagem.style.backgroundColor = "gray"
// mensagem.style.border = "2px solid black"


// let button = document.getElementById("btn")

// button.onclick = function(){
//     alert("Clicou")
//}
// let p = document.getElementById("mensagem")
// let button = document.getElementById("btn")

// button.addEventListener("click",function(){
//     p.style.backgroundColor = "black"
//     p.style.color = "white"

// })

//----------------Formulario
// let form = document.getElementById("meuFormulario")

// form.addEventListener("submit", function (e) {
//     e.preventDefault()
//     console.log("Formulario Enviado!")
// })

//----------------------------
document.addEventListener("keydown", function(e){
    alert(e.key)
})