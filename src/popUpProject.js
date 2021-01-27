function popupProject() {
  const popUp = document.getElementById("pop-up");
  const btn = document.getElementById("projectBtn");
  const span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    popUp.style.display = "block";
  }

  // When the user clicks on <span> (x), close the popUp
  span.onclick = function () {
    popUp.style.display = "none";
  }

  // When the user clicks anywhere outside of the popUp, close it
  window.onclick = function (event) {
    if (event.target == popUp) {
      popUp.style.display = "none";
    }
  }
}
export default popupProject
