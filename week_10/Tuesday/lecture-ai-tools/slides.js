let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slideInfo = document.getElementById("slideInfo");
const progressBar = document.getElementById("progressBar");

function showSlide(index) {
  currentSlide = Math.max(0, Math.min(index, totalSlides - 1));

  slides.forEach((slide) => slide.classList.remove("active"));
  slides[currentSlide].classList.add("active");

  slideInfo.textContent = `Slide ${currentSlide + 1} of ${totalSlides}`;
  document.getElementById("prevBtn").disabled = currentSlide === 0;
  document.getElementById("nextBtn").disabled =
    currentSlide === totalSlides - 1;

  const progress = ((currentSlide + 1) / totalSlides) * 100;
  progressBar.style.width = progress + "%";
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") changeSlide(-1);
  if (e.key === "ArrowRight" || e.key === " ") {
    e.preventDefault();
    changeSlide(1);
  }
});

let touchStartX = 0;
document.addEventListener("touchstart", (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
  const difference = touchStartX - e.changedTouches[0].screenX;
  if (Math.abs(difference) > 50) {
    difference > 0 ? changeSlide(1) : changeSlide(-1);
  }
});

showSlide(0);
