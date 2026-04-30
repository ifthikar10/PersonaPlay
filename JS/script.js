document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("gamesGrid");
  const searchInput = document.getElementById("searchInput");

  if (!grid || !window.quizList) return;

  let allQuizzes = Object.entries(window.quizList);

  function renderQuizzes(quizzes) {
    grid.innerHTML = "";

    if (quizzes.length === 0) {
      grid.innerHTML = `<p style="text-align:center; width:100%;">No quizzes found</p>`;
      return;
    }

    quizzes.forEach(([key, quiz]) => {
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
  }

  // Initial render
  renderQuizzes(allQuizzes);

  // Search functionality
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();

    const filtered = allQuizzes.filter(([key, quiz]) => {
      return (
        quiz.title.toLowerCase().includes(query) ||
        key.toLowerCase().includes(query) ||
        quiz.difficulty.toLowerCase().includes(query)
      );
    });

    renderQuizzes(filtered);
  });
});
