
function deploySideBar () {
const menu = document.getElementsByClassName("menu");
let i;
for (i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", function() {
    var menuContainer = this.nextElementSibling;
    if (menuContainer.style.display === "block") {
      menuContainer.style.display = "none";
    } else {
      menuContainer.style.display = "block";
    }
  });
}
}
export default deploySideBar  