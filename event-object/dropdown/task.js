// Получаем все элементы с классом dropdown на странице
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  // Находим кнопку (значение) и список
  const valueElement = dropdown.querySelector('.dropdown__value');
  const listElement = dropdown.querySelector('.dropdown__list');
  const items = dropdown.querySelectorAll('.dropdown__item');

  // Обработчик клика по кнопке - открытие/закрытие списка
  valueElement.addEventListener('click', (event) => {
    event.stopPropagation();

    document.querySelectorAll('.dropdown__list_active').forEach(list => {
      if (list !== listElement) {
        list.classList.remove('dropdown__list_active');
      }
    });

    listElement.classList.toggle('dropdown__list_active');
  });

  // Обработчики клика по пунктам списка
  items.forEach(item => {
    const link = item.querySelector('.dropdown__link');

    link.addEventListener('click', (event) => {
      event.preventDefault();

      const newValue = link.textContent.trim();
      valueElement.textContent = newValue;

      listElement.classList.remove('dropdown__list_active');
    });
  });
});

// Закрываем все открытые списки при клике вне них
document.addEventListener('click', () => {
  const activeLists = document.querySelectorAll('.dropdown__list_active');
  activeLists.forEach(list => {
    list.classList.remove('dropdown__list_active');
  });
});