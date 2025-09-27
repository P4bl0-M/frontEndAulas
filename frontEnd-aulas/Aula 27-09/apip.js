let nome = document.getElementById("nome")
let username = document.getElementById("username")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let street = document.getElementById("street")
let city = document.getElementById("city")
let companyName = document.getElementById("companyName")

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
        console.log(data[0])
        nome.innerText = data[0].name
        username.innerText = data[0].username
        email.innerText = data[0].email
        phone.innerText = data[0].phone
        street.innerText = data[0].address.street
        city.innerText = data[0].address.city
        companyName.innerText = data[0].company.name
    })