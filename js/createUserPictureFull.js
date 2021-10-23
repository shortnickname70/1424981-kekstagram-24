import {
  createComment
} from './createCard.js';
import {
  createCard
} from './createCard.js';
import {
  card
} from './createCard.js';

const bigPicture = document.querySelector('.big-picture');
bigPicture.classList.remove('hidden');

const userBigPictureArray = [];
for (let index = 0; index < 25; index++) {
  userBigPictureArray.push(createCard(index));
}

userBigPictureArray.forEach(({
  url,
  likes,
  comments
}) => {

  bigPicture.querySelector('.big-picture__img').setAttribute('src', url);
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  //вставляем комментарии начало
  const commentList = document.querySelector('.social__comments'); //куда вставляем новый коммент
  const commentTemplate = document.querySelector('.social__comment'); //шаблон коммента

  const someComment = createComment(); // вставляемый новый коммент
  const someCommentFragment = document.createDocumentFragment();

  const commentItem = commentTemplate.cloneNode(true);
  commentItem.querySelector('.social__picture').setAttribute('src', comments.avatar);
  commentItem.querySelector('.social__picture').setAttribute('alt', comments.userName);
  commentItem.querySelector('.social__text').textContent = comments.message;
  someCommentFragment.appendChild(commentItem);

  // someComment.forEach(({avatar, userName, message}) => {
  //   const commentItem = commentTemplate.cloneNode(true);
  //   commentItem.querySelector('.social__picture').src.textContent = avatar;
  //   commentItem.querySelector('.picture__likes').alt.textContent = userName;
  //   commentItem.querySelector('.social__text').textContent = message;
  //   someCommentFragment.appendChild(commentItem);
  // });
  commentList.appendChild(someCommentFragment);
  //вставляем комментарии конец

  bigPicture.querySelector('.social__caption').textContent = card.description;

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
