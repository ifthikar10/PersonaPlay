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

    q.answers.forEach((answer) => {
      const btn = document.createElement("button");
      btn.className = "answer-card";

      const img = document.createElement("img");
      img.src = quiz.answerImages[answer.type];

      const txt = document.createElement("p");
      txt.textContent = answer.text;

      btn.appendChild(img);
      btn.appendChild(txt);

      btn.onclick = () => {
        selectedType = answer.type;
        nextBtn.disabled = false;
      };

      answersGrid.appendChild(btn);
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
