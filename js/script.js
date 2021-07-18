let burger = document.querySelector(".burger");
let menu = document.querySelector(".menu");
let ul = menu.querySelector("ul");
let lis = ul.querySelectorAll("li");
let icons = menu.querySelector(".icons");

burger.addEventListener("click", function (e) {
    menu.classList.toggle("burgerMenu");
    ul.classList.toggle("burgerUl");
    for (let li of lis) {
        li.classList.toggle("burgerLi");
    }
    icons.classList.toggle("burgerIcons")

});

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

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


let loginBtns = document.querySelectorAll(".login-btn");
if(loginBtns[0] || loginBtns[1]) {
    loginBtns[0].addEventListener("click", showHideLogin);
    loginBtns[1].addEventListener("click", showHideLogin);
}

function showHideLogin() {
    let loginBox = document.querySelector("#login-box")
    if(loginBox.style.display === "none" || loginBox.style.display === "") {
        loginBox.style.display = "flex";
        loginBox.style.flexDirection = "column"
    } else {
        loginBox.style.display = "none";
    }
}


let gCardValue = document.getElementById("gCard-value");
if(gCardValue) {
    document.getElementById("gCard-value").addEventListener("change", getValue);

}


function getValue() {
    let selectedValue = document.getElementById("gCard-value").value;
    document.getElementById("gift-card-value").innerHTML = selectedValue;
};