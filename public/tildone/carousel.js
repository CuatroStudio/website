(() => {
  document.querySelectorAll('.carousel').forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
    const previous = carousel.querySelector('.previous');
    const next = carousel.querySelector('.next');
    const count = carousel.querySelector('.carousel-count');
    let current = 0;

    const show = (index) => {
      slides[current].querySelector('video')?.pause();
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => { slide.hidden = i !== current; });
      count.textContent = `${current + 1} ${carousel.dataset.of} ${slides.length}`;
      const video = slides[current].querySelector('video');
      if (video && carousel.classList.contains('mac-carousel')) video.play().catch(() => {});
    };
    previous.addEventListener('click', () => show(current - 1));
    next.addEventListener('click', () => show(current + 1));
    show(0);
    previous.hidden = false;
    next.hidden = false;
  });
})();
