const menu = document.querySelector("[data-js=menu]");
const hamburguerMenu = document.querySelector("[data-js=hamburguer-menu]");

const activeMenuMobile = () => {
  menu.classList.add("menu-mobile");
  menu.classList.remove("menu-desktop");
}

hamburguerMenu.addEventListener("click", () => {
  activeMenuMobile();
});