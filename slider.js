// Obtener todos los elementos con la clase "slide"
const slides = document.querySelectorAll(".slide");

// Obtener los botones
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Índice de la imagen actual
let current = 0;

// Función que muestra la imagen activa según el índice actual
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

// Evento para botón "⟵" (anterior)
prevButton.addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});

// Evento para botón "⟶" (siguiente)
nextButton.addEventListener("click", () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});

// Mostrar la primera imagen al cargar la página
showSlide(current);
