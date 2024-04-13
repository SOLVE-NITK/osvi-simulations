import { LitElement, html, css } from "../js/lit-core.min.js";

// Dialog Manager
class DialogManager {
  constructor() {
    this.backdrop = document.querySelector(".backdrop");
    this.dialog = document.getElementById("dialog-root");
    window.dialogManager = this;
  }

  openDialog(dialogType) {
    this.backdrop.style.display = "block"; // Show the backdrop
    console.log(this.dialog, "HERE");
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
        return `<quiz-dialog class='quiz-dialog'/>`;
      case "confirm":
        return "<p>This is a confirmation dialog!</p>";
      default:
        return "<p>This is a generic dialog!</p>";
    }
  }
}

class QuizDialog extends LitElement {
  static styles = css`
    .quiz-result,
    .quiz-question {
      margin-bottom: 20px;
    }

    h2 {
      margin: 0; /* Remove default margin */
      font-size: 1.5rem; /* Large heading */
      color: #333; /* Dark text */
    }

    .answer-list {
      list-style: none; /* Remove default list style */
      padding: 0;
      margin: 0;
    }

    .answer-option {
      margin-bottom: 10px; /* Space between answer options */
    }

    .answer-option label {
      display: block; /* Display label on a new line */
      cursor: pointer; /* Indicate clickable element */
    }

    input[type="radio"] {
      margin-right: 10px; /* Space between radio button and label */
    }

    .feedback {
      display: inline-block; /* Display feedback icon inline */
      color: #333; /* Dark text */
      font-size: 1.2rem; /* Slightly smaller icon */
      visibility: hidden; /* Initially hide feedback icons */
    }

    .answer-option:hover .feedback,
    .answer-option input:checked ~ .feedback {
      visibility: visible; /* Show feedback icon on hover or selection */
    }

    .feedback.correct {
      color: green; /* Green for correct answer */
    }

    .feedback.incorrect {
      color: red; /* Red for incorrect answer */
    }

    button {
      background-color: #333; /* Dark button background */
      color: white; /* White text */
      border: none; /* Remove button border */
      border-radius: 4px; /* Rounded corners */
      padding: 10px 20px;
      cursor: pointer; /* Indicate clickable element */
    }
  `;

  static properties = {
    questions: { type: Array },
    currentQuestion: { type: Number },
    score: { type: Number },
  };

  constructor() {
    super();
    this.questions = [
      {
        question: "In which surface do u see dendritic structure?",
        answers: [
          "Copper",
          "Zinc",
          "Completely random appearances",
          "No dendritic strucutre",
        ],
        correctAnswer: 1,
      },
      {
        question: "Identify the following in the Microstructure",
        answers: [
          "Zinc (the one which is yellow) ",
          "Dendrites (The white columnar structure in zinc)",
          "The interface (The white line)",
          "Copper (The orange surface)",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which element diffuses?",
        answers: ["Does Cu diffuse into Zn", "Does Zn diffuse into Cu"],
        correctAnswer: 1,
      },
    ];
    this.currentQuestion = 0;
    this.score = 0;
  }

  render() {
    if (this.currentQuestion >= this.questions.length) {
      return html`
        <div class="quiz-result">
          <h2>Quiz Completed!</h2>
          <p>Your score: ${this.score} out of ${this.questions.length}</p>
          <button @click=${this.closeDialog}>Close Dialog</button>
        </div>
      `;
    }

    const currentQuestion = this.questions[this.currentQuestion];

    return html`
      <div class="quiz-question">
        <h2>${currentQuestion.question}</h2>
        <ul class="answer-list">
          ${currentQuestion.answers.map(
            (answer, index) => html`
              <li class="answer-option">
                <label for="answer-${index}">
                  <input
                    type="radio"
                    id="answer-${index}"
                    name="answer"
                    value="${index}"
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
