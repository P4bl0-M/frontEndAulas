////----------- ARRAYS -------------
//let frutas = ["Maçã", "Banana", "Melancia"]
// frutas.unshift("Laranja")  //Adicionar a fruta no começo
// frutas.push("Uva")  //Adicionar a fruta no final
// frutas.splice(2,0, "Abacaxi") // Adiciona na posição selecionada
// frutas.splice(1,1) // remove o item pelo indice
// frutas.pop() // remove o primeiro item
// frutas.shift() // remove o primeiro
//console.log(frutas.length)


// let frutas = ["Maçã", "Banana", "Melancia"]
// frutas.forEach(function(elemento, indice, arrayCompleto))

// let frutas = ["Maçã", "Banana", "Melancia"]
// frutas.forEach(function(fruta){
//     console.log(`Olá, ${fruta}`)
// })

// let nomes = ["Ana", "Bruno", "Matheus"]
// nomes.forEach(function(nome){
//     console.log(`Seja Bem-Vindo, ${nome}`)
// })

// nomes.forEach(nome =>{
//     console.log(`Seja Bem-Vindo, ${nome}`)
// })

//----------- MAP -------------

// let nomes = ["Ana", "Bruno", "Matheus"]

// let nomesMaiusculos = nomes.map(nome => {
//     return nome.toUpperCase()
// })

// console.log(nomesMaiusculos)

// let numeros = [3, 4, 55, 66, 70]
// let dobro = numeros.map(numero => numero * 2)
// console.log(dobro)

//----------- OBJETO -------------

// let pessoa = {
//     nome: "Pablo",
//     idade: 29,
//     profissao: "Estudante"
// }

// pessoa.email = "Tales@gmail.com"
// console.log(pessoa)

// setTimeout(() => {
//     console.log("Primeiro")
// }, 3000)
// console.log("Segundo")


// function assarPizza(callback){
//     setTimeout(() => {
//         console.log("🍕 Pizza Pronta!")
//         callback()
//     },3000)
// }
// function comerPizza(){
//     console.log("Comendo Pizza")
// }

// assarPizza(comerPizza)

// function pedirComida(callback){
//     setTimeout(() => {
//         console.log("Pedido pronto! 🍔")
//         callback()
//     },3000)
// }

// function comer(){
//     console.log("Comendo a comida!")
// }

// pedirComida(comer)

// function carregarProduto(callback){
//     setTimeout(() => {
//         console.log("Produto carregado com sucesso")
//         callback()
//     },3000)
// }

// function exibirProduto(){
//     console.log("Exibir detalhes do Produto")
// }

// carregarProduto(exibirProduto)

// function verificarIdade(callbackSuccess, callbackError){
//     setTimeout(() => {
//         let result = 18

//         if(result == 18){
//             callbackSuccess()
//         } else{
//             callbackError()
//         }

//     }, 3000);
// }

// function sucesso(){
//     console.log("Uhuuuuuul! Maior de Idade")
// }
// function erro(){
//     console.log("Oops! Menor de Idade")
// }

// verificarIdade(sucesso, erro)


// const pizzaChegou = true

// function chegou(){
//     console.log("Pizza Chegou!")
// }

// function cancelado(){
//     console.log("Pedido Cancelado")
// }

// function pedido(callbackSuccess, callbackError){
//     if(pizzaChegou == true){
//         callbackSuccess()
//     }else{
//         callbackError()
//     }
// }

// pedido(chegou, cancelado)

// let minhapomise = new Promise((resolve, reject) => {

//     let sucesso =  true //Simula cecessi ou erro

//     if(sucesso){
//         resolve("Operação concluida com sucesso")
//     }else{
//         reject("Erro ao processar a o,peração")
//     }
// })

// minhapomise
//     .then(() => console.log("Beleza"))
//     .catch(() => console.log("Xiiii deu ruim"))

const buscarUsuario = new Promise((resolve, reject) => {

    console.log("Buscando usuario no Banco...")

    setTimeout(() => {
        const encontrado = true

        if (encontrado) {
            resolve([{ nome: "Pablo", idade: 29 }, { nome: "Henrique", idade: 19}])
        } else {
            reject("Usuarios não encontrados")
        }
    }, 100)
})

buscarUsuario
    .then((res) => console.log(res))
    .catch(() => console.log())