const slider = document.querySelector(".slider");
const sliderContainer = document.querySelector(".slider-container");
let prevButton = document.querySelector(".arrow.left");
let nextButton = document.querySelector(".arrow.right");

const secondNextButton = document.querySelector(".left.media");
const secondPrevButton = document.querySelector(".right.media");

const slideWidth = slider.offsetWidth;
const bodyWidth = document.body.offsetWidth;
let slideIndex = 0;

setInterval(() => {
  if (bodyWidth <= 1000) {
    prevButton = secondNextButton;
    nextButton = secondPrevButton;
  }
}, 100);

// Функция для перехода к следующему слайду
function nextSlide() {
  if (slideIndex < 2) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  sliderContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  console.log(2);
}

// Функция для перехода к предыдущему слайду
function prevSlide() {
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = 2;
  }
  sliderContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
  console.log(1);
}

// Добавляем обработчики событий на кнопки
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);
