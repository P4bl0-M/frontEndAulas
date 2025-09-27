// Crie um programa que calcule o fatorial de um número. O fatorial de um número é o resultado de multiplicar todos os números inteiros de 1 até esse número.  

// Por exemplo, o fatorial de 5 é:  
// 5! = 5 × 4 × 3 × 2 × 1 = 120

let fatorial = 1
let n = prompt("Digite um numero")
for(let i = 1; i <= n; i++){
    fatorial *= i;
}

alert(`O fatorial de ${n} é: ${fatorial}`)