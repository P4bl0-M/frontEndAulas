// Se o sinal estiver verde
// >Pode passar

// senão
// >Não pode

// if(condição){

// }
// *----- Exemplo Semáforo-----*

// let sinal = "verde"
// if(sinal == "verde"){
//     console.log("Pode passar")
// }

// // else if(sinal == "amarelo"){
// //     console.log("Atenção")
// // }

// else{
//     console.log("Não pode passar")
// }


// let sinal = "vermelho"

// if(sinal == "verde"){
//     console.log("Pode passar! 🏁🟢")
// }

// else if (sinal == "amarelo"){
//     console.log("Atenção!‼️🟡")
// }

// else {
//     console.log("Pare! 🔴🤚")
// }

// *----- Exemplo Nota-----*

// let nota = 8

// if (nota > 5){
//     console.log("Aprovado")
// }

// else{
//     console.log("Reprovado")
// }


// *----- Exemplo Habilitação-----*

// let idade = 17
// let temCarteira = true

// if(idade >=18 && temCarteira == true){
//     console.log("Pode dirigir 🚗")
// }

// else{
//     console.log("Não pode dirigir 🚓🚨")
// }

// let senha = prompt("Informe sua senha:")

// if (senha == "123"){
//     alert("Senha correta")
// }

// else {
//     alert("Senha Incorreta")
// }

// *----- Exemplo Switch-----*

let dia = 3

switch (dia){
    case 1: 
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda")
        break
    case 3:
        console.log("Terça")
        break
    case 4:
        console.log("Quarta")
        break
    case 5:
        console.log("Quinta")
        break
    case 6:
        console.log("Sexta")
        break
    case 7:
        console.log("Sabado")
        break

    default:("Opção invalida")

}