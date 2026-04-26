document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("gamesGrid");

  if (!grid || !window.quizList) return;

  Object.entries(window.quizList).forEach(([key, quiz]) => {
    const card = document.createElement("div");
    card.className = "game-card";

    card.innerHTML = `
      <img class="game-image" src="${quiz.questionImage}" alt="${quiz.title}" />
      <h3>${quiz.title}</h3>
      <p>Discover your personality through this fun quiz.</p>

      <div class="game-meta">
        <span>⏱ ${quiz.time}</span>
        <span>❓ ${quiz.questions.length} questions</span>
        <span>🎯 ${quiz.difficulty}</span>
      </div>
    `;

    card.addEventListener("click", () => {
      window.location.href = `instruction.html?quiz=${key}`;
    });

    grid.appendChild(card);
  });
});
