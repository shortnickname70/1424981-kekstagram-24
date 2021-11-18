import {
  createLoader
} from './server.js';

import {
  ESC_BUTTON,
  MOUSE_LEFT_BUTTON
} from './data.js';

const COMMENT_COUNT_START = 5;
const bigPicture = document.querySelector('.big-picture');
const commentList = document.querySelector('.social__comments'); //куда вставляем новый коммент
const commentCounter = document.querySelectorAll('.social__comment-count');
const commentLoader = document.querySelector('.comments-loader');


let cardsArray = [];

/** Загружаем картинки с бэка */
const loadPictures = createLoader();
loadPictures().then((data) => {
  cardsArray = data;
  createSmallPictures(data);
})
  // .catch((err) => {
  //   err = 'Не удалось загрузить данные';
  //   alert(err);
  // });
  .catch((err) => {
    console.log(err);
    alert('Не удалось загрузить данные');
  });

const pictureTemplate = document.querySelector('#picture').content
  .querySelector('.picture');
const userPicturesList = document.querySelector('.pictures');

const similarUserFragment = document.createDocumentFragment();

function createSmallPictures(picturesArray) {
  picturesArray.forEach(({
    url,
    likes,
    comments,
  }) => {

    const pictureBlock = pictureTemplate.cloneNode(true);
    pictureBlock.querySelector('.picture__img').setAttribute('src', url);
    pictureBlock.querySelector('.picture__likes').textContent = likes;
    pictureBlock.querySelector('.picture__comments').textContent = comments.length;
    similarUserFragment.appendChild(pictureBlock);
  });

  userPicturesList.appendChild(similarUserFragment);
  document.querySelectorAll('.picture').forEach((item) => {
    item.addEventListener('click', eventHandler);
  });
}

/** */
const appendComments = (comments) => {
  const commentItem = document.querySelector('.social__comment'); //шаблон коммента

  // вставляемый новый коммент
  const someCommentFragment = document.createDocumentFragment();

  comments.forEach(({
    avatar,
    userName,
    message,
  }) => {
    const commentClone = commentItem.cloneNode(true);
    commentClone.classList.add('social__comment--cloned');
    commentClone.querySelector('.social__picture').setAttribute('src', avatar);
    commentClone.querySelector('.social__picture').setAttribute('alt', userName);
    commentClone.querySelector('.social__text').textContent = message;
    someCommentFragment.appendChild(commentClone);
  });

  commentList.appendChild(someCommentFragment);
};

// открываем большую картинку при клике на маленькую
function renderBigPicture(clickedPicture) {
  bigPicture.querySelector('.big-picture__image').setAttribute('src', clickedPicture.url);
  bigPicture.querySelector('.likes-count').textContent = clickedPicture.likes;
  bigPicture.querySelector('.comments-count').textContent = clickedPicture.comments.length + 2;
  appendComments(clickedPicture.comments);
  bigPicture.querySelector('.social__caption').textContent = clickedPicture.description;
  if (clickedPicture.comments.length + 2 <= 5) {
    commentCounter.textContent = `${clickedPicture.comments.length +2 }из${ clickedPicture.comments.length +2 }комментариев`;
    commentLoader.classList.add('hidden');
  }
}


// вставляем по 5 комментов
let COMMENT_INC = 9;

function renderComment() {
  const commentsArray = document.querySelectorAll('.social__comment');
  for (let i = COMMENT_COUNT_START; i <= COMMENT_INC; i++) {
    if (commentsArray[i]) {
      commentsArray[i].classList.remove('hidden');
    } else {
      commentLoader.removeEventListener('click', renderComment);
      commentLoader.classList.add('hidden');

      return;
    }
  }

  COMMENT_INC = COMMENT_INC + 5;
}

/** */
function eventHandler(evt) {
  if (evt.button === MOUSE_LEFT_BUTTON || evt.keyCode === ESC_BUTTON) {
    commentLoader.classList.remove('hidden');
    evt.preventDefault();
    document.querySelectorAll('.picture').forEach((item) => {
      item.removeEventListener('click', eventHandler);
    });
    bigPicture.classList.remove('hidden');

    const clickedElement = cardsArray.filter((filterItem) => filterItem.url === evt.target.getAttribute('src'));
    renderBigPicture(clickedElement[0]);

    const commentItems = document.querySelectorAll('.social__comment');
    if (commentItems.length >= 5) {
      for (let i = COMMENT_COUNT_START; i <= commentItems.length - 1; i++) {
        commentItems[i].classList.add('hidden');
      }
    }

    commentLoader.addEventListener('click', renderComment);
  }
}

//добавляем и удаляем у <body> класс modal-open, чтобы контейнер с фотографиями позади не прокручивался при скролле

if (!bigPicture.classList.contains('hidden')) {
  document.body.classList.add('modal-open');
}

if (bigPicture.classList.contains('hidden')) {
  document.body.classList.remove('modal-open');
}


//закрытие окна bigPicture по нажатию клавиши Esc и клике по иконке закрытия

const bigPictureCloseButton = document.querySelector('.big-picture__cancel');
bigPictureCloseButton.addEventListener('click', () => {
  document.querySelectorAll('.picture').forEach((item) => {
    item.addEventListener('click', eventHandler);
  });
  COMMENT_INC = 9;
  const commentsArray1 = document.querySelectorAll('.social__comment');
  /** поместить в отдельную функцию, убрать повторения поиска комментов commentsArray1 */
  commentsArray1.forEach((el) => {

    if (Array.from(el.classList).filter((item) => item === 'social__comment--cloned').length > 0) {
      commentList.removeChild(el);
    }
  });
  bigPicture.classList.add('hidden');
});

/** */
document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    document.querySelectorAll('.picture').forEach((item) => {
      item.addEventListener('click', eventHandler);
    });
    COMMENT_INC = 9;
    const commentsArray1 = document.querySelectorAll('.social__comment');
    commentsArray1.forEach((el) => {
      if (Array.from(el.classList).filter((item) => item === 'social__comment--cloned').length > 0) {
        commentList.removeChild(el);
      }
    });
    bigPicture.classList.add('hidden');
  }
});
