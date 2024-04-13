import { LitElement, html, css } from "../js/lit-core.min.js";

class InlineQuizElement extends LitElement {
  static get styles() {
    return css`
      .root {
        position: absolute;
        background-color: gray;
        right: 10%;
        top: 20%;
        z-index: 100000;
      }
      .hidden {
        display: none;
      }
    `;
  }

  static properties = {
    question: { type: String },
    answers: { type: Array },
    selectedAnswer: { type: String },
    isVisible: { type: Boolean, state: true },
    correctAnswer: { type: Number },
  };

  constructor() {
    super();
    this.selectedAnswer = "";
    this.answers = [];
    this.question = "QUIZ BOX";
    this.correctAnswer = 0;
    this.isVisible = false;
  }

  handleAnswerChange(event) {
    this.selectedAnswer = event.target.value;
  }

  show(param) {
    this.isVisible = true;
  }

  hide() {
    this.isVisible = false;
  }

  updateQuestion({ question, answers, correct }) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correct;
    this.isVisible = true;
  }

  render() {
    return html`
      <div class="root ${this.isVisible ? "" : "hidden"}">
        <p>${this.question}</p>
        <select @change=${this.handleAnswerChange}>
          ${this.answers.map(
            (answer) => html` <option value="${answer}">${answer}</option> `
          )}
        </select>
      </div>
    `;
  }
}

customElements.define("inline-quiz", InlineQuizElement);
