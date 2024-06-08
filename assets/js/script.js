'use strict';

let lastScrollY = window.scrollY;
let shapes = [];

// Function to create a blurred purple shape
const createBlurredShape = function () {
  const shape = document.createElement('div');
  shape.classList.add('blurred-shape');
  const size = Math.floor(Math.random() * 100) + 50; // Random size between 50px and 150px
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  shape.style.width = size + 'px';
  shape.style.height = size + 'px';
  shape.style.top = y + 'px';
  shape.style.left = x + 'px';
  document.body.appendChild(shape);
  shapes.push(shape);
}

// Function to remove a single blurred shape
const removeBlurredShape = function () {
  const shape = shapes.shift();
  if (shape) {
    shape.style.opacity = '0'; // Fade out the shape
    setTimeout(() => {
      shape.remove(); // Remove the shape after fading out
    }, 500); // Adjust the fade-out duration as needed
  }
}

// Function to handle scroll event
const handleScroll = function () {
  const currentScrollY = window.scrollY;
  
  // Scroll down
  if (currentScrollY > lastScrollY) {
    createBlurredShape();
  }
  // Scroll up
  else if (currentScrollY < lastScrollY) {
    removeBlurredShape();
  }

  lastScrollY = currentScrollY;
}

// Attach scroll event listener
window.addEventListener('scroll', handleScroll);