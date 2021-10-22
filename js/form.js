//валидация хэштегов
const appHashtag = document.querySelector('.text__hashtags');
const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 20;

appHashtag.addEventListener('input', () => {
  const valueLength = appHashtag.value.length;
  const testHashtag = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  if (valueLength < MIN_NAME_LENGTH) {
    appHashtag.setCustomValidity(`Введите еще ${  MIN_NAME_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    appHashtag.setCustomValidity(`Удалите лишние ${  valueLength - MAX_NAME_LENGTH } симв.`);
  } else {
    appHashtag.setCustomValidity('');
  }
  if (appHashtag.value.match(testHashtag)) {
    appHashtag.setCustomValidity('Введите корректные символы');
  }
  else {
    appHashtag.setCustomValidity('');
  }
  appHashtag.reportValidity();
});

//валидация комментов
const appComment = document.querySelector('.social__footer-text');
const MIN_COMMENT_LENGTH = 1;
const MAX_COMMENT_LENGTH = 140;

appComment.addEventListener('input', () => {
  const valueCommentLength = appComment.value.length;
  if (valueCommentLength < MIN_COMMENT_LENGTH) {
    appComment.setCustomValidity(`Введите еще ${  MIN_COMMENT_LENGTH - valueCommentLength } симв.`);
  } else if (valueCommentLength > MAX_COMMENT_LENGTH) {
    appComment.setCustomValidity(`Удалите лишние ${  valueCommentLength - MAX_COMMENT_LENGTH } симв.`);
  } else {
    appComment.setCustomValidity('');
  }

  appComment.reportValidity();
});
