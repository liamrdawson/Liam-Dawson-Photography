
// ROTATE THE IMAGES ON INDEX.HTML

const hero1 = document.querySelector(`.hero1`);
const hero2 = document.querySelector(`.hero2`);
const hero3 = document.querySelector(`.hero3`);
const hero4 = document.querySelector(`.hero4`);
const hero5 = document.querySelector(`.hero5`);
const hero6 = document.querySelector(`.hero6`);

const images = [
    hero3, 
    hero2, 
    hero1,
]

const wideImages = [
    hero6, 
    hero5, 
    hero4,
]

let current = 0;
setInterval(function() {
    for (var i = 0; i < images.length; i++) {
        images[i].style.opacity = 0;
    }
    current = (current != images.length - 1) ? current + 1 : 0;
    images[current].style.opacity = 1;
}, 10000);

let wideCurrent = 0;
setInterval(function() {
    for (var i = 0; i < wideImages.length; i++) {
        wideImages[i].style.opacity = 0;
    }
    wideCurrent = (wideCurrent != wideImages.length - 1) ? wideCurrent + 1 : 0;
    wideImages[wideCurrent].style.opacity = 1;
}, 10000);