import { LitElement, html, css } from "../js/lit-core.min.js";
class ImageContainer extends LitElement {
  static styles = css`
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      object-fit: contain;
      z-index: 100;
    }

    .blinking {
      animation: blinker 1s linear infinite;
    }

    @keyframes blinker {
      50% {
        opacity: 0;
      }
    }
  `;

  _defaultheight = 100;
  _defaultwidth = 100;
  width = 100;
  height = 100;
  x = 0;
  y = 0;
  rotateDeg = 0;
  // Function to update width and height
  updateSize({ w, h }) {
    console.log("updateSize", w, h);
    this.width = w;
    this.height = h;
    this.requestUpdate();
  }

  updatePosition({ x, y }) {
    console.log("updatePosition", x, y);
    this.x = x;
    this.y = y;
    this.requestUpdate();
  }

  updateRotation({ deg }) {
    console.log("updateRotation", deg);
    this.rotateDeg = deg;
    this.requestUpdate();
  }

  hide() {
    this.width = 0;
    this.height = 0;
    this.requestUpdate();
  }

  show() {
    this.height = this._defaultheight;
    this.width = this._defaultwidth;
    this.requestUpdate();
  }

  render() {
    return html`
      <img
        src="../images/pointarrow.png"
        alt="Image"
        class="blinking"
        style="width: ${this.width}px; height: ${this.height}px; top: ${this
          .y}px; left: ${this.x}px; transform: rotate(${this.rotateDeg}deg);"
      />
    `;
  }
}

customElements.define("blinking-arrow", ImageContainer);

// export const blinkingArrow = { ImageContainer };
