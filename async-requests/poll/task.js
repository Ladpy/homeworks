document.addEventListener('DOMContentLoaded', () => {
  const pollTitle = document.getElementById('poll__title');
  const pollAnswers = document.getElementById('poll__answers');

  // загрузка опроса
  fetch('https://students.netoservices.ru/nestjs-backend/poll')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // отображение вопроса
      pollTitle.textContent = data.data.title;
      pollAnswers.innerHTML = '';

      // кнопки ответов
      data.data.answers.forEach((answerText, index) => {
        const button = document.createElement('button');
        button.className = 'poll__answer';
        button.textContent = answerText;

        button.addEventListener('click', () => {
          alert('Спасибо, ваш голос засчитан!');
        });

        pollAnswers.appendChild(button);
      });
    })
    .catch(error => {
      console.error('Ошибка загрузки опроса:', error);
      pollTitle.textContent = 'Не удалось загрузить опрос. Попробуйте позже.';
      pollAnswers.innerHTML = '';
    });
});