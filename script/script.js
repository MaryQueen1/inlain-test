const gallary = new Swiper(".gallary", {
  //! Основные настройки
  direction: "horizontal", // 'vertical', 'horizontal'
  loop: true, // true - круговой слайдер, false - слайдер с конечными положениями
  spaceBetween: 20, // расстояние между слайдами
  slidesPerView: 4, // кол-во активных слайдов
  // slidesPerGroup: 3, // кол-во пролистываемых слайдов

  //! Кнопки вперед и назад

  //! Адаптив слайдера
  breakpoints: {
    830: {
      spaceBetween: 20,
      slidesPerView: 4,
    },

    620: {
        spaceBetween: 20,
        slidesPerView: 3,
  
    },

    376: {
        spaceBetween: 0,
        slidesPerView: 2,
      },
  

    0: {
      spaceBetween: 0,
      slidesPerView: 1.5,
    },
  },
});
