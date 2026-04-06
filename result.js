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
  const prevBtn = document.getElementById("prevBtn");
  const resetBtn = document.getElementById("resetBtn");

  const progressFill = document.getElementById("progressFill");
  const progressPercent = document.getElementById("progressPercent");

  const quizCard = document.getElementById("quizCard");
  const resultCard = document.getElementById("resultCard");
  const resultTitle = document.getElementById("resultTitle");
  const resultText = document.getElementById("resultText");
  const restartBtn = document.getElementById("restartBtn");

  const soundBtn = document.getElementById("soundBtn");
  const soundIcon = document.getElementById("soundIcon");

  let current = 0;
  let soundOn = true;

  const scores = {
    adventurous: 0,
    calm: 0,
    social: 0,
    creative: 0
  };

  const selectedAnswers = Array(quiz.questions.length).fill(null);

  function playClick() {
    if (!soundOn) return;

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.value = 660;
    gain.gain.value = 0.02;

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.08);

    osc.onended = () => ctx.close();
  }

  function updateProgress() {
    const total = quiz.questions.length;
    const percent = Math.round((current / total) * 100);
    progressFill.style.width = `${percent}%`;
    progressPercent.textContent = `${percent}%`;
  }

  function renderQuestion() {
    const q = quiz.questions[current];

    questionLabel.textContent = `Q${current + 1}:`;
    questionText.textContent = q.question;
    questionImage.src = quiz.questionImage;
    questionImage.alt = q.question;

    answersGrid.innerHTML = "";
    nextBtn.disabled = true;

    prevBtn.disabled = current === 0;

    q.answers.forEach((answer, index) => {
      const label = document.createElement("label");
      label.className = "answer-card";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = "answer";
      input.value = answer.type;
      input.className = "answer-radio";
      input.id = `answer-${current}-${index}`;

      const img = document.createElement("img");
      img.src = quiz.answerImages[answer.type];
      img.alt = answer.text;

      const txt = document.createElement("p");
      txt.textContent = answer.text;

      label.appendChild(input);
      label.appendChild(img);
      label.appendChild(txt);

      if (selectedAnswers[current] === answer.type) {
        input.checked = true;
        nextBtn.disabled = false;
      }

      input.addEventListener("change", () => {
        selectedAnswers[current] = answer.type;
        nextBtn.disabled = false;
        playClick();
      });

      answersGrid.appendChild(label);
    });

    updateProgress();
  }

  function showResult() {
    const bestType = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
    const result = resultBank[quizKey]?.[bestType] || resultBank.travel.adventurous;

    sessionStorage.setItem(
      "quizResult",
      JSON.stringify({
        quizKey,
        quizTitle: quiz.title,
        resultType: bestType
      })
    );

    window.location.href = "result.html";
  }

  function restartQuiz() {
    current = 0;
    Object.keys(scores).forEach(key => {
      scores[key] = 0;
    });
    for (let i = 0; i < selectedAnswers.length; i++) {
      selectedAnswers[i] = null;
    }

    resultCard.classList.add("hidden");
    quizCard.classList.remove("hidden");
    nextBtn.disabled = true;
    prevBtn.disabled = true;

    renderQuestion();
  }

  nextBtn.addEventListener("click", () => {
    const chosen = selectedAnswers[current];
    if (!chosen) return;

    scores[chosen]++;

    if (current >= quiz.questions.length - 1) {
      showResult();
      return;
    }

    current++;
    renderQuestion();
    playClick();
  });

  prevBtn.addEventListener("click", () => {
    if (current === 0) return;
    current--;
    renderQuestion();
    playClick();
  });

  resetBtn.addEventListener("click", () => {
    restartQuiz();
    playClick();
  });

  restartBtn.addEventListener("click", () => {
    restartQuiz();
  });

  soundBtn.addEventListener("click", () => {
    soundOn = !soundOn;
    soundIcon.innerHTML = soundOn ? "&#128266;" : "&#128263;";
  });

  renderQuestion();
});
