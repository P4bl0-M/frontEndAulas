// Crie um programa em JavaScript que utilize a estrutura switch para exibir o nome do mês com base no número informado pelo usuário (de 1 a 5). O programa deve funcionar da seguinte forma:
// 1: Janeiro
// 2: Fevereiro
// 3: Março
// 4: Abril
// 5: Maio
// Qualquer outro número: "Mês inválido"
// Exemplo de uso:

// Se o usuário digitar 3, o programa deve exibir:
// "Março"

// Implemente a solução utilizando apenas a estrutura switch.

//----RESOLUÇÃO-----

let mes = Number(prompt("Digite o numero do mês:"))

switch (mes){
    case 1: 
        alert("Janeiro")
        break
    case 2:
         alert("Fevereiro")
        break
    case 3:
         alert("Março")
        break
    case 4:
         alert("Abril")
        break
    case 5:
         alert("Maio")
        break
    case 6:
         alert("Junho")
        break
    case 7:
         alert("Julho")
        break

    default:alert("Opção invalida")
    
}