import {createCard} from './createCard.js';
import {card} from './createCard.js';
const pictureTemplate = document.querySelector('#picture').content
  .querySelector('.picture');
const userPicturesList = document.querySelector('.pictures');


const similarUserPictures = createCard();
const similarUserFragment = document.createDocumentFragment();


similarUserPictures.forEach(() => {

  const pictureBlock = pictureTemplate.cloneNode(true);
  pictureBlock.querySelector('.picture__img').src.textContent = card.url;
  pictureBlock.querySelector('.picture__likes').textContent = card.likes;
  pictureBlock.querySelector('.picture__comments').count = card.comments;
  similarUserFragment.appendChild(pictureBlock);
});

userPicturesList.appendChild(similarUserFragment);

