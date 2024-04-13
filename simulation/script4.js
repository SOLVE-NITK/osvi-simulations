// script3.js
const furnace = document.getElementById("furnace");
const animat4 = ["s3/furnace1.png", "s3/furnace2.png", "s3/furnace3.png"];
let frame = 0;
let intervalId;
let isAnimating = false; // Variable to track animation state

function animate() {
  furnace.src = animat4[frame];
  frame = (frame + 1) % animat4.length;
}

function startAnimation(speed) {
  clearInterval(intervalId); // Clear any existing interval
  intervalId = setInterval(animate, speed); // Start animation with the specified speed
}

document.getElementById("animation4").addEventListener("click", function () {
  if (isAnimating) {
    clearInterval(intervalId); // Stop animation
    isAnimating = false;
    this.textContent = "Place the sample"; // Change button text
  } else {
    startAnimation(400); // Start animation with a speed of 300 milliseconds
    isAnimating = true;
    this.textContent = "Stop the test"; // Change button text
  }
});
