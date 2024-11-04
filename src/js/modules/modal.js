const signUpBtn = document.querySelector(".menu-header__btn-up");
const headerPopup = document.querySelector(".popup-header");
const headerPopupContent = document.querySelector(".popup-header__content");
const popupHeaderClose = document.querySelector(".popup-header__close");

const documentWidthWithScrollbar = document.documentElement.clientWidth; // Узнаём ширину документа со скроллбаром

function showModal() {
  headerPopup.classList.add("active");
  document.body.style.overflow = "hidden"; // убираем прокрутку окна. Так правильно и все так делают. Тут мы добавляем к боди свойство оверфлоу хидден в инлайн стили
  const documentWidthWithoutScrollbar = document.documentElement.clientWidth; // Узнаём ширину документа без скроллбаром
  const scrollbarWidth =
    documentWidthWithoutScrollbar - documentWidthWithScrollbar; //считаем ширину скролбара
  document.body.style.paddingRight = scrollbarWidth + "px"; //Добавляем отступ справа к боди, чтоб контент не прыгал при появлении модалки. попробуй закомментить эту строку и увидишь
}

function closeModal() {
  headerPopup.classList.remove("active");
  document.body.style = null; // убираем все добавленные инлайн стили у боди
}

signUpBtn.addEventListener("click", showModal);

popupHeaderClose.addEventListener("click", closeModal);

headerPopup.addEventListener("click", ({ target }) => {
  if (!target.closest(".popup-header__content")) {
    closeModal();
  }
});
