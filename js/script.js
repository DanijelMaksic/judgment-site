// Carousel

const carousel = document.querySelector('.carousel');
const arrowLeft = document.querySelector('.arrow--left');
const arrowRight = document.querySelector('.arrow--right');
let images = document.querySelectorAll('.carousel-img');
let dots = document.querySelectorAll('.dot');

let currentIndex = 0;

// Left arrow click
arrowLeft.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    updateCarousel();
});

// Right arrow click
arrowRight.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > images.length - 1) {
        currentIndex = 0;
    }
    updateCarousel();
});

function updateCarousel() {
    images.forEach((image, index) => {
        if (index === currentIndex) {
            image.style.display = 'block';
            dots[index].classList.add('current--dot');
        } else {
            image.style.display = 'none';
            dots[index].classList.remove('current--dot');
        }
    });
}

// dot click

dots[0].addEventListener('click', () => {
    currentIndex = 0;

    images[0].style.display = 'block';
    images[1].style.display = 'none';
    dots[0].classList.add('current--dot');
    dots[1].classList.remove('current--dot');
    dots[2].classList.remove('current--dot');
});

dots[1].addEventListener('click', () => {
    currentIndex = 1;

    images[1].style.display = 'block';
    images[0].style.display = 'none';
    dots[1].classList.add('current--dot');
    dots[0].classList.remove('current--dot');
    dots[2].classList.remove('current--dot');
});

dots[2].addEventListener('click', () => {
    currentIndex = 2;

    images[2].style.display = 'block';
    images[1].style.display = 'none';
    dots[2].classList.add('current--dot');
    dots[0].classList.remove('current--dot');
    dots[1].classList.remove('current--dot');
});

// Mobile navigation

const menuBtn = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');
const navLogo = document.querySelector('.nav-logo');
const navItems = document.querySelectorAll('.nav-a');

menuBtn.addEventListener('click', () => {
    headerEl.classList.toggle('nav-open');
});

navLogo.addEventListener('click', () => {
    headerEl.classList.remove('nav-open');
});

navItems.forEach((item) => {
    item.addEventListener('click', () => {
        headerEl.classList.remove('nav-open');
    });
});

// modal images

const carouselImgEls = document.querySelectorAll('.carousel-img');

const modal = document.getElementById('myModal');

const img = document.getElementById('img1');
const modalImg = document.getElementById('img01');
const closeBtn = document.querySelector('.modal-close');

carouselImgEls.forEach((image) => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        closeBtn.style.display = 'block';

        modalImg.src = image.src;
        modalImg.alt = image.alt;
    });
});

const close = closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
