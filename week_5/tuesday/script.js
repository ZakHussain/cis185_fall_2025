// script.js - DOM Manipulation Lecture JavaScript

// Global variables
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slideInfo = document.getElementById('slideInfo');
const progressBar = document.getElementById('progressBar');

// Function to show a specific slide
function showSlide(index) {
  // Ensure index is within bounds
  currentSlide = Math.max(0, Math.min(index, totalSlides - 1));

  // Hide all slides
  slides.forEach(slide => slide.classList.remove('active'));

  // Show current slide
  slides[currentSlide].classList.add('active');

  // Update navigation
  slideInfo.textContent = `Slide ${currentSlide + 1} of ${totalSlides}`;
  document.getElementById('prevBtn').disabled = currentSlide === 0;
  document.getElementById('nextBtn').disabled = currentSlide === totalSlides - 1;

  // Update progress bar
  const progress = ((currentSlide + 1) / totalSlides) * 100;
  progressBar.style.width = progress + '%';
}

// Function to change slides
function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') changeSlide(-1);
  if (e.key === 'ArrowRight' || e.key === ' ') {
    e.preventDefault();
    changeSlide(1);
  }
});

// Touch/swipe navigation for mobile
let touchStartX = 0;
document.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
  const touchEndX = e.changedTouches[0].screenX;
  const difference = touchStartX - touchEndX;

  if (Math.abs(difference) > 50) {
    if (difference > 0) {
      changeSlide(1); // Swipe left, go to next
    } else {
      changeSlide(-1); // Swipe right, go to previous
    }
  }
});

// Interactive demo functionality for Slide 14
document.addEventListener('DOMContentLoaded', function () {
  // Demo buttons
  const btn1 = document.getElementById('btn1');
  const btn2 = document.getElementById('btn2');
  const btn3 = document.getElementById('btn3');
  const btn4 = document.getElementById('btn4');
  const btn5 = document.getElementById('btn5');

  // Demo elements
  const demoHeading = document.getElementById('demoHeading');
  const demoText = document.getElementById('demoText');
  const codeDisplay = document.getElementById('codeDisplay');
  const demoOutput = document.getElementById('demo-output');

  // Button 1: Change Heading
  if (btn1) {
    btn1.addEventListener('click', function () {
      demoHeading.textContent = 'Text Changed!';
      codeDisplay.innerHTML = "document.getElementById('demoHeading').textContent = 'Text Changed!'";
    });
  }

  // Button 2: Make Purple
  if (btn2) {
    btn2.addEventListener('click', function () {
      demoHeading.style.color = 'purple';
      codeDisplay.innerHTML = "document.getElementById('demoHeading').style.color = 'purple'";
    });
  }

  // Button 3: Make Bigger
  if (btn3) {
    btn3.addEventListener('click', function () {
      demoHeading.style.fontSize = '40px';
      codeDisplay.innerHTML = "document.getElementById('demoHeading').style.fontSize = '40px'";
    });
  }

  // Button 4: Change Paragraph
  if (btn4) {
    btn4.addEventListener('click', function () {
      demoText.innerHTML = '<strong>JavaScript is awesome!</strong>';
      codeDisplay.innerHTML = "document.getElementById('demoText').innerHTML = '&lt;strong&gt;JavaScript is awesome!&lt;/strong&gt;'";
    });
  }

  // Button 5: Add Background
  if (btn5) {
    btn5.addEventListener('click', function () {
      demoHeading.style.backgroundColor = 'yellow';
      codeDisplay.innerHTML = "document.getElementById('demoHeading').style.backgroundColor = 'yellow'";
    });
  }

  // Add mouseover effect to demo heading
  if (demoHeading) {
    demoHeading.addEventListener('mouseover', function () {
      if (demoOutput) {
        demoOutput.innerHTML = '<p style="margin: 0; color: green;">✓ Mouse is over the heading!</p>';
      }
    });

    demoHeading.addEventListener('mouseout', function () {
      if (demoOutput) {
        demoOutput.innerHTML = '<p style="margin: 0; color: blue;">← Mouse left the heading</p>';
      }
    });
  }

  // Initialize first slide
  showSlide(0);
});