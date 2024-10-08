/* Author@ chatGPT instead of using a component from the ui library choosed to use gpt instead
purposely added comments for understanding.*/

// Import the updateNavBar function from another file to handle navigation updates
import { updateNavBar } from "./tableNav6.js";

// Get the carousel container from the DOM
const carousel = document.getElementById('carousel');

// Initialize variables for touch event handling
let isTouching = false;  // Tracks if the user is currently touching the screen
let startX;              // Stores the starting X position of the touch
let currentIndex = 0;    // Tracks the current active slide (starting from 0)

// Get the total number of slides in the carousel
const totalItems = document.querySelectorAll('.carousel-item').length;

// Handle the 'touchstart' event when the user begins to swipe
carousel.addEventListener('touchstart', (e) => {
  isTouching = true;                // Mark that the user has started touching
  startX = e.touches[0].clientX;    // Capture the initial X coordinate of the touch
}, { passive: true });              // Use passive event listener to improve performance

// Handle the 'touchmove' event as the user moves their finger across the screen
carousel.addEventListener('touchmove', (e) => {
  if (!isTouching) return;          // If no touch is active, do nothing

  const x = e.touches[0].clientX;   // Capture the current X position of the touch
  const diffX = startX - x;         // Calculate the difference between the start and current positions

  // If the swipe distance is more than 50px to the left, go to the next slide
  if (diffX > 30) {
    nextSlide();                    // Call function to move to the next slide
    isTouching = false;             // End the touch event after moving to the next slide
  } 
  // If the swipe distance is more than 50px to the right, go to the previous slide
  else if (diffX < -30) {
    prevSlide();                    // Call function to move to the previous slide
    isTouching = false;             // End the touch event after moving to the previous slide
  }
}, { passive: true });              // Use passive event listener to improve performance

// Handle the 'touchend' event when the user lifts their finger off the screen
carousel.addEventListener('touchend', () => {
  isTouching = false;               // Reset the touch state as the user has stopped swiping
}, { passive: true });

// Function to move to the next slide
function nextSlide() {
  // Only move to the next slide if it's not the last one
  if (currentIndex < totalItems - 1) {
    currentIndex++;                              // Increment the current slide index
    updateNavBar(`c${currentIndex + 1}`);        // Update the navigation bar with the new slide number
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`; // Shift the carousel to the next slide
  }
}

// Function to move to the previous slide
function prevSlide() {
  // Only move to the previous slide if it's not the first one
  if (currentIndex > 0) {
    currentIndex--;                              // Decrement the current slide index
    updateNavBar(`c${currentIndex + 1}`);        // Update the navigation bar with the new slide number
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`; // Shift the carousel to the previous slide
  }
} 


export function goToSlide(slideId) {
  const slideNumber = parseInt(slideId.replace('c', ''), 10);

  if (slideNumber >= 1 && slideNumber <= totalItems) {
    currentIndex = slideNumber - 1; 
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  //   updateNavBar(slideId);  
  } else {
    console.error(`Invalid slideId: ${slideId}. Please pass a valid ID like 'c1', 'c2', etc.`);
  }
}