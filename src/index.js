import {slides} from './JS/slideshow';
import {navSlideIn} from './JS/navSlideIn';
import {eventListeners} from './JS/gal';
import '../CSS/style.css';

alert("HELLO FROM WEBPACK!");

navSlideIn();
setInterval(slides, 5000);
eventListeners();