const buttonHamburger = document.querySelector(".nav--hamburger");
const elementNavLinks = document.getElementsByClassName("nav--links");

buttonHamburger.addEventListener("click", () => {
    if (elementNavLinks[0].style.display === "block") {
        elementNavLinks[0].style.display = "none";
    } else {
        elementNavLinks[0].style.display = "block";
    }
});

window.addEventListener("resize", () => {
    let width = window.innerWidth;

    if (width <= 600) {
        elementNavLinks[0].style.display = "none";
    } else {
        elementNavLinks[0].style.display = "block";
    }
});
