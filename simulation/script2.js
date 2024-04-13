const polish = document.getElementById("polish");
const animat1 = ["s1/polishing1.png", "s1/polishing2.png", "s1/polishing3.png"];
let frame = 0;
let intervalId;
let isAnimating = false; // Variable to track animation state

function animate() {
  polish.src = animat1[frame];
  frame = (frame + 1) % animat1.length;
}
function startAnimation(speed) {
  clearInterval(intervalId); // Clear any existing interval
  intervalId = setInterval(animate, speed); // Start animation with the specified speed
}

document.getElementById("animation2").addEventListener("click", function () {
  if (isAnimating) {
    clearInterval(intervalId); // Stop animation
    isAnimating = false;
    this.textContent = "Start Polish"; // Change button text
  } else {
    startAnimation(300); // Start animation with a speed of 1000 milliseconds (1 second)
    isAnimating = true;
    this.textContent = "Stop Polish"; // Change button text
  }
});
