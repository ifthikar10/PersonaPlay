document.addEventListener("DOMContentLoaded", () => {
  const stored = sessionStorage.getItem("quizResult");

  const resultQuizTitle = document.getElementById("resultQuizTitle"); 
  const resultTitle = document.getElementById("resultTitle");
  const resultText = document.getElementById("resultText");
  const resultImage = document.getElementById("resultImage");
  const restartBtn = document.getElementById("restartBtn");

  let quizKey = "travel";
  let resultType = "adventurous";

  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      quizKey = parsed.quizKey || quizKey;
      resultType = parsed.resultType || resultType;

      if (resultQuizTitle) {
        resultQuizTitle.textContent = parsed.quizTitle
          ? `${parsed.quizTitle} Result`
          : "Your result";
      } 
    } catch (error) {
      console.error("Could not read quiz result.", error);
    }
  }

  const resultData =
    window.resultList?.[quizKey]?.[resultType] ||
    window.resultList?.travel?.adventurous;

  if (resultTitle) resultTitle.textContent = resultData.title;
  if (resultText) resultText.textContent = resultData.description;
  if (resultImage) {
    resultImage.src = resultData.image;
    resultImage.alt = resultData.title;
  }

  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      window.location.href = `quiz.html?quiz=${encodeURIComponent(quizKey)}`;
    });
  }
});
