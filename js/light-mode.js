const button = document.querySelector("input");
button.addEventListener("click", lightModeFunction);

function lightModeFunction() {
  var element = document.getElementById("*");
  if (button.lightMode = false) {
  element.classList.toggle("../css/light-mode.css");
    button.lightMode = true;
  }
  if (button.lightMode = true) {
  element.classList.toggle("../css/main.css");
    button.lightMode = false;
  }
}
