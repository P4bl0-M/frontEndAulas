// Escreva um programa em JavaScript que determine a categoria de um atleta com base no seu peso, conforme a seguinte tabela:  
// Até 60 kg: Categoria "Leve"
// Até 110 kg: Categoria "Média"
// Acima de 110 kg: Categoria "Pesada"
// Implemente a solução utilizando estruturas condicionais (if e else) para classificar o atleta na categoria correta, dependendo do seu peso.

//----RESOLUÇÃO----
let peso = prompt("Informe seu peso:")

if (peso <= 60){
    alert("Sua categoria é LEVE")
}

else if (peso <= 110){
    alert("Sua categoria é MÉDIA")
}

else {
    alert("Sua categoria é PESADA")
}