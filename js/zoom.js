'use strict';
(() => {

  const SCALE_VALUE = {
    MIN: 25,
    STEP: 25,
    MAX: 100,
    DEFAULT: 100,
  };

  const imgPreview = document.querySelector('.img-upload__preview img');
  const scaleValueElement = document.querySelector('.scale__control--value'); //слайдер-полоска
  const scaleSmallerElement = document.querySelector('.scale__control--smaller'); //кнопка Уменьшить
  const scaleBiggerElement = document.querySelector('.scale__control--bigger'); // кнопка Увеличить

  const changePhotoScale = (value) => {
    SCALE_VALUE.value = SCALE_VALUE.DEFAULT;
    let currentScale = parseInt(scaleValueElement.value, 10);
    currentScale += SCALE_VALUE.STEP * value;
    if (currentScale >= SCALE_VALUE.MIN && currentScale <= SCALE_VALUE.MAX || SCALE_VALUE.DEFAULT) {
      scaleValueElement.value = `${currentScale}%`;
      currentScale = currentScale / 100;
      imgPreview.style.transform = `scale(${currentScale})`;
    }
    return currentScale;
  };

  scaleBiggerElement.addEventListener('click', () => changePhotoScale(1));

  scaleSmallerElement.addEventListener('click', () => changePhotoScale(-1));

})();
