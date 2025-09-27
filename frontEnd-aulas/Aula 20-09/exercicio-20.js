//Crie uma função chamada celsiusParaFahrenheit(celsius) que converta e retorne a temperatura em Fahrenheit.

function converte(celsiusParaFahrenheit){
    return (celsiusParaFahrenheit * 1.8) + 32
}

let result = converte(19)
console.log(`A temperatura em Fahrenheit é: ${result}°F`)