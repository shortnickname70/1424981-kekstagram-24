import {CardsArray} from './create-card.js';

const pictureTemplate = document.querySelector('#picture').content
  .querySelector('.picture');
const userPicturesList = document.querySelector('.pictures');


// const similarUserPictures = createCard();
const similarUserFragment = document.createDocumentFragment();

CardsArray.forEach(({url, likes, comments}) => {

  const pictureBlock = pictureTemplate.cloneNode(true);
  pictureBlock.querySelector('.picture__img').setAttribute('src', url);
  pictureBlock.querySelector('.picture__likes').textContent = likes;
  pictureBlock.querySelector('.picture__comments').textContent = comments.length;
  similarUserFragment.appendChild(pictureBlock);
});

userPicturesList.appendChild(similarUserFragment);

