document.addEventListener('DOMContentLoaded', function () {
  const rotators = document.querySelectorAll('.rotator');

  rotators.forEach((rotator) => {
    const cases = rotator.querySelectorAll('.rotator__case');
    if (cases.length === 0) return;

    let currentIndex = 0;
    cases.forEach((el, idx) => {
      if (el.classList.contains('rotator__case_active')) {
        currentIndex = idx;
      }
    });

    function switchCase() {
      cases[currentIndex].classList.remove('rotator__case_active');

      currentIndex = (currentIndex + 1) % cases.length;
      const nextCase = cases[currentIndex];

      nextCase.classList.add('rotator__case_active');

      if (nextCase.dataset.color) {
        nextCase.style.color = nextCase.dataset.color;
      }

      let speed = 1000;
      if (nextCase.dataset.speed) {
        speed = parseInt(nextCase.dataset.speed, 10);
      }

      setTimeout(switchCase, speed);
    }

    const activeCase = cases[currentIndex];
    if (activeCase.dataset.color) {
      activeCase.style.color = activeCase.dataset.color;
    }

    let initialSpeed = 1000;
    if (activeCase.dataset.speed) {
      initialSpeed = parseInt(activeCase.dataset.speed, 10);
    }

    setTimeout(switchCase, initialSpeed);
  });
});