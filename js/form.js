import {
  uploadPopup
} from './form-upload.js';
//   const testHashtag = RegExp('/^#[A-Za-zА-Яа-яЁё0-9]{2,19}$/', 'g');

(() => {

  const HASHTAG = {
    maxHashtags: 5,
    hashtagSymbol: '#',
    maxLength: 20,
  };


  const addHashtag = document.querySelector('.text__hashtags'),
    uploadSubmitElement = document.querySelector('.img-upload__submit');

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
        errorMessage = 'Максимальная длина одного хэш-тега 20 символов, включая решётку';
      } else if (checkRepeatHashtags(hashtags)) {
        errorMessage = 'Хэштеги не должны повторяться';
      }
    });

    addHashtag.setCustomValidity(errorMessage);
  };

  addHashtag.addEventListener('input', hashtagValidity);

  const highlightInvalidField = (field) => {
    if (!field.validity.valid) {
      field.style.outline = '2px solid red';
    } else {
      field.style.outline = 'none';
    }
  };

  uploadSubmitElement.addEventListener('click', () => {
    highlightInvalidField(addHashtag);
  });

  uploadSubmitElement.addEventListener('submit', () => {
    highlightInvalidField(addHashtag);
  });

})();


// //валидация комментов
// const appHashtag = document.querySelector('.text__hashtags');
// const addComment = document.querySelector('.social__footer-text');
// const MIN_COMMENT_LENGTH = 1;
// const MAX_COMMENT_LENGTH = 140;

// addComment.addEventListener('input', () => {
//   const valueCommentLength = addComment.value.length;
//   if (valueCommentLength < MIN_COMMENT_LENGTH) {
//     addComment.setCustomValidity(`Введите еще ${  MIN_COMMENT_LENGTH - valueCommentLength } симв.`);
//   } else if (valueCommentLength > MAX_COMMENT_LENGTH) {
//     addComment.setCustomValidity(`Удалите лишние ${  valueCommentLength - MAX_COMMENT_LENGTH } симв.`);
//   } else {
//     addComment.setCustomValidity('');
//   }

//   addComment.reportValidity();
// });

(() => {

  const COMMENT = {
    maxCommentLength: 140,
  };

  const addComment = document.querySelector('.text__description'),
    uploadSubmitElement = document.querySelector('.img-upload__submit');

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

  const commentInvalidField = (field) => {
    if (!field.validity.valid) {
      field.style.outline = '2px solid red';
    } else {
      field.style.outline = 'none';
    }
  };

  uploadSubmitElement.addEventListener('click', () => {
    commentInvalidField(addComment);
  });

  uploadSubmitElement.addEventListener('submit', () => {
    commentInvalidField(addComment);
  });

})();

//в фокусе не должен закрываться при esc

// const toRemoveWindow = function (focusInHashtagField) {
//   if (focusInHashtagField === true) {
//     document.removeEventListener('keydown', (evt) => {
//       if (evt.keyCode === 27) {
//         uploadPopup.classList.add('hidden');
//       }
//     });
//   } else {
//     document.addEventListener('keydown', (evt) => {
//       if (evt.keyCode === 27) {
//         uploadPopup.classList.add('hidden');
//       }
//     });

//   }
// };
// appHashtag.addEventListener('focus', () => {
//   toRemoveWindow(true);
// });

// appHashtag.addEventListener('blur', () => {
//   toRemoveWindow(false);
// });
