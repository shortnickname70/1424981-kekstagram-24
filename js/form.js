//https://coderoad.ru/46155/%D0%9A%D0%B0%D0%BA-%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%B8%D1%82%D1%8C-%D0%B0%D0%B4%D1%80%D0%B5%D1%81-email-%D0%B2-JavaScript
// валидация хэштегов
// const testHashtag = RegExp('/^#[A-Za-zА-Яа-яЁё0-9]{2,19}$/', 'g');
import {
  uploadPopup
} from './form-upload.js';

const addHashtag = document.querySelector('.text__hashtags');

(() => {

  const HASHTAG = {
    maxHashtags: 5,
    hashtagSymbol: '#',
    maxLength: 20,
  };


  const checkRepeatHashtags = (hashtags) => {
    for (let i = 0; i < hashtags.length; i++) {
      const currentHashtag = hashtags[i];
      for (let j = 0; j < hashtags.length; j++) {
        if (currentHashtag === hashtags[j] && i !== j) {
          return true;
        }
      }
    }
    return false;
  };


  // const testRegex = (hashtags) =>  testHashtag.test(hashtags);

  const hashtagValidity = () => {
    addHashtag.style.outline = '';
    let errorMessage = '';
    const hashtagValue = addHashtag.value.trim();

    if (hashtagValue === '') {
      addHashtag.setCustomValidity(errorMessage);
      return;
    }
    const hashtags = hashtagValue.toLowerCase().split(' ');
    hashtags.forEach((hashtagItem) => {
      if (hashtagItem.charAt(0) !== HASHTAG.hashtagSymbol) {
        errorMessage = 'Начинайте хэштег с символа #';
      } else if (hashtagItem.indexOf(HASHTAG.hashtagSymbol, 1) > 1) {
        errorMessage = 'Между хэштегами должен быть пробел';
      } else if (hashtagItem.charAt(0) === HASHTAG.hashtagSymbol && hashtagItem.length === 1) {
        errorMessage = 'Хештег не должен состоять только из одной решётки';
      } else if (hashtags.length > HASHTAG.maxHashtags) {
        errorMessage = 'Максимальное количество  хэштегов не более 5';
      } else if (hashtagItem.length > HASHTAG.maxLength) {
        errorMessage = 'Максимальная длина одного хэштега 20 символов, включая решётку';
      } else if (checkRepeatHashtags(hashtags)) {
        errorMessage = 'Хэштеги не должны повторяться';
      }
      const toTestRegexHashtag = addHashtag.value;
      const testHashtag = RegExp('/^#[A-Za-zА-Яа-яЁё0-9]{2,19}$/', 'g');
      if (!testHashtag.test(toTestRegexHashtag)) {
        errorMessage = 'Введите корректные символы';
        return false;
      }
      // else if (testRegex(hashtags)) {
      //   errorMessage = 'Введите корректные символы';
      // }
    });

    addHashtag.setCustomValidity(errorMessage);
  };

  addHashtag.addEventListener('input', hashtagValidity);

})();


// //валидация комментов

(() => {

  const COMMENT = {
    maxCommentLength: 140,
  };

  const addComment = document.querySelector('.text__description');


  const commentValidity = () => {
    addComment.style.outline = '';
    let errorCommentMessage = '';
    const commentValue = addComment.value.trim();

    if (commentValue === '') {
      addComment.setCustomValidity(errorCommentMessage);
      return;
    }
    const newComment = commentValue.toLowerCase().split(' ');
    newComment.forEach((commentItem) => {
      if (commentItem.length > COMMENT.maxCommentLength) {
        errorCommentMessage = 'Максимальная длина одного хэш-тега 20 символов, включая решётку';
      }
    });

    addComment.setCustomValidity(errorCommentMessage);
  };

  addComment.addEventListener('input', commentValidity);

})();

