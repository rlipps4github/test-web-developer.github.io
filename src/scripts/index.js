import '../styles/index.scss';
import { images } from './app.js';

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
    theGallery.classList.remove('mobile');  
    if (window.innerWidth < 600) theGallery.classList.add('mobile'); 
});

// BUILD THE GALLERY IMAGES

let imgHTML = '';
for (var img in images) {
    imgHTML += `
    <figure id="${img}" data-head="${images[img].heading}" data-desc="${images[img].description}">
        <div class="imageWrap"><img alt="${images[img].description}" src="public/${images[img].path}" /></div>
        <figcaption>${images[img].heading} - ${images[img].description}</figcaption>
    </figure>
    `;
}
theGallery.innerHTML = imgHTML;






