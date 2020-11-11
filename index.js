document.addEventListener('DOMContentLoaded', function() {

    const burger = document.querySelector(".header__hamburger")
    const nav = document.querySelector(".header__navigation")

    burger.addEventListener('click', function() {
        nav.classList.toggle("--open")
    })

});