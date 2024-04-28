document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider');
    const slides = slider.querySelectorAll('.slider__item');
    const totalSlides = slides.length;
    let currentSlide = 0;
  
    function showSlide(n) {
      slides.forEach(slide => {
        slide.style.display = 'none';
      });
      slides[n].style.display = 'block';
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
    }
  
    const leftBtn = slider.querySelector('.slider__left');
    const rightBtn = slider.querySelector('.slider__right');
  
    leftBtn.addEventListener('click', function() {
      prevSlide();
    });
  
    rightBtn.addEventListener('click', function() {
      nextSlide();
    });
  
    // Show the initial slide
    showSlide(currentSlide);
  });