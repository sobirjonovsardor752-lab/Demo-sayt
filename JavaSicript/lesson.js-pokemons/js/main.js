let newlist = document.querySelector(".nav-list")



for (const poke of pokemons) {
    
    let newItem = document.createElement("li")
    let newImg = document.createElement("img")
    let newTitle = document.createElement("h3")

    newTitle.textContent = poke.name
    newImg.src = poke.img

    newItem.appendChild(newImg)
    newItem.appendChild(newTitle)
    newlist.appendChild(newItem)


    console.log(newItem)

}