// script3.js
const microscope = document.getElementById("microscope");
const animat8 = ["s3/m1.png", "s3/m2.png", "s3/m3.png"];
let frame = 0;
let intervalId;
let isAnimating = false; // Variable to track animation state

function animate() {
  microscope.src = animat8[frame];
  frame = (frame + 1) % animat8.length;
}

function startAnimation(speed) {
  clearInterval(intervalId); // Clear any existing interval
  intervalId = setInterval(animate, speed); // Start animation with the specified speed
}

document.getElementById("animation8").addEventListener("click", function () {
  if (isAnimating) {
    clearInterval(intervalId); // Stop animation
    isAnimating = false;
    this.textContent = "Observe the Microstructure"; // Change button text
  } else {
    startAnimation(400); // Start animation with a speed of 300 milliseconds
    isAnimating = true;
    this.textContent = "Stop"; // Change button text
  }
});
