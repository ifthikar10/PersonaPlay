document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  const quizKey = params.get("quiz") || "travel";
  const quiz = window.quizList?.[quizKey];

  if (!quiz) {
    console.error("Quiz not found");
    return;
  }

  const gameTitle = document.getElementById("gameTitle");
  const gameDescription = document.getElementById("gameDescription");
  const gameTime = document.getElementById("gameTime");
  const gameQuestions = document.getElementById("gameQuestions");
  const gameDifficulty = document.getElementById("gameDifficulty");
  const gameImage = document.getElementById("gameImage");
  const startQuizMain = document.getElementById("startQuizMain");


  const title = quiz.title;
  const questionsCount = quiz.questions.length;
  const time = `${questionsCount} mins`; 
  const difficulty = "Medium"; 
  const image = quiz.questionImage;

  if (gameTitle) gameTitle.textContent = title;

  if (gameDescription) {
    gameDescription.textContent =
      "This quiz predicts your personality based on the choices you make. There are no right or wrong answers, and no score.";
  }

  if (gameTime) gameTime.textContent = `⏱ ${time}`;
  if (gameQuestions) gameQuestions.textContent = `❓ ${questionsCount} questions`;
  if (gameDifficulty) gameDifficulty.textContent = `🎯 ${difficulty}`;

  if (gameImage) {
    gameImage.src = image;
    gameImage.alt = title;
  }

  if (startQuizMain) {
    startQuizMain.href = `quiz.html?quiz=${encodeURIComponent(quizKey)}`;
  }
});
