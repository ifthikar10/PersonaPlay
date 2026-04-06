document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const quizKey = params.get("quiz") || "travel";

  const quiz = quizBank[quizKey] || quizBank.travel;

  const questionText = document.getElementById("questionText");
  const questionImage = document.getElementById("questionImage");
  const answersGrid = document.getElementById("answersGrid");
  const nextBtn = document.getElementById("nextBtn");

  let current = 0;
  let selectedType = null;

  const scores = {
    adventurous: 0,
    calm: 0,
    social: 0,
    creative: 0
  };

  function renderQuestion() {
    const q = quiz.questions[current];

    questionText.textContent = q.question;
    questionImage.src = quiz.questionImage;

    answersGrid.innerHTML = "";

    q.answers.forEach((answer, index) => {
    const label = document.createElement("label");
    label.className = "answer-card";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = answer.type;
    input.className = "answer-radio";

    const img = document.createElement("img");
    img.src = quiz.answerImages[answer.type];
    img.alt = answer.text;

    const txt = document.createElement("p");
    txt.textContent = answer.text;

    label.appendChild(input);
    label.appendChild(img);
    label.appendChild(txt);

    input.addEventListener("change", () => {
      selectedType = answer.type;
      nextBtn.disabled = false;
    });

  answersGrid.appendChild(label);
});
  }

  nextBtn.addEventListener("click", () => {
    if (!selectedType) return;

    scores[selectedType]++;
    current++;

    if (current >= quiz.questions.length) {
      alert("Quiz finished!");
      return;
    }

    nextBtn.disabled = true;
    renderQuestion();
  });

  renderQuestion();
});
