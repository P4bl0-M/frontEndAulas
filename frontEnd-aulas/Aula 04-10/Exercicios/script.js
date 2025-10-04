let nome = document.getElementById("name")

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => nome.innerText = data[0].name)