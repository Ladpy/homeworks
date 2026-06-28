document.addEventListener('DOMContentLoaded', () => {
  const itemsContainer = document.getElementById('items');
  const loader = document.getElementById('loader');

  fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
    .then(response => {
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      loader.classList.remove('loader_active');
      itemsContainer.innerHTML = '';
      const valute = data.response.Valute;

      for (const key in valute) {
        const currency = valute[key];

        const item = document.createElement('div');
        item.className = 'item';

        const code = document.createElement('div');
        code.className = 'item__code';
        code.textContent = currency.CharCode;

        const value = document.createElement('div');
        value.className = 'item__value';
        value.textContent = currency.Value;

        const currencyLabel = document.createElement('div');
        currencyLabel.className = 'item__currency';
        currencyLabel.textContent = 'руб.';

        item.appendChild(code);
        item.appendChild(value);
        item.appendChild(currencyLabel);

        itemsContainer.appendChild(item);
      }
    })
    .catch(error => {
      loader.classList.remove('loader_active');
      itemsContainer.innerHTML = 'Не удалось загрузить курсы валют. Попробуйте позже.';
      console.error('Ошибка:', error);
    });
});