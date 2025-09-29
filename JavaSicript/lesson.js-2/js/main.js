var navdark = document.getElementById("navdunyo")
var buttonDark = document.getElementById("dark-mode")

function darkMode() { 
    navDark.classList.add("nav_dark")
    buttonDark.classList.add("button_dark")
 }
 
 function lightMode() { 
    navDark.classList.remove("nav_dark")
    buttonDark.classList.remove("button_dark")
  }


// function modes() { 
//     navDark.classList.toggle("nav_dark")
//     buttonDark.classList.toggle("light_mode")
//     document.body.classList.toggle("body_dark")
// }