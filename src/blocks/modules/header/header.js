// UI Elements
const mobileMenu = document.querySelector(".mobile-menu");
const burgerButton = document.querySelector(".burger");

// Event Listeners
burgerButton.addEventListener("click", function openMenu() {
  mobileMenu.classList.toggle("burger-clicked");
});
