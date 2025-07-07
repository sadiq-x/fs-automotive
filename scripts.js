document.querySelectorAll('.service-title').forEach(button => {
  button.addEventListener('click', () => {
    const description = button.nextElementSibling;
    description.classList.toggle('show');
  });
});

(function() {
  const track = document.getElementById('carouselTrack');
  const images = track.getElementsByTagName('img');
  const totalImages = images.length;
  let currentIndex = 0;

  function slide() {
    currentIndex++;
    if (currentIndex >= totalImages) {
      currentIndex = 0;
    }
    track.style.transform = 'translateX(' + (-currentIndex * window.innerWidth) + 'px)';
  }

  // Avança slide a cada 3 segundos
  setInterval(slide, 3000);

  // Ajusta ao redimensionar janela
  window.addEventListener('resize', () => {
    track.style.transform = 'translateX(' + (-currentIndex * window.innerWidth) + 'px)';
  });
})();

