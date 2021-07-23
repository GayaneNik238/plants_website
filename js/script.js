let burger = document.querySelector(".burger");
let menu = document.querySelector(".menu");
let ul = menu.querySelector("ul");
let lis = ul.querySelectorAll("li");
let icons = menu.querySelector(".icons");

let imagesSlider = [
    "url(images/1.jpg)",
    "url(images/2.jpg)",
    "url(images/3.jpg)"
]

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

let plantQnt = document.querySelector(".plant-quantity");
let shopPlantSize = document.getElementById("shop-plant-size-value");
shopPlantSize.addEventListener("change", getTotalValue);
plantQnt.addEventListener("input", getTotalValue);


function getTotalValue() {
    let selectedSize = document.getElementById("shop-plant-size-value").value;
    let selectedQnt = document.querySelector(".plant-quantity").value;
    if(selectedQnt !== "") {
        document.getElementById("shop-plant-size").innerHTML = `$ ${parseInt(selectedSize) * selectedQnt}.00`;
    } 
    else {
        document.getElementById("shop-plant-size").innerHTML = `$ ${selectedSize}.00`
    }
     if(selectedSize === "- Select Size -") {
        document.getElementById("shop-plant-size").innerHTML = "- Select Size ";
        document.querySelector(".plant-quantity").value = ""
    }
}

let sliderBg = document.querySelector(".shop-item-slider");
let prevBtn = document.querySelector(".prev-button");
let nextBtn = document.querySelector(".next-button");

let i = 0;
sliderBg.style.backgroundImage = imagesSlider[i];
sliderBg.style.backgroundRepeat = "no-repeat";
sliderBg.style.backgroundPosition = "center center";
sliderBg.style.backgroundSize = "cover";

nextBtn.addEventListener("click", function() {
    i++;
    if(i > imagesSlider.length - 1) {
        i = 0;
    }
    sliderBg.style.backgroundImage = imagesSlider[i];
})

prevBtn.addEventListener("click", function() {
    i--;
    if(i < 0) {
        i = imagesSlider.length - 1;
    }
    sliderBg.style.backgroundImage = imagesSlider[i];
})

