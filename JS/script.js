const hero1 = document.querySelector(`.hero1`);
const hero2 = document.querySelector(`.hero2`);
const hero3 = document.querySelector(`.hero3`);
const images = [
    hero3, 
    hero2, 
    hero1,
]

let current = 0;
setInterval(function() {
    for (var i = 0; i < images.length; i++) {
        images[i].style.opacity = 0;
    }
    current = (current != images.length - 1) ? current + 1 : 0;
    images[current].style.opacity = 1;
}, 10000);