document.querySelectorAll('.service-title').forEach(button => {
  button.addEventListener('click', () => {
    const description = button.nextElementSibling;
    const icon = button.querySelector('.toggle-icon');
    const titleText = button.querySelector('.title-text');

    description.classList.toggle('show');

    // Alternar ícone
    icon.textContent = description.classList.contains('show') ? '−' : '+';

    // Alterar cor do texto
    if (description.classList.contains('show')) {
      titleText.style.color = 'red';
    } else {
      titleText.style.color = ''; // volta à cor padrão definida no CSS
    }
  });
});

(function () {
  const track = document.getElementById('carouselTrack');
  const images = track.querySelectorAll('img');
  const imageCount = images.length;
  const imageWidth = images[0].clientWidth;

  let currentIndex = 0;

  function moveCarousel() {
    currentIndex++;
    if (currentIndex >= imageCount) {
      currentIndex = 0; // Volta ao início
    }
    track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
  }

  // Muda de imagem a cada 3 segundos
  setInterval(moveCarousel, 3000);
})();

