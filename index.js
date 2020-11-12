document.addEventListener('DOMContentLoaded', function() {

    const burger = document.querySelector(".header__hamburger")
    const nav = document.querySelector(".header__navigation")
    const btn = document.querySelectorAll(".posts__btn")

    burger.addEventListener('click', function() {
        nav.classList.toggle("--open")
    })

    btn.forEach(el => {
        el.addEventListener('click', function() {
            this.classList.toggle("open")
            this.previousElementSibling.classList.toggle("open")
            this.previousElementSibling.previousElementSibling.classList.toggle("open")
            if(this.classList.contains("open")) {
                this.innerText = "mniej >>"
            } else {
                this.innerText = "więcej >>"
            }
        })
    })

});