let popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__subtitle');
let profileNameInput = document.querySelector('#nameInput');
let profileJobInput = document.querySelector('#jobInput');
let popupContainer = document.querySelector('.popup__container');
let popupButtonClose = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__content');
let profileEditButton = document.querySelector('.profile__edit-button');
let popupButtonSave = document.querySelector('.popup__save-button');


function openPopup (evt) {
  popup.classList.remove('popup_opened');
  profileNameInput.value = profileName.textContent;
  profileJobInput.value = profileDescription.textContent;
};

function closePopup(evt) {
  popup.classList.add('popup_opened');
};

function handleFormSabmit (evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileDescription.textContent = profileJobInput.value;
};

profileEditButton.addEventListener('click', openPopup);
popupButtonClose.addEventListener('click', closePopup);
popupButtonSave.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSabmit);
