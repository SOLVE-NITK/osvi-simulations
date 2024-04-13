import project from "../project.json" assert { type: "json" };
import { dialogManager } from "./dialog.js";
import { Prop } from "./prop.js";

const CALLERS = {
  inlinequiz: document.getElementById("inline-quiz"),
  textelement: document.getElementById("text-element"),
  dialog: dialogManager,
};

function getDefaultAction(step) {
  return () => {
    const defaultActions = step.default.actions;
    defaultActions.forEach((action, index) => {
      // console.log("EXEC", action);

      // console.log("arrow", CALLERS["blinkingarrow"]);
      const caller = action[0];

      const method = action[1];

      const params = action[2];

      if (caller === "step") {
        const simulationcontainer = document.getElementById(
          "simulation-container"
        );

        simulationcontainer.setAttribute("data-step-completed", "true");
      } else if (CALLERS[caller]) {
        CALLERS[caller][method](params);
      }
    });
  };
}

function generateProps() {
  const steps = project.steps;
  const sceneProps = {};

  function transformcbactions(cbactions, propid, container) {
    return () => {
      cbactions.forEach((aciton) => {
        const caller = aciton[0];
        const method = aciton[1];
        const params = aciton[2];

        if (caller === "step") {
          const simulationcontainer = document.getElementById(
            "simulation-container"
          );

          simulationcontainer.setAttribute("data-step-completed", "true");
        }

        if (method === "=") {
          // apply the style instead of calling a function
          const ele = document.getElementById(propid);
          ele.style[caller] = params;
        } else if (CALLERS[caller]) {
          console.log(CALLERS[caller]);
          CALLERS[caller][method](params);
        } else {
          console.log(CALLERS, caller);

          // Caller would be assumed as a DOM Element
          // Then caller will be a prop
          const element = document.getElementById(caller);
          element.style[method] = params;
        }
      });
    };
  }

  steps.forEach((step, indexstep) => {
    // Setting up the step with default actions
    // Default actions should run at the start of it's step
    // It should be a callback
    sceneProps[step.name] = {};
    sceneProps[step.name].props = [];

    sceneProps[step.name].sequence = step.sequence || [];

    sceneProps[step.name].defaultActions = getDefaultAction(step);

    step.props.forEach((prop, indexprop) => {
      const container = document.getElementById(step.name);

      const classes = [
        ...((prop.classes && [...prop.classes, "prop"]) || ["prop"]),
      ];

      const propid = prop.id || `prop-${Math.ceil(Math.random() * 10000)}`;
      const pointofinterests = prop.pointofinterests;
      pointofinterests.forEach((poi) => {
        poi.id = poi.id;
        poi.cb = transformcbactions(poi.cb, propid, container);
      });
      const propinstance = new Prop(
        prop.image,
        prop.position,
        container,
        prop.dimensions,
        classes,
        pointofinterests,
        propid,
        prop.label
      );

      sceneProps[step.name].props.push(propinstance);
    });
  });

  return sceneProps;
}

export default generateProps;
