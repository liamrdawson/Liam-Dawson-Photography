
//  ANIMATE NAV SLIDER ANIMATIONS ON BURGER MENU CLICK

const navSlide = () => {
    const burger = document.querySelector(`.burger`);
    const nav = document.querySelector(`nav`);
    const navLinks = document.querySelectorAll(`nav ul li`);
    const body = document.querySelector(`body`);
    burger.addEventListener(`click`, () => {
        //      Toggle body scroll-y
        body.classList.toggle('scroll-y');
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