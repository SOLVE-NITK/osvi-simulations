import { LitElement, html, css } from "./litComponent.js";

// Dialog Manager
class DialogManager {
  constructor() {
    this.backdrop = document.querySelector(".backdrop");
    this.dialog = document.getElementById("dialog-root");
    window.dialogManager = this;
  }

  openDialog(dialogType) {
    this.backdrop.style.display = "block"; // Show the backdrop
    this.dialog.innerHTML = this.getDialogHTML(dialogType); // Set the content of the dialog
    this.dialog.style.display = "block"; // Show the dialog
  }

  closeDialog() {
    this.backdrop.style.display = "none"; // Hide the backdrop
    this.dialog.style.display = "none"; // Hide the dialog
  }

  getDialogHTML(dialogType) {
    // Return HTML content for the specified dialog type
    switch (dialogType) {
      case "quiz":
        return `<quiz-dialog />`;
      case "confirm":
        return "<p>This is a confirmation dialog!</p>";
      default:
        return "<p>This is a generic dialog!</p>";
    }
  }
}

class QuizDialog extends LitElement {
  static properties = {
    questions: { type: Array },
    currentQuestion: { type: Number },
    score: { type: Number },
  };

  constructor() {
    super();
    this.questions = [
      {
        question:
          "What should be the minimum ratio of the height of the melted metal to the diameter of the thermocouple?",
        answers: ["8", "9", "10", "11"],
        correctAnswer: 2,
      },
      {
        question:
          "Which component of a thermocouple is typically referred to as the hot junction?",
        answers: [
          "Where the two dissimilar metals meet",
          "Where the thermocouple wires are connected to the measurement device",
          "Where the thermocouple is exposed to the high temperature being measured",
          "Where the thermocouple wires are insulated",
        ],
        correctAnswer: 2,
      },
    ];
    this.currentQuestion = 0;
    this.score = 0;
  }

  render() {
    if (this.currentQuestion >= this.questions.length) {
      return html`
        <h2>Quiz Completed!</h2>
        <p>Your score: ${this.score} out of ${this.questions.length}</p>
        <button @click=${this.closeDialog}>Close Dialog</button>
      `;
    }

    const currentQuestion = this.questions[this.currentQuestion];

    return html`
      <div class="quiz-question">
        <h2>${currentQuestion.question}</h2>
        <ul>
          ${currentQuestion.answers.map(
            (answer, index) => html`
              <li class="answer-option">
                <label for="answer-${index}">
                  <input
                    type="radio"
                    id="answer-${index}"
                    name="answer"
                    value="${index}"
                    defaultChecked=${false}
                    @click=${this.handleAnswerClick}
                  />
                  ${answer}
                </label>
              </li>
            `
          )}
        </ul>
      </div>
    `;
  }

  getFeedbackIcon(isCorrect) {
    return isCorrect ? html`&#10004;` : html`&#10006;`; // Unicode characters for tick and cross
  }

  handleAnswerClick(event) {
    const selectedAnswer = parseInt(event.target.value);
    const currentQuestion = this.questions[this.currentQuestion];

    this.score += selectedAnswer === currentQuestion.correctAnswer ? 1 : 0;
    this.currentQuestion++;
    this.requestUpdate(); // Update the rendered lit-html template
    this.selectedAnswer = -1;
  }

  closeDialog() {
    // Implement logic to close the dialog (e.g., dispatch an event)
    window.dialogManager.closeDialog();
    console.log("Quiz dialog closed.");
  }
}

customElements.define("quiz-dialog", QuizDialog);

// Example usage:
export const dialogManager = new DialogManager();
