// Escreva um programa em JavaScript que receba a idade de uma pessoa e informe o valor do ingresso de acordo com a seguinte tabela:
// Menores de 12 anos: R$ 10  
// Entre 12 e 17 anos: R$ 15  
// Entre 18 e 59 anos: R$ 30  
// A partir de 60 anos: R$ 20  
// Implemente a solução utilizando estruturas condicionais (if e else) para verificar a faixa etária e retornar o valor correto do ingresso.

//----RESOLUÇÃO----
let idade = prompt("Informe sua idade:")

if (idade <= 12){
    alert("O ingresso custa R$ 10")
}

else if (idade >=12 && idade <= 17){
    alert("O ingresso custa R$ 15")
}
else if (idade >=18 && idade <=59){
    alert("O ingresso custa R$ 30")
}
else {
    alert("O ingresso custa R$ 20")
}