import '../styles/index.scss';
import { images } from './app.js';

console.log('webpack starterkit');

const theNav = document.querySelector('#nav');
const theNavBtn = document.querySelector('#navButton');
const theGallery = document.querySelector('#gallery');

// MOBILE NAV BUTTON



// MAIN NAV HOVER



// BUILD THE GALLERY IMAGES

let imgHTML = '';
for (var img in images) {
    imgHTML += `
    <div id="${img}" data-head="${images[img].heading}" data-desc="${images[img].description}">
        <img src="${images[img].path}" />
    </div>
    `;
}
theGallery.innerHTML = imgHTML;

// GALLERY HOVER




