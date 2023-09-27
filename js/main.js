const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

new Swiper('.slide .swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000 // 
  },
  slidesPerView: 1, 
  spaceBetween: 10,
  centeredSlides: true, 
  pagination: { 
    el: '.slide .swiper-pagination', 
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { 
    nextEl: '.slide .swiper-btn-next', 
    prevEl: '.slide .swiper-btn-prev'
  }
});