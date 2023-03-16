const menuIcon = document.querySelector(".menu__icon");
const menu = document.querySelector(".menu__body");
menuIcon.addEventListener("click", () => {
    menu.classList.toggle("_active");
    menuIcon.classList.toggle("_active");
});
