const burger = document.querySelector('#burger');
burger?.addEventListener('click', function() {
    const menu = document.querySelector("#menu");
    menu.classList.toggle("hidden");
});

const mobileMenu = document.querySelector("#mobile");
mobileMenu?.addEventListener('click', function() {
    const sidebar = document.querySelector("#sidebar");
    sidebar.classList.toggle("-translate-x-full")
})

