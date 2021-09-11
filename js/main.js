const site = (function() {
    const burgerMenu = document.querySelector(".burger-menu");

    const toggleMenu = () => {
        alert("test")
    }

    burgerMenu.addEventListener("click", toggleMenu);
})()