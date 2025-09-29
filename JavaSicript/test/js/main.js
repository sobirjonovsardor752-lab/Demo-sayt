var number = 5
var son = document.getElementById("raqam")
var esemes = document.getElementById("esemes")


function numbers (){


    var timer = setInterval( function () {
        number--;
        son.innerHTML = number;

        if (number === 0) {
          clearInterval(timer); 
          esemes.innerHTML = "Poexali! 🚀";
        }
      }, 2000); 
    
}