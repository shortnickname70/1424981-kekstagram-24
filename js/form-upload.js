import {
  ESC_BUTTON,
  MOUSE_LEFT_BUTTON
} from './data.js';

const
  body = document.querySelector('body'),
  uploadSection = document.querySelector('.img-upload'),
  uploadNewFileForm = document.querySelector('.img-upload__form'),
  uploadNewFile = uploadSection.querySelector('#upload-file'),
  uploadSendButton = uploadSection.querySelector('.img-upload__submit'),
  uploadPopup = uploadSection.querySelector('.img-upload__overlay'),
  uploadPopupClose = uploadSection.querySelector('#upload-cancel'),
  hashtag = document.querySelector('.text__hashtags'),
  descriptionImage = document.querySelector('.text__description');
  const imgPreviewElement = document.querySelector('.img-upload__preview img'); // загруженное изображение
  const sliderElement = document.querySelector('.img-upload__effect-level'); // слайдер
  const successTemplate = document.querySelector('#success').content;
  

uploadNewFile.addEventListener('change', uploadNewFileHandler);

function uploadNewFileHandler(evt) {
 uploadPopup.classList.remove('hidden');
 body.classList.add('modal-open');
 uploadNewFile.removeEventListener('change', uploadNewFileHandler)
};

uploadPopupClose.addEventListener('click', ClosePopupHandler);
document.addEventListener('keydown', ClosePopupHandler);

function ClosePopupHandler(evt) {
  if (evt.button === MOUSE_LEFT_BUTTON || evt.keyCode === ESC_BUTTON) {
    uploadNewFileForm.reset();
    sliderElement.classList.add('visually-hidden');
    imgPreviewElement.className = 'effects__preview--none';
    imgPreviewElement.style.removeProperty('filter');
    uploadPopup.classList.add('hidden');
    body.classList.remove('modal-open');
    uploadNewFile.addEventListener('change', uploadNewFileHandler);
     }
};


// если фокус в поле ввода хэштега или комментария, то нажатие на Esc не приводит к закрытию формы
document.addEventListener('keydown', (evt) => {
  if (descriptionImage || hashtag === document.activeElement) {
    return evt;
  } else {
    if (evt.keyCode === 27) {
      uploadPopup.classList.add('hidden');
    }
  }
  document.removeEventListener('keydown', (evt));
});

//успешноая загрузка изображения
function successClosePopupHandler(evt) {
  if (evt.button === MOUSE_LEFT_BUTTON || evt.keyCode === ESC_BUTTON || evt.target !== document.querySelector('.success__inner')) {
    evt.preventDefault();
    document.removeEventListener('keydown', successClosePopupHandler);
    document.querySelector('.success__button').removeEventListener('click', successClosePopupHandler);
    document.querySelector('.success').removeEventListener('click', successClosePopupHandler);
    document.querySelector('.success').remove();
     }

};

function successUploadHanler () {
  uploadPopup.classList.add('hidden');
  body.classList.remove('modal-open');

  const successBlock = successTemplate.cloneNode(true);
  document.body.append(successBlock);
  document.addEventListener('keydown', successClosePopupHandler);
  document.querySelector('.success__button').addEventListener('click', successClosePopupHandler);
  document.querySelector('.success').addEventListener('click', successClosePopupHandler);
 };

const setUserFormSubmit = (onSuccess) => {
  uploadNewFileForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  fetch(
    'https://24.javascript.pages.academy/kekstagram',
    {
      redirect: 'error',
      method: 'POST',
      type: 'multipart/form-data',
      body: formData,
    },
  ).then(() => onSuccess())
  
});
};

setUserFormSubmit(successUploadHanler);

export {
  uploadPopup
};
