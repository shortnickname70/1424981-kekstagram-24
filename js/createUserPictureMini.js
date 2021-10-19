import {createCard} from './createCard.js';


const pictureTemplate = document.querySelector('#picture').content
  .querySelector('.picture');
const userPicturesList = document.querySelector('.pictures');


const similarUserPictures = createCard();
const similarUserFragment = document.createDocumentFragment();


similarUserPictures.forEach(({url, likes, comments}) => {

  const pictureBlock = pictureTemplate.cloneNode(true);
  pictureBlock.querySelector('.picture__img').src.textContent = url;
  pictureBlock.querySelector('.picture__likes').textContent = likes;
  pictureBlock.querySelector('.picture__comments').textContent = comments.length;
  similarUserFragment.appendChild(pictureBlock);
});

userPicturesList.appendChild(similarUserFragment);

