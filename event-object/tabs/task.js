// Находим все контейнеры с вкладками на странице
const tabContainers = document.querySelectorAll('.tab__navigation');

tabContainers.forEach(navigation => {
  // Находим все вкладки в текущем контейнере
  const tabs = navigation.querySelectorAll('.tab');

  // Находим соответствующий контейнер с содержимым
  const contentsContainer = navigation.nextElementSibling;
  const contents = contentsContainer.querySelectorAll('.tab__content');

  // Добавляем обработчик на каждую вкладку
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      // Если вкладка уже активна, ничего не делаем
      if (tab.classList.contains('tab_active')) {
        return;
      }

      // 1. Убираем активный класс у всех вкладок
      tabs.forEach(t => t.classList.remove('tab_active'));

      // 2. Добавляем активный класс текущей вкладке
      tab.classList.add('tab_active');

      // 3. Убираем активный класс у всего содержимого
      contents.forEach(c => c.classList.remove('tab__content_active'));

      // 4. Добавляем активный класс соответствующему содержимому
      contents[index].classList.add('tab__content_active');
    });
  });
});