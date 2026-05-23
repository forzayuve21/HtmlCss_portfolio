'use strict';

const items = document.querySelector(".profile");

const keyframe = {
    opacity: [0,1]
};
const options = {
    duration: 600,
    fill: "forwards",
};

items.animate(keyframe, options);


// モーダル
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".modal-close");
const sliderImages = document.querySelectorAll(".slider-img");


sliderImages.forEach(img => {
    img.addEventListener("click", function() {
        modal.style.display = "flex"; 
        modalImg.src = this.src;     
    });
});

closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

modal.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});