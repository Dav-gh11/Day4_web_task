document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("menu-toggle").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    const menuParagraph = document.getElementById("menu-paragraph");
    menu.classList.toggle("show");
    menuParagraph.classList.toggle("show");
  });
});
