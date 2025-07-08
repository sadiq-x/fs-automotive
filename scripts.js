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

