// for (Inicio; condição; passo){

// }

// for (let i = 1; i <= 8; i++){
//     console.log(i)
// }

//----WHILE----

let senha = prompt("Informe sua senha: ")
let senhaCorreta = "abc"
let tentativas = 3

while (senha != senhaCorreta && tentativas > 0){
    tentativas--
    if(tentativas > 0){
        alert(`Senha incorreta, restam mais ${tentativas} tentativa(s)). `)
    
    }
    else{
        alert("Cartão Bloqueado")
    }
    senha = prompt("Informe sua senha: ")
}

if(senha == senhaCorreta){
    alert("Acesso permitido")
}