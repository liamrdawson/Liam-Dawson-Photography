
//  SET UP LIGHTBOX TO DISPLAY SELECTED IMAGES - INCLUDE PREVIOUS / NEXT NAVIGATORS

const currentImg   = document.querySelector(`#current`);
const imagesGroup    = document.querySelectorAll(`.images img`);
const lightbox  = document.querySelector(`#lightbox`);
const arrowLeft = document.querySelector(`#arrow-left`);
const arrowRight = document.querySelector(`#arrow-right`);
const closeGal = document.querySelector(`.close-icon`);
const body = document.querySelector(`body`);
const bar1 = document.querySelector(`.bar-1`);
const bar2 = document.querySelector(`.bar-2`);

imagesGroup.forEach(img => img.addEventListener(`click`, imgClick));

function imgClick(e) {
    //  Change source of current image to clicked image
    currentImg.src = e.target.src;
     //  Reveal chosen image fullscreen
    lightbox.style.visibility = `visible`;
    body.style.overflow = `hidden`;
}


lightbox.addEventListener(`click`, clickOut);

function clickOut(e) {
    if (e.target === lightbox || e.target === closeGal || e.target === bar1 || e.target === bar2) {
        lightbox.style.visibility = `hidden`;
        body.style.overflow = `visible`;
    }
}