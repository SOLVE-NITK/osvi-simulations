// script.js
const hand = document.getElementById("hand");
const images = ["hand1.png", "hand2.jpg", "hand3.jpg", "hand4.jpg"];
const animat0 = ["s1/belt1.png", "s1/belt3.png", "s1/belt4.png"];
const animat1 = ["s1/polishing1.png", "s1/polishing2.png", "s1/polishing3.png"]; // Example image sequence
let frame = 0;
let intervalId;
let isAnimating = false; // Variable to track animation state

function animate() {
  hand.src = images[frame];
  frame = (frame + 1) % images.length;
}

function startAnimation(speed) {
  clearInterval(intervalId); // Clear any existing interval
  intervalId = setInterval(animate, speed); // Start animation with the specified speed
}

document.getElementById("animation").addEventListener("click", function () {
  if (isAnimating) {
    clearInterval(intervalId); // Stop animation
    isAnimating = false;
    this.textContent = "Start Animation"; // Change button text
  } else {
    startAnimation(1000); // Start animation with a speed of 1000 milliseconds (1 second)
    isAnimating = true;
    this.textContent = "Stop Animation"; // Change button text
  }
});
