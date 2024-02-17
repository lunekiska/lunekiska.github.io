const button = document.querySelector("input");
button.addEventListener("click", lightModeFunction);

function lightModeFunction() {
  var element = document.getElementById("*");
  if (button.lightMode = true) {
    return element.classList.toggle("../css/light-mode.css")
  }
  else return element.classList.toggle("../css/main.css");
}
