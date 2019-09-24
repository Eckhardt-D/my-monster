const menuToggler = document.querySelector(".menu-toggler--mobile")
const menuContainer = document.querySelector(".menu-container")

menuToggler.onclick = function() {
  menuContainer.classList.toggle("hide")
}
