let image = document.getElementById("image")
let btn = document.getElementById("btn")

btn.addEventListener("click",() => {

fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => {
        console.log(data[0])
        image.innerText = data[0]
    })

})