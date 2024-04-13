var questions = [
  "Why is the specimen rubbed in one direction only?",
  "Why is the specimen turned through 90°?",
  "What is the etchant used for Solder alloy?",
  "What is the etchant used for Brass?",
];

var options2 = [
  [
    "For ease of scratching",
    "Make all the scratches in one direction",
    "To avoid excess pressure",
    "None of these",
  ],
  [
    "1. To make it even for clean smooth finish",
    "2. To level all the scratches",
    "3. Both (1) and (2)",
    "4. None of the above",
  ],
  [
    "Marbles Reagent",
    "2% Nital Reagent",
    "Carpenters Reagent",
    "None of the above",
  ],
  [
    "Marbles Reagent",
    "Acidified Ferric Chloride",
    "Carpenters Reagent",
    "None of the above",
  ],
];

function validateAnswer(qn, ans, left, top) {
  $("#answer").empty();
  document.getElementById("a").innerHTML = "";
  document.getElementById("questDiv").style =
    "z-index:200;position:absolute; font-size:14px; background-color:grey; color:white; padding:7.5px; border-radius:5px; visibility:visible; left:" +
    left +
    ";top:" +
    top +
    ";";
  if (qn == 2) document.getElementById("questDiv").style.width = "210px";
  document.getElementById("q").innerHTML = questions[qn];
  el = document.createElement("option");
  el.textContent = " ";
  el.value = " ";
  answer.appendChild(el);

  for (j = 0; j < options2[qn].length; j++) {
    opt = options2[qn][j];

    el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    answer.appendChild(el);
    $("#answer").change(function () {
      ca = $(this).children("option:selected").val();
      if (options2[qn][ans] == ca) {
        document.getElementById("a").innerHTML = "Correct Answer!";
      } else {
        document.getElementById("a").innerHTML =
          "Wrong! Answer is " + options2[qn][ans];
      }
      setTimeout(function () {
        document.getElementById("questDiv").style.visibility = "hidden";
        document.getElementById("nextButton").style.visibility = "visible";
      }, 2500);
    });
  }
}

//-----------------------------------------blink arrow on the next step---------------------------------------------
//-------------------------------------function magic starts here----------------------------------------------------
function magic() {}
