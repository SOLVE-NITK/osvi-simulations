// Scene prop
export class Prop {
  constructor(
    imageUrl,
    position,
    container,
    dimensions = { h: "100px", w: "100px" },
    classes,
    pointsOfInterests = [],
    guid,
    label
  ) {
    this.imageUrl = imageUrl;
    this.position = position;
    this.container = container;
    this.dimensions = dimensions;
    this.classes = classes;
    this.element = null;
    this.pointsOfInterest = pointsOfInterests; // Array to store points of interest
    this.guid = guid;
    this.label = label;
  }

  moveTo({ x, y }) {
    this.element.style.top = y;
    this.element.style.left = x;
  }

  addPointOfInterest(point) {
    this.pointsOfInterest.push(point);
  }

  resize({ w, h }) {
    this.element.style.width = w;
    this.element.style.height = h;
  }

  display() {
    const wrapper = document.createElement("div");
    wrapper.style.position = "absolute";
    wrapper.style.top = this.position.y;
    wrapper.style.left = this.position.x;
    wrapper.style.width = this.dimensions.w;
    wrapper.style.height = this.dimensions.h;
    wrapper.style.backgroundImage = `url(${this.imageUrl})`;
    wrapper.style.backgroundSize = "contain";
    wrapper.style.backgroundRepeat = "no-repeat";
    wrapper.style.transition = "1s ease";
    wrapper.style.transitionProperty = "left,top,bottom,right";
    if (this.guid) wrapper.id = this.guid;

    if (this.classes) wrapper.classList.add(...this.classes);

    const innerwrapper = document.createElement("div");
    innerwrapper.style.position = "relative";
    innerwrapper.style.width = "100%";
    innerwrapper.style.height = "100%";

    wrapper.appendChild(innerwrapper);

    // adding point of interests
    this.pointsOfInterest.forEach((point) => {
      const blinkingArrow = document.createElement("img");
      blinkingArrow.src = "images/pointarrow.png";
      blinkingArrow.style.width = "60px";
      blinkingArrow.classList.add("blinking-arrow");
      const pointElement = document.createElement("div");
      pointElement.style.position = "absolute"; // Position the point elements absolutely within the wrapper div
      pointElement.style.top = `${point.y}px`;
      pointElement.style.left = `${point.x}px`;
      pointElement.appendChild(blinkingArrow);
      pointElement.classList.add("pinging", "point-of-interest");

      pointElement.addEventListener("click", () => {
        point.cb(this, wrapper.style);
        setTimeout(() => {
          pointElement.classList.add("hidden");
        }, 50);
        // pointElement.classList.add("hidden");
      });
      innerwrapper.appendChild(pointElement); // Append pointElement to propWrapper
    });
    console.log("LABEL", this.label);

    if (this.label) {
      const label = document.createElement("div");
      label.style.position = "absolute";
      label.style.bottom = `${this.label[1]}px`;
      // label.style.left = "0";
      label.style.width = "100%";
      label.style.textAlign = "center";
      label.style.fontSize = "15px";
      label.style.backgroundColor = "rgba(0,0,0,0.2)";
      label.style.padding = "5px";
      label.innerText = this.label[0];
      innerwrapper.appendChild(label);
    }

    this.element = wrapper;

    this.container.appendChild(wrapper);
  }
}
