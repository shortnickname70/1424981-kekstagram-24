import {
  chooseNumber
} from './chooseNumber-function.js';
import {
  CardsArray
} from './createCard.js';
import {
  card
} from './createCard.js';

const bigPicture = document.querySelector('.big-picture');

const appendComments = (comments) => {
  const commentList = document.querySelector('.social__comments'); //куда вставляем новый коммент
  const commentTemplate = document.querySelector('.social__comment'); //шаблон коммента

  // вставляемый новый коммент
  const someCommentFragment = document.createDocumentFragment();

  comments.forEach(({
    avatar,
    userName,
    message
  }) => {
    const commentItem = commentTemplate.cloneNode(true);
    commentItem.querySelector('.social__picture').setAttribute('src', avatar);
    commentItem.querySelector('.social__picture').setAttribute('alt', userName);
    commentItem.querySelector('.social__text').textContent = message;
    someCommentFragment.appendChild(commentItem);
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

const allPicuteresCollection = document.querySelectorAll('.picture');
allPicuteresCollection.forEach((item) => {
  item.addEventListener('click', (evt) => {
    bigPicture.classList.remove('hidden');
    const clickedElement = CardsArray.filter((filterItem) => filterItem.url === evt.target.getAttribute('src'));
    console.log(clickedElement[0], 'clickedElement');
    renderBigPicture(clickedElement[0]);
  });
});

// скрываем счётчик комментариев .social__comment-count и загрузки новых комментариев .comments-loader
const commentCounter = document.querySelector('.social__comment-count');
const commentLoader = document.querySelector('.comments-loader');
const classRemove = () => {
  if (!bigPicture.classList.contains('hidden')) {
    commentCounter.classList.add('hidden');
    commentLoader.classList.add('hidden');
  }

};
classRemove();

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
