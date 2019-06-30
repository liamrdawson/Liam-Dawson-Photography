
const currentImg   = document.querySelector(`#current`);
const imagesGroup  = document.querySelectorAll(`.images img`);

const lightbox  = document.querySelector(`#lightbox`);
const previous = document.querySelector(`#previous`);
const next = document.querySelector(`#next`);
const closeGal = document.querySelector(`.close-icon`);
const body = document.querySelector(`body`);
const bar1 = document.querySelector(`.bar-1`);
const bar2 = document.querySelector(`.bar-2`);

const arrayOfImages = [...imagesGroup];

imagesGroup.forEach(img => img.addEventListener(`click`, imgClick));

let indexOfCurrent = 0;



function imgClick(e) {

    indexOfCurrent = arrayOfImages.indexOf(e.target);

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
        body.style.overflowY = `visible`;
    }
}

previous.addEventListener(`click`, function() {
    indexOfCurrent--;
    currentImg.src = arrayOfImages[indexOfCurrent].src;
 });

next.addEventListener(`click`, function() {
   indexOfCurrent++;
    currentImg.src = arrayOfImages[indexOfCurrent].src;
});