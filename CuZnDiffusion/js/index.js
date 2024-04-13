console.log(window);

const sampleimage =
  "https://easydrawingguides.com/wp-content/uploads/2020/04/how-to-draw-a-mason-jar-featured-image-1200.png";
import { Prop } from "./prop.js";
const simulation = document.querySelector(".simulation");

import { sceneProps } from "./props.js";
import { dialogManager } from "./dialog.js";
import Sequence from "./sequence.js";

const textelement = document.getElementById("text-element");

// console.log(BlinkingArrow);
// Get the total number of steps dynamically
const totalSteps = document.querySelectorAll(".step").length;
let currentStep = 0;

// Callback function that gets triggered when the current step changes
let stepChangeCallback = function (step) {
  // Initially disable the next step
  const simulationcontainer = document.getElementById("simulation-container");

  simulationcontainer.setAttribute("data-step-completed", "false");

  // Then run the default actions
  sceneProps[`step${step}`].defaultActions();

  // Sequence by which animations should play
  const rawSequence = sceneProps[`step${step}`].sequence;

  const props = sceneProps[`step${step}`]?.props || [];

  textelement.close();

  if (props) {
    props.forEach((prop) => {
      // Displaying every prop in the scene one by one
      prop.display();

      setTimeout(() => {
        prop.show();
      });
    });
  }

  const sequence = new Sequence(rawSequence);

  // Once all the props is in the scene
  // Start the sequence

  sequence.play();
};

function setStep(step) {
  const steps = document.querySelectorAll(".step");
  steps.forEach((stepElement, index) => {
    if (index === step) {
      // Adjusting for 0-based index
      stepElement.style.display = "block";
      stepElement.style.position = "relative"; // Set position to relative for the current step
    } else {
      stepElement.style.display = "none";
      stepElement.style.position = "absolute";
    }
  });

  // Trigger the callback function
  stepChangeCallback(step);
}

function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    setStep(currentStep);
  }
}

function nextStep() {
  if (currentStep < totalSteps) {
    currentStep++;
    setStep(currentStep);
  }
}

// Set the callback function to be executed when the step changes
function setStepChangeCallback(callback) {
  stepChangeCallback = callback;
}

// Show the initial step
setStep(currentStep);

////////////// DIALOG FUNCTIONS
const handleDialogClose = (e) => {
  dialogManager.closeDialog();
};

/////
const nextBtn = document.getElementById("nextBtn");
nextBtn.addEventListener("click", nextStep);
