let burger = document.querySelector(".burger");
let menu = document.querySelector(".menu");
let ul = menu.querySelector("ul");
let lis = ul.querySelectorAll("li");
let icons = menu.querySelector(".icons")

burger.addEventListener("click", function (e) {
    menu.classList.toggle("burgerMenu");
    ul.classList.toggle("burgerUl");
    for (let li of lis) {
        li.classList.toggle("burgerLi");
    }
    icons.classList.toggle("burgerIcons")

});

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

window.addEventListener("resize", function () {
    if (vw > 800) {
        if (menu.classList.contains("burgerMenu")) {
            menu.classList.remove("burgerMenu");
            ul.classList.remove("burgerUl")
            for (let li of lis) {
                li.classList.remove("burgerLi");
            }
            icons.classList.remove("burgerIcons")
        }
    }
});
