
//  SET UP LIGHTBOX TO DISPLAY SELECTED IMAGES - INCLUDE PREVIOUS / NEXT NAVIGATORS

const current   = document.querySelector(`#current`);
const images    = document.querySelectorAll(`.images img`);
const lightbox  = document.querySelector(`#lightbox`);
const arrowLeft = document.querySelector(`#arrow-left`);
const arrowRight = document.querySelector(`#arrow-right`);
const closeGal = document.querySelector(`.close-icon`);

images.forEach(img => img.addEventListener(`click`, imgClick));

function imgClick(e) {
    //  Change source of current image to clicked image
    current.src = e.target.src;
     //  Reveal chosen image fullscreen
    lightbox.style.visibility = `visible`;
}

lightbox.addEventListener(`click`, clickOut);

function clickOut(e) {
    if (e.target === lightbox || e.target === closeGal) {
        lightbox.style.visibility = `hidden`;
    }
}











//  ANIMATE NAV SLIDER ANIMATIONS ON BURGER MENU CLICK

const navSlide = () => {
    const burger = document.querySelector(`.burger`);
    const nav = document.querySelector(`nav`);
    const navLinks = document.querySelectorAll(`nav ul li`);
    burger.addEventListener(`click`, () => {
        //  Toggle NAV
        nav.classList.toggle(`active`);
        //  Fade links on reveal
        navLinks.forEach( (link, index) => {
            if (link.style.animation) {
                link.style.animation = ``;
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + .8}s`;
            }
        });
        //  Burger to X animation
         burger.classList.toggle(`toggle`);
    });
}

navSlide();