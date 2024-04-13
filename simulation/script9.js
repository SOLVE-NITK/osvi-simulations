// script3.js
const hardwell = document.getElementById("hardwell");
const animat9 = ["s3/hardness1.png", "s3/hardness2.png", "s3/hardness3.png"];
let frame = 0;
let intervalId;
let isAnimating = false; // Variable to track animation state

function animate() {
  hardwell.src = animat9[frame];
  frame = (frame + 1) % animat9.length;
}

function startAnimation(speed) {
  clearInterval(intervalId); // Clear any existing interval
  intervalId = setInterval(animate, speed); // Start animation with the specified speed
}

document.getElementById("animation9").addEventListener("click", function () {
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
