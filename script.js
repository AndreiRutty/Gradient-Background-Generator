var background = document.getElementById("background");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var code = document.getElementById("css_code");
var copyBtn = document.getElementById("copy_btn");

function setColor() {
  background.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  code.textContent = "background: " + background.style.background + ";";
}

function copyCode(){
    var copyText = code.textContent
    navigator.clipboard.writeText(copyText);
    alert("Copied the text: " + copyText);
}

color1.addEventListener("input", setColor);
color2.addEventListener("input", setColor);

copyBtn.addEventListener("click", copyCode);
