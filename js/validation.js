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


  // валидация хэштегов

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
    });

    addHashtag.setCustomValidity(errorMessage);
  };

  addHashtag.addEventListener('input', hashtagValidity);

})();


//валидация комментов

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
