import {
  isEscEvent
} from './utilits.js';

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


uploadNewFile.addEventListener('change', () => {
  uploadPopup.classList.remove('.hidden');
  body.classList.add('.modal-open');
});
