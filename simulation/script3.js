// script3.js
const polish1 = document.getElementById("polish1");
const animat3 = ["s1/polishing1.png", "s1/polishing2.png", "s1/polishing3.png"];
let frame = 0;
let intervalId;
let isAnimating = false; // Variable to track animation state

function animate() {
  polish1.src = animat3[frame];
  frame = (frame + 1) % animat3.length;
}

function startAnimation(speed) {
  clearInterval(intervalId); // Clear any existing interval
  intervalId = setInterval(animate, speed); // Start animation with the specified speed
}

document.getElementById("animation3").addEventListener("click", function () {
  if (isAnimating) {
    clearInterval(intervalId); // Stop animation
    isAnimating = false;
    this.textContent = "Start Polish"; // Change button text
  } else {
    startAnimation(300); // Start animation with a speed of 300 milliseconds
    isAnimating = true;
    this.textContent = "Stop Polish"; // Change button text
  }
});
