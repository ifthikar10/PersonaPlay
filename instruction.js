document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  const title = params.get("title") || "Personality Quiz";
  const time = params.get("time") || "5 mins";
  const questions = params.get("questions") || "10 questions";
  const difficulty = params.get("difficulty") || "Medium";
  const image =
    params.get("image") ||
    "https://images.unsplash.com/photo-1523875194681-bedd468c58bf?auto=format&fit=crop&w=900&q=80";
  const quizUrl = params.get("quiz") || "quiz.html";

  const gameTitle = document.getElementById("gameTitle");
  const gameDescription = document.getElementById("gameDescription");
  const gameTime = document.getElementById("gameTime");
  const gameQuestions = document.getElementById("gameQuestions");
  const gameDifficulty = document.getElementById("gameDifficulty");
  const gameImage = document.getElementById("gameImage");
  const startQuizMain = document.getElementById("startQuizMain");

  if (gameTitle) gameTitle.textContent = title;
  if (gameDescription) {
    gameDescription.textContent =
      "This quiz predicts your personality based on the choices you make. There are no right or wrong answers, and no score.";
  }
  if (gameTime) gameTime.textContent = `⏱ ${time}`;
  if (gameQuestions) gameQuestions.textContent = `❓ ${questions}`;
  if (gameDifficulty) gameDifficulty.textContent = `🎯 ${difficulty}`;

  if (gameImage) {
    gameImage.src = image;
    gameImage.alt = title;
  }

  if (startQuizMain) {
    startQuizMain.href = quizUrl;
  }
});
