new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        576: { slidesPerView: 1 },  // 📱 Телефони
        768: { slidesPerView: 2 },  // 📱📲 Планшети
        1024: { slidesPerView: 3 }, // 🖥️ Ноутбуки
        1200: { slidesPerView: 4 }  // 🖥️ Великі монітори
    }
});    
  