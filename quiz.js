// quiz.js

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const quizKey = params.get("quiz") || "travel";

  const quiz = quizBank[quizKey] || quizBank.travel;

  const questionLabel = document.getElementById("questionLabel");
  const questionText = document.getElementById("questionText");
  const questionImage = document.getElementById("questionImage");
  const answersGrid = document.getElementById("answersGrid");
  const nextBtn = document.getElementById("nextBtn");

  const progressFill = document.getElementById("progressFill");
  const progressPercent = document.getElementById("progressPercent");

  let current = 0;
  let selectedType = null;

  const scores = {
    adventurous: 0,
    calm: 0,
    social: 0,
    creative: 0
  };

  // ✅ Update progress based on completed questions
  function updateProgress() {
    const total = quiz.questions.length;
    const percent = Math.round((current / total) * 100);

    progressFill.style.width = `${percent}%`;
    progressPercent.textContent = `${percent}%`;
  }

  function renderQuestion() {
    const q = quiz.questions[current];

    // ✅ Question number
    questionLabel.textContent = `Q${current + 1}:`;

    questionText.textContent = q.question;
    questionImage.src = quiz.questionImage;

    answersGrid.innerHTML = "";
    selectedType = null;
    nextBtn.disabled = true;

    q.answers.forEach((answer) => {
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

    updateProgress();
  }

  nextBtn.addEventListener("click", () => {
    if (!selectedType) return;

    scores[selectedType]++;
    current++;

    if (current >= quiz.questions.length) {
      showResult();
      return;
    }

    renderQuestion();
  });

  function showResult() {
    // Set progress to 100%
    progressFill.style.width = "100%";
    progressPercent.textContent = "100%";

    const bestType = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );

    alert(`Your personality type is: ${bestType}`);
  }

  renderQuestion();
});
