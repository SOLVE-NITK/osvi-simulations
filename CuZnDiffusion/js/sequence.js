const ActionTypes = {
  Animation: "ANIMATION",
  Scene: "NEXT-SCENE",
  Interaction: "INTERACTION",
  Element: "ELEMENT",
};

const Elements = {
  inlinequiz: document.getElementById("inline-quiz"),
  textelement: document.getElementById("text-element"),
  dialog: dialogManager,
};

const SceneElements = {
  Next: document.getElementById(""),
  SimulationContainer: document.getElementById("simulation-container"),
};

// Sequence is a interactive timeline
class Sequence {
  // sequence raw data will be provided i.e. from project.json
  constructor(sequence) {
    this.sequence = sequence;
    this.frames = this.parseSequence(sequence);
    this.time = 0;
  }

  // Actions can consists of
  // - Moving an image from a position to another
  // - Updating lit components states
  // - Actions are blocking sychronous i.e. it blocks the very next action until it completes
  // - Blocks moving to next step

  // For playing the current frame
  async play() {
    for (let i = 0; i < this.frames.length; i++) {
      const frame = this.frames[i];
      const action = frame.action;

      await action();
    }
  }

  // Provide a buffer for the next animation to play
  getAbsoluteTimeFromDuration(duration) {
    const time = this.time + duration;
    this.time += duration;
    return time;
  }

  parseSequence(sequence) {
    const parsedSequence_ = [];

    sequence.forEach((frame) => parsedSequence_.push(this.parseFrame(frame)));

    return parsedSequence_;
  }

  parseFrame(frame) {
    const propid = frame.propid;
    let parsedAction = null;
    const action = frame.action;

    switch (action.type) {
      case ActionTypes.Animation:
        parsedAction = () =>
          new Promise((resolve) => {
            this.animate(
              action.context,
              action.duration,
              action.animation,
              resolve
            );
          });
        break;
      case ActionTypes.Scene:
        parsedAction = () =>
          new Promise((resolve) => {
            this.complete();
            resolve();
          });
        break;
      case ActionTypes.Element:
        parsedAction = () =>
          new Promise((resolve) => {
            const element = Elements[action.context];
            const calls = action.calls;
            calls.forEach((call) => {
              const method = call.method;
              const param = call.param;
              element[method](param);
            });
            resolve();
          });
        break;
      case ActionTypes.Interaction:
        parsedAction = () =>
          new Promise((resolve) => {
            this.listener(frame.target, () => {
              const target_ = document.getElementById(frame.target);
              const onComplete = () => {
                target_.classList.add("hidden");
                resolve();
              };
              this.animate(
                action.context,
                action.duration,
                action.animation,
                onComplete
              );
            });
          });
        break;
    }

    return {
      ...frame,
      action: parsedAction,
    };
  }

  // Every action should be an promise
  // Each scene is chain of promises which runs one after another
  // Some promises resolve by default
  // Some requires external events to be completed
  // Animate something -> Animate something else -> Wait for input ->

  animate(context, duration, animation, next) {
    return anime({
      targets: `#${context}`,
      easing: "linear",
      duration,
      complete: (anim) => {
        next();
      },
      ...animation,
    });
  }

  listener(target, callback) {
    const target_ = document.getElementById(target);
    target_.classList.remove("hidden");
    console.log(target_);
    target_.addEventListener("click", callback);
  }

  complete() {
    SceneElements.SimulationContainer.setAttribute(
      "data-step-completed",
      "true"
    );
  }
}

export default Sequence;
