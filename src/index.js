import _ from 'lodash';
import printMe from './print.js';
import './style.css'
import Icon from './icon.png';

const btn = document.createElement('button')
btn.classList.add('redcolor');
// btn.setAttribute('class','redcolor')

document.body.appendChild(btn)

console.log('Testing 12')


//Dropdown

document.querySelectorAll('.dropdown').forEach(dropdown => {
    const button = dropdown.querySelector('.dropbtn');
    const content = dropdown.querySelector('.dropdown-content');

    // Toggle visibility on button click
    button.addEventListener('click', () => {
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });

    // Optional: Show on hover
    dropdown.addEventListener('mouseenter', () => {
    content.style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', () => {
    content.style.display = 'none';
    });
});


//Carous
// script.js

let slideIndex = 0;
showSlides(slideIndex);

function showSlides(index) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    if (index >= slides.length) {
        slideIndex = 0;
    }
    if (index < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

function nextSlide() {
    showSlides(++slideIndex);
}

function prevSlide() {
    showSlides(--slideIndex);
}

function currentSlide(index) {
    slideIndex = index - 1;
    showSlides(slideIndex);
}

setInterval(() => {
    nextSlide();
}, 5000);



