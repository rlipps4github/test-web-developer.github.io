import '../styles/index.scss';
import { images } from './app.js';
import { carousel } from './carousel.js';

const theNav = document.querySelector('#nav');
const theNavBtn = document.querySelector('#navButton');
const theGallery = document.querySelector('#gallery');

// MOBILE NAV BUTTON

theNavBtn.addEventListener('click', (e) => {
    e.preventDefault();
    theNav.classList.toggle('expand');
    theNavBtn.classList.toggle('expand');
});

// FAKE AN ACTIVE NAV

theNav.addEventListener('click', (e) => {
    var elems = document.querySelector('.active');
    if(elems !==null) elems.classList.remove('active');
    if (e.target.tagName === 'A') e.target.parentNode.classList.add('active');
});

// RESIZE RESET

window.addEventListener('resize', () => {
    theNav.classList.remove('expand');
    theNavBtn.classList.remove('expand'); 
});

// BUILD THE GALLERY IMAGES

let imgHTML = '';
let imgIdx = 0;
for (let img in images) {
    let show = imgIdx === 0 ? 'showing' : '';
    let hide = imgIdx === 0 ? '' : 'hiding';
    imgHTML += `
    <figure id="${img}" class="${show}${hide}" data-head="${images[img].heading}" data-desc="${images[img].description}" data-idx="${imgIdx}">
        <div class="imageWrap"><img alt="${images[img].description}" src="public/${images[img].path}" /></div>
    </figure>
    `;
    imgIdx++;
}
theGallery.innerHTML = imgHTML;

// GALLERY CAROUSEL
  
  window.onload = () => carousel();







