document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.game-image');

  images.forEach(img => {
    img.addEventListener('click', () => {
      const card = img.closest('.game-card');

      const title = encodeURIComponent(card.dataset.title);
      const time = encodeURIComponent(card.dataset.time);
      const questions = encodeURIComponent(card.dataset.questions);
      const difficulty = encodeURIComponent(card.dataset.difficulty);
      const image = encodeURIComponent(card.dataset.image);

      const url = `instruction.html?title=${title}&time=${time}&questions=${questions}&difficulty=${difficulty}&image=${image}`;

      window.location.href = url;
    });
  });
});
