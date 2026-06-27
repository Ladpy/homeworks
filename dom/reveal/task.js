const revealElements = document.querySelectorAll('.reveal');

function checkVisibility() {
  const windowHeight = window.innerHeight; // высота области просмотра

  revealElements.forEach(element => {
    const rect = element.getBoundingClientRect();

    const isVisible = rect.top < windowHeight && rect.bottom > 0;

    if (isVisible) {
      element.classList.add('reveal_active');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
checkVisibility();