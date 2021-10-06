var img = document.createElement("img");
img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";
var src = document.getElementById("container");
src.appendChild(img);

var btn = document.getElementById("icon");
btn.addEventListener("click", () => {
  src.style.display = "none";
});
