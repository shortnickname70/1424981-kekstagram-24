/* eslint-disable id-length */
import {
  CardsArray
} from './create-card.js';

const bigPicture = document.querySelector('.big-picture');

const appendComments = (comments) => {
  const commentList = document.querySelector('.social__comments'); //куда вставляем новый коммент
  const commentItem = document.querySelector('.social__comment'); //шаблон коммента

  // вставляемый новый коммент
  const someCommentFragment = document.createDocumentFragment();

  comments.forEach(({
    avatar,
    userName,
    message,
  }) => {
    const commentClone = commentItem.cloneNode(true);
    commentClone.querySelector('.social__picture').setAttribute('src', avatar);
    commentClone.querySelector('.social__picture').setAttribute('alt', userName);
    commentClone.querySelector('.social__text').textContent = message;
    someCommentFragment.appendChild(commentClone);
  });

  commentList.appendChild(someCommentFragment);
};

function renderBigPicture(clickedPicture) {

  bigPicture.querySelector('.big-picture__image').setAttribute('src', clickedPicture.url);
  bigPicture.querySelector('.likes-count').textContent = clickedPicture.likes;
  bigPicture.querySelector('.comments-count').textContent = clickedPicture.comments.length;
  appendComments(clickedPicture.comments);
  bigPicture.querySelector('.social__caption').textContent = clickedPicture.description;
}

let commentInc = 10;

function renderComment(commentsArray) {
  for (let i = 5; i <= commentInc; i++) {
    if (commentsArray[i]) {
      commentsArray[i].classList.remove('hidden');
    } else {
      return;
    }
  }
  commentInc = commentInc + 5;
}

document.querySelectorAll('.picture').forEach((item) => {
  item.addEventListener('click', (evt) => {
    bigPicture.classList.remove('hidden');
    const clickedElement = CardsArray.filter((filterItem) => filterItem.url === evt.target.getAttribute('src'));
    renderBigPicture(clickedElement[0]);


    //  счётчик комментариев .social__comment-count и загрузки новых комментариев .comments-loader
    const commentCounter = document.querySelectorAll('.social__comment-count');
    const commentLoader = document.querySelector('.comments-loader');
    const commentItems = document.querySelectorAll('.social__comment');


    // eslint-disable-next-line no-empty
    if (commentItems.length >= 5) {
      for (let i = 5; i <= commentItems.length - 1; i++) {
        commentItems[i].classList.add('hidden');
      }
    }

    commentLoader.addEventListener('click', () => {
      renderComment(commentItems);
    });
  });
});

//добавляем  и удаляем у <body> класс modal-open, чтобы контейнер с фотографиями позади не прокручивался при скролле
const bodyClassAdd = () => {
  if (!bigPicture.classList.contains('hidden')) {
    document.body.classList.add('modal-open');
  }

};
bodyClassAdd();
const bodyClassRemove = () => {
  if (bigPicture.classList.contains('hidden')) {
    document.body.classList.remove('modal-open');
  }

};
bodyClassRemove();

//закрытие окна bigPicture по нажатию клавиши Esc и клике по иконке закрытия

const bigPictureCloseButton = document.querySelector('.big-picture__cancel');

bigPictureCloseButton.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    bigPicture.classList.add('hidden');
  }
});

//
