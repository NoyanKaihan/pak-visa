const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

document.getElementById("menu-toggle").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
});
