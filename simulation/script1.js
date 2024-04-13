const belt = document.getElementById("belt");
const animat0 = ["s1/belt3new.png", "s1/belt3new.png", "s1/belt4new.png"];
let frame = 0;
let intervalId;
let isAnimating = false; // Variable to track animation state

function animate() {
  belt.src = animat0[frame];
  frame = (frame + 1) % animat0.length;
}
function startAnimation(speed) {
  clearInterval(intervalId); // Clear any existing interval
  intervalId = setInterval(animate, speed); // Start animation with the specified speed
}

document.getElementById("animation1").addEventListener("click", function () {
  if (isAnimating) {
    clearInterval(intervalId); // Stop animation
    isAnimating = false;
    this.textContent = "Start Grind"; // Change button text
  } else {
    startAnimation(100); // Start animation with a speed of 1000 milliseconds (1 second)
    isAnimating = true;
    this.textContent = "Stop Grind"; // Change button text
  }
});
