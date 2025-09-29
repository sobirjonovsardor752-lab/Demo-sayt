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













let navlist = document.querySelector(".nav-list2")




for (const kino of kinolar) {

    let newItem = document.createElement("li")
    let newYear = document.createElement("p")
    let newTitle = document.createElement("h1")
    let newCast = document.createElement("h5")


    newTitle.textContent = kino.title
    newYear.textContent = kino.year
    newCast.textContent = kino.cast


    newItem.appendChild(newTitle)
    newItem.appendChild(newYear)
    newItem.appendChild(newCast)
    navlist.appendChild(newItem)


    console.log(newItem)
}