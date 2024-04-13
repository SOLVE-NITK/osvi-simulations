import { LitElement, html, css } from "../js/lit-core.min.js";

const Positions = {
  TopLeft: {},
  TopRight: {},
  BottomLeft: {},
  BottomRight: {},
};

class TextElement extends LitElement {
  static get styles() {
    return css`
      p {
        font-size: 12px;
      }
      .text-container {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
        background-color: black;
        border-right: 1px solid black;
        border-top: 1px solid black;
        padding-inline: 20px;
        display: none;
        opacity: 0;
        color: white;
        transition: 1s ease all;
        border-radius: 6px;
      }

      .text-container.active {
        display: block;
        opacity: 1;
      }

      button {
        margin-bottom: 10px;
      }
    `;
  }

  static properties = {
    title: { type: String },
    description: { type: String },
    isOpen: { type: Boolean, state: true },
    position: { type: Boolean, state: true },
  };

  constructor() {
    super();
    this.isOpen = false; // Set initial state to closed
    this.position = { x: 0, y: 0 };
  }

  toggleState() {
    this.isOpen = !this.isOpen;
  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }

  setTitle(newTitle) {
    this.isOpen = true;
    this.title = newTitle;
  }

  setDescription(newDescription) {
    this.description = newDescription;
  }

  moveTo({ x, y }) {
    const element = this.shadowRoot.getElementById("text-container");
    element.style.left = x;
    element.style.top = y;
  }

  completeStep() {
    this.isOpen = false;
  }

  render() {
    return html`
      <div
        id="text-container"
        class="text-container ${this.isOpen ? "active" : ""}"
      >
        <div class="text-element">
          <p>${this.title}</p>
        </div>
        <button @click="${this.completeStep}">OK</button>
      </div>
    `;
  }
}

customElements.define("text-element", TextElement);
