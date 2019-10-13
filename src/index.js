import {slides} from './JS/slideshow';
import {navSlideIn} from './JS/navSlideIn';
import {eventListeners} from './JS/gal';
import './SCSS/style.scss';

alert("HELLO FROM WEBPACK!");

navSlideIn();
setInterval(slides, 5000);
eventListeners();