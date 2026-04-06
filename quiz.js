document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const quizKey = params.get("quiz") || "travel";

  const quiz = quizBank[quizKey] || quizBank.travel;

  const questionLabel = document.getElementById("questionLabel");
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

    questionLabel.textContent = `Q${current + 1} of ${quiz.questions.length}`;
    questionText.textContent = q.question;
    questionImage.src = quiz.questionImage;

    answersGrid.innerHTML = "";
    selectedType = null;
    nextBtn.disabled = true;

    q.answers.forEach((answer, index) => {
      // Create label (clickable container)
      const label = document.createElement("label");
      label.className = "answer-card";

      // Create radio input
      const input = document.createElement("input");
      input.type = "radio";
      input.name = "answer";
      input.value = answer.type;
      input.className = "answer-radio";

      // Create image
      const img = document.createElement("img");
      img.src = quiz.answerImages[answer.type];
      img.alt = answer.text;

      // Create text
      const txt = document.createElement("p");
      txt.textContent = answer.text;

      // Append elements
      label.appendChild(input);
      label.appendChild(img);
      label.appendChild(txt);

      // Handle selection
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

    renderQuestion();
  });

  renderQuestion();
});
