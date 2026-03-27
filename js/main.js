const headline = document.querySelector("h1");

if (headline) {
  headline.addEventListener("click", changeColor);

  function changeColor() {
    headline.style.color = "red";
  }
}
