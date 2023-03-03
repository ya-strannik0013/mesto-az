let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__subtitle');
let profileEditButton = document.querySelector('.profile__edit-button');

let nameInput = document.querySelector('#nameInput');
let jobInput = document.querySelector('#jobInput');

let popup = document.querySelector('.popup');
let popupButtonClose = document.querySelector('.popup__close-button');

let formElement = document.querySelector('.popup__content');

function openPopup (evt) {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
};

function closePopup(evt) {
  popup.classList.remove('popup_opened');
};

function handleFormSabmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup ();
};

profileEditButton.addEventListener('click', openPopup);
popupButtonClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSabmit);