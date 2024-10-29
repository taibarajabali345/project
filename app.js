// const carousels = document.querySelectorAll('.carousel');

// carousels.forEach((carousel) => {
//   const track = carousel.querySelector('.carousel-track');
//   const leftButton = carousel.querySelector('.left-btn');
//   const rightButton = carousel.querySelector('.right-btn');
//   const items = carousel.querySelectorAll('.carousel-item');

//   let currentIndex = 0;

//   function updateCarousel() {
//     const itemWidth = items[0].offsetWidth;
//     track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
//   }

//   rightButton.addEventListener('click', () => {
//     if (currentIndex < items.length - 1) {
//       currentIndex++;
//     } else {
//       currentIndex = 0; 
//     }
//     updateCarousel();
//   });

//   leftButton.addEventListener('click', () => {
//     if (currentIndex > 0) {
//       currentIndex--;
//     } else {
//       currentIndex = items.length - 1; 
//     }
//     updateCarousel();
//   });
// });


const carousels = document.querySelectorAll('.carousel-container');

carousels.forEach((carousel) => {
  const track = carousel.querySelector('.carousel-track');
  const leftButton = carousel.querySelector('.left-btn');
  const rightButton = carousel.querySelector('.right-btn');
  const itemWidth = 170; // Width of each item plus margin

  let position = 0;

  rightButton.addEventListener('click', () => {
    position -= itemWidth;
    if (position < -(track.children.length - 5) * itemWidth) {
      position = 0; // Reset to start
    }
    track.style.transform = `translateX(${position}px)`;
  });

  leftButton.addEventListener('click', () => {
    position += itemWidth;
    if (position > 0) {
      position = -(track.children.length - 5) * itemWidth; // Go to end
    }
    track.style.transform = `translateX(${position}px)`;
  });
});


