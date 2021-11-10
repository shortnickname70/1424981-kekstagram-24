(() => {

  const ScaleValue = {
    MIN: 25,
    STEP: 25,
    MAX: 100,
    DEFAULT: 100,
  };

  const imgPreview = document.querySelector('.img-upload__preview');
  const scaleValueElement = document.querySelector('.scale__control--value'); //слайдер-полоска
  const scaleSmallerElement = document.querySelector('.scale__control--smaller'); //кнопка Уменьшить
  const scaleBiggerElement = document.querySelector('.scale__control--bigger'); // кнопка Увеличить

  const changePhotoScale = (value) => {
    ScaleValue.value = ScaleValue.DEFAULT;
    let currentScale = parseInt(scaleValueElement.value, 10);
    currentScale += ScaleValue.STEP * value;
    if (currentScale >= ScaleValue.MIN && currentScale <= ScaleValue.MAX || ScaleValue.DEFAULT) {
      scaleValueElement.value = `${currentScale}%`;
      currentScale = currentScale / 100;
      imgPreview.style.transform = `scale(${currentScale})`;
    }
    // if (currentScale >= ScaleValue.MAX || ScaleValue.DEFAULT) {
    //   imgPreview.style.transform = 'scale(1)';
    // }

    return currentScale;
  };

  scaleBiggerElement.addEventListener('click', () => {
    changePhotoScale(1);
  });


  scaleSmallerElement.addEventListener('click', () => changePhotoScale(-1));

})();
