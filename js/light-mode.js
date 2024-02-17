const button = document.querySelector("input");
button.addEventListener("click", lightModeFunction);

function lightModeFunction() {
  var element = document.getElementById("*");
  element.classList.toggle("../css/light-mode.css");
}
