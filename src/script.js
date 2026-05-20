/* L'Art du Coulissement — interactions légères */
(function () {
  'use strict';
  // Année dynamique dans le footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  // Carrousel : boutons précédent / suivant
  var carousel = document.getElementById('carousel');
  if (carousel) {
    document.querySelectorAll('.carousel-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var dir = parseInt(btn.getAttribute('data-dir'), 10) || 1;
        var item = carousel.querySelector('.carousel-item');
        var step = item ? item.getBoundingClientRect().width + 16 : 300;
        carousel.scrollBy({ left: step * dir, behavior: 'smooth' });
      });
    });
  }
  // Fermeture douce du menu mobile (si le user clique sur une ancre)
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function () {
      // smooth scroll est géré par CSS — rien à faire ici pour l'instant
    });
  });
})();