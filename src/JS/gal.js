
const currentImg   = document.querySelector(`#current`);
const imagesGroup  = document.querySelectorAll(`.images img`);

const lightbox  = document.querySelector(`#lightbox`);
const previous = document.querySelector(`#previous`);
const next = document.querySelector(`#next`);
const closeGal = document.querySelector(`.close`);
const body = document.querySelector(`body`);

const arrayOfImages = [...imagesGroup];

const imagesClick = () => {
    imagesGroup.forEach(img => img.addEventListener(`click`, imgClick));
}

imagesClick();

let indexOfCurrent = 0;

function imgClick(e) {
    indexOfCurrent = arrayOfImages.indexOf(e.target);
    //  Change source of current image to clicked image
    currentImg.src = e.target.src;
     //  Reveal chosen image fullscreen
    lightbox.style.visibility = `visible`;
    body.style.overflow = `hidden`;
}

const clickOut = (e) => {
    if (e.target === lightbox || e.target === closeGal) {
        lightbox.style.visibility = `hidden`;
        body.style.overflowY = `visible`;
    }
}

export const eventListeners = (e) => {
    if (lightbox) {
        lightbox.addEventListener(`click`, clickOut);
        previous.addEventListener(`click`, function() {
            indexOfCurrent--;
            currentImg.src = arrayOfImages[indexOfCurrent].src;
         });
         next.addEventListener(`click`, function() {
            indexOfCurrent++;
             currentImg.src = arrayOfImages[indexOfCurrent].src;
         });
    }
}