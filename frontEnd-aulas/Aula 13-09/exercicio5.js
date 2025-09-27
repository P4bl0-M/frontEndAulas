// Escreva um programa em JavaScript que receba as notas de um aluno em 5 disciplinas e calcule a média final. Depois, o programa deve classificar a média de acordo com os seguintes critérios:  
// Média >= 9: "Excelente"  
// Média entre 7 e 9: "Bom"  
// Média entre 5 e 7: "Regular"  
// Média < 5: "Insuficiente"

//----RESOLUÇÃO----

let n1 = Number(prompt("Informe sua nota 1:"))
let n2 = Number(prompt("Informe sua nota 2:"))
let n3 = Number(prompt("Informe sua nota 3:"))
let n4 = Number(prompt("Informe sua nota 4:"))
let n5 = Number(prompt("Informe sua nota 5:"))

let media = (n1 + n2 + n3 + n4 + n5) / 5

if(media >= 9){
    alert("Excelente, sua média é: " + media)
}
else if(media >= 7 && media <= 9){
    alert("Bom, sua média é: " + media)
}
else if(media >= 5 && media <= 7){
    alert("Regular, sua média é: " + media)
}
else{
    alert("Insuficiente, sua média é: " + media)
}