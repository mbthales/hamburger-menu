const hamburgerBtn = document.querySelector("[data-js=hamburger-btn]");
const closeMobileMenuBtn = document.querySelector("[data-js=close-mobile-menu-btn");
const mobileMenu = document.querySelector("[data-js=mobile-menu]");

const activateMenuMobile = () => {
  mobileMenu.classList.add("mobile-menu-active");
  mobileMenu.classList.remove("mobile-menu-disabled");
}

const disableMenuMobile = () => {
  mobileMenu.classList.add("mobile-menu-disabled");
  mobileMenu.classList.remove("mobile-menu-active");
}

hamburgerBtn.addEventListener("click", () => {
  activateMenuMobile();
});

closeMobileMenuBtn.addEventListener("click", () => {
  disableMenuMobile();
})