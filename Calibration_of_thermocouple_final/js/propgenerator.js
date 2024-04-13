import project from "./project.json" assert { type: "json" };
import { dialogManager } from "./dialog.js";
import { Prop } from "./prop.js";

const CALLERS = {
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
        console.log("STEP", caller, method, params);
        const simulationcontainer = document.getElementById(
          "simulation-container"
        );
        simulationcontainer.setAttribute("data-step-completed", "true");
      } else if (CALLERS[caller]) {
        console.log(CALLERS[caller], method);
        CALLERS[caller][method](params);
      }
    });
  };
}

function generateProps() {
  const steps = project.steps;
  const sceneProps = {};

  function transformcbactions(cbactions, propid, container) {
    console.log("CB", cbactions);
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
          console.log("EQUALS", caller, method, params);
          // apply the style instead of calling a function
          const ele = document.getElementById(propid);
          ele.style[caller] = params;
        } else if (CALLERS[caller]) {
          if (caller === "dialog") {
            setTimeout(() => {
              CALLERS[caller][method](params);
            }, 1200);
          } else {
            CALLERS[caller][method](params);
          }
        } else {
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

    sceneProps[step.name].defaultActions = getDefaultAction(step);

    step.props.forEach((prop, indexprop) => {
      const container = document.getElementById(step.name);

      const classes = prop.classes;

      const propid = prop.id || `prop-${Math.ceil(Math.random() * 10000)}`;
      const pointofinterests = prop.pointofinterests;
      pointofinterests.forEach((poi) => {
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
