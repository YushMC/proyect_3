const swiper = new Swiper(".swiper", {
  // Configuración básica
  loop: true, // Hacer que el carrusel sea infinito
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000, // Cambiar cada 3 segundos
    disableOnInteraction: false,
  },
  slidesPerView: 3, // Número de diapositivas visibles
  spaceBetween: 10, // Espacio entre las diapositivas
});
