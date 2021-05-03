import "../../../js/import/components.js";
import burgerButton from "../../components/burger-menu/burger-menu.js";

// UI Elements
const mobileMenu = document.querySelector(".mobile-menu");

// Event Listeners
burgerButton.addEventListener("click", function openMenu() {
  mobileMenu.classList.toggle("burger-clicked");
});
