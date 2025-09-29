let newlist = document.querySelector(".nav-list")




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
    newlist.appendChild(newItem)


    console.log(newItem)
}