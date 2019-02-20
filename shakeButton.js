var turOffAnimation = document.querySelector('button')
var addOpinion = true;
var counter = document.querySelector(".section-right p:first-child");
var number = document.querySelector(".section-right p:first-child").innerHTML;

var clickButton = document.querySelector("button");
clickButton.addEventListener("click", function () {
    if (addOpinion == true) {
        number++;
        counter.textContent = number;
        addOpinion = false;
    }
    if (addOpinion == false) {
        turOffAnimation.style.animation = 'disable';
    }
})