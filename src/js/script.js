document.addEventListener('DOMContentLoaded', function () {
  const searchHotelButton = document.querySelector('.search__btn');
  const modal = document.querySelector('.modal__container');
  const searchButtonClose = document.querySelector('.modal-close-button');

  searchHotelButton.addEventListener('click', function () {
    modal.classList.remove('modal-close');
  });
  searchButtonClose.addEventListener('click', function () {
    modal.classList.add('modal-close');
  });
});
