'use strict';
import {
  createSmallPictures
} from './render-picrure.js';
import {
  chooseNumberCount
} from './data.js';


const RANDOM_PICTURES_MAX_RANGE = 24;
const RANDOM_PICTURES_AMOUNT = 10;

const filters = document.querySelector('.img-filters');
const filtersButtons = filters.querySelectorAll('.img-filters__button');

let pictures = [];

function beginFilteringProcess(pictureArray) {
  pictures = pictureArray;
  filters.classList.remove('img-filters--inactive');
  filtersButtons.forEach((button) => {
    button.addEventListener('click', filterHandler);
  });
}

function filterHandler(evt) {
  filtersButtons.forEach((button) => {
    evt.target.id === button.id ? button.classList.add('img-filters__button--active') : button.classList.remove('img-filters__button--active');
    if (evt.target.id === 'filter-default') {
      deletePictures();
      createSmallPictures(pictures);
    } else if (evt.target.id === 'filter-random') {
      const randomIndexesarray = chooseNumberCount(0, RANDOM_PICTURES_MAX_RANGE, RANDOM_PICTURES_AMOUNT);
      const randomPicturesArray = pictures.filter((item, index) => randomIndexesarray.includes(index));
      deletePictures();
      createSmallPictures(randomPicturesArray);
    } else {
      deletePictures();
      createSmallPictures(getPopularPictures(Array.from(new Set(pictures))));
    }
  });
}

function getPopularPictures(picturesArray) {
  return picturesArray.sort((a, b) => b.comments.length - a.comments.length);
}

function deletePictures() {
  document.querySelectorAll('.picture').forEach((item) => {
    item.remove();
  });
}

export {
  beginFilteringProcess
};
