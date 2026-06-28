document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');
  const progress = document.getElementById('progress');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];

    if (!file) {
      alert('Пожалуйста, выберите файл');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    const xhr = new XMLHttpRequest();

    xhr.upload.addEventListener('progress', function(e) {
      if (e.lengthComputable) {
        const percentComplete = (e.loaded / e.total) * 100;
        progress.value = percentComplete;
      }
    });

    xhr.addEventListener('load', function() {
      if (xhr.status === 200) {
        alert('Файл успешно загружен!');
      } else {
        alert('Произошла ошибка при загрузке файла. Код: ' + xhr.status);
      }
    });

    xhr.addEventListener('error', function() {
      alert('Не удалось отправить файл. Проверьте соединение.');
    });

    xhr.open('POST', form.action);
    xhr.send(formData);
  });
});