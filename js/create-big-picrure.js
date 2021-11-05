/* eslint-disable id-length */
import {
  CardsArray
} from './create-card.js';

import {
  ESC_BUTTON,
  MOUSE_LEFT_BUTTON
} from './data.js';

const commentCountStart = 5;
const bigPicture = document.querySelector('.big-picture');
const commentList = document.querySelector('.social__comments'); //куда вставляем новый коммент
const commentCounter = document.querySelectorAll('.social__comment-count');
const commentLoader = document.querySelector('.comments-loader');

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
    commentCounter.textContent = `${clickedPicture.comments.length +2 }из${ clickedPicture.comments.length +2 }комментари`;
    commentLoader.classList.add('hidden');
  }
  // if (clickedPicture.comments.length + 2 % 5) {
  //   commentLoader.classList.add('hidden');
  // }
}


// вставляем по 5 комментов
let commentInc = 9;

function renderComment() {
  const commentsArray = document.querySelectorAll('.social__comment');
  for (let i = commentCountStart; i <= commentInc; i++) {
    if (commentsArray[i]) {
      commentsArray[i].classList.remove('hidden');
    } else {
      commentLoader.removeEventListener('click', renderComment);
      commentLoader.classList.add('hidden');

      return;
    }
  }

  commentInc = commentInc + 5;
}

function eventHandler(evt) {
  if (evt.button === MOUSE_LEFT_BUTTON || evt.keyCode === ESC_BUTTON) {
    commentLoader.classList.remove('hidden');
    evt.preventDefault();
    document.querySelectorAll('.picture').forEach((item) => {
      item.removeEventListener('click', eventHandler);
    });
    bigPicture.classList.remove('hidden');

    const clickedElement = CardsArray.filter((filterItem) => filterItem.url === evt.target.getAttribute('src'));
    renderBigPicture(clickedElement[0]);

    const commentItems = document.querySelectorAll('.social__comment');
    if (commentItems.length >= 5) {
      for (let i = commentCountStart; i <= commentItems.length - 1; i++) {
        commentItems[i].classList.add('hidden');
      }
    }

    commentLoader.addEventListener('click', renderComment);
  }
}

document.querySelectorAll('.picture').forEach((item) => {
  item.addEventListener('click', eventHandler);
});

//добавляем и удаляем у <body> класс modal-open, чтобы контейнер с фотографиями позади не прокручивался при скролле
//оставить только if , убрать функцию и ее вызов

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
  commentInc = 9;
  const commentsArray1 = document.querySelectorAll('.social__comment');
  /** поместить в отдельную функцию, убрать повторения поиска комментов commentsArray1 */
  commentsArray1.forEach((el) => {
    /** Array.from(это содает новый массив, так как el.classlist возможно коллекция */
    if (Array.from(el.classList).filter((item) => item === 'social__comment--cloned').length > 0) {
      commentList.removeChild(el);
    }
  });
  bigPicture.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {

  if (evt.keyCode === 27) {
    document.querySelectorAll('.picture').forEach((item) => {
      item.addEventListener('click', eventHandler);
    });
    commentInc = 9;
    const commentsArray1 = document.querySelectorAll('.social__comment');
    commentsArray1.forEach((el) => {
      if (Array.from(el.classList).filter((item) => item === 'social__comment--cloned').length > 0) {
        commentList.removeChild(el);
      }
    });
    bigPicture.classList.add('hidden');
  }
});

// Необходимо поместить логику добавления и снятия прослушивания в отдельную функцию, упростить
//и избежать повторений как commentsArray1, возможно через глобальную переменную
