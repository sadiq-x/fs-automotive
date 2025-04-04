document.addEventListener("DOMContentLoaded", function () {
    // Menu responsivo
    const menuToggle = document.createElement("div");
    menuToggle.classList.add("menu-toggle");
    menuToggle.innerHTML = "☰";

    const nav = document.querySelector("header nav");
    if (nav) {
        nav.prepend(menuToggle);
    }

    const navLinks = document.querySelector(".nav-links");
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
