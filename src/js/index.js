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
  
    showSlide(currentSlide);
  });

  const likeElements = document.querySelectorAll('.like__svg');
  let isLiked = false;
  let messageTimeout;
  const messageHeight = 60;
  
  likeElements.forEach(function(like) {
      like.addEventListener("click", function(event) {
          const defaultBottomPosition = 10;
  
          if (!isLiked) {
              like.style.backgroundColor = "red";
              like.style.fill = "white"
              isLiked = true;
  
              if (!document.querySelector('.message')) {
                  createMessage(defaultBottomPosition);
              }
              
              clearTimeout(messageTimeout);
              messageTimeout = setTimeout(() => {
                  removeMessage();
              }, 4000);
          } else {
              like.style.backgroundColor = "";
              like.style.fill = ""
              isLiked = false;
              clearTimeout(messageTimeout);
              removeMessage();
          }
      });
  });
  
  function createMessage(bottomPosition) {
    const message = document.createElement('div');
    message.textContent = "Товар доданий в обране";
    message.classList.add('message');
    message.classList.add('like__price');
    message.style.bottom = `${bottomPosition}px`;
    document.body.appendChild(message);


    setTimeout(() => {
        message.classList.add('slideIn');
    }, 100);

    setTimeout(() => {
        message.classList.remove('slideIn'); 
        message.classList.add('slideOut'); 
        setTimeout(() => {
            message.remove();
        }, 500);
    }, 3000);
}


  
  function removeMessage() {
      const message = document.querySelector('.message');
      if (message) {
          message.remove();
      }
  }
  

  function prevSlide(className) {
    const list = document.querySelector(className);
    const firstItem = list.firstElementChild;
    list.appendChild(firstItem);
  }

  function nextSlide(className) {
    const list = document.querySelector(className);
    const lastItem = list.lastElementChild;
    list.insertBefore(lastItem, list.firstElementChild);
  }