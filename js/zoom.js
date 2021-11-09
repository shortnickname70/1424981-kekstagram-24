(() => {

  const ScaleValue = {
    MIN: 25,
    STEP: 25,
    MAX: 100,
  };

  const imgPreview = document.querySelector('.img-upload__preview');
  const scaleElement = document.querySelector('.img-upload__scale');
  const scaleValueElement = scaleElement.querySelector('.scale__control--value');
  const scaleSmallerElement = scaleElement.querySelector('.scale__control--smaller');
  const scaleBiggerElement = scaleElement.querySelector('.scale__control--bigger');

  const setPhotoScale = (value) => {
    let currentScale = parseInt(scaleValueElement.value, 10);
    currentScale += ScaleValue.STEP * value;
    if (currentScale >= ScaleValue.MIN && currentScale <= ScaleValue.MAX) {
      scaleValueElement.value = `${currentScale}%`;
      currentScale = currentScale / 100;
      imgPreview.style.transform = `scale(${currentScale})`;
    }
    return currentScale;
  };

  scaleSmallerElement.addEventListener('click', () => setPhotoScale(-1));

  scaleBiggerElement.addEventListener('click', () => setPhotoScale(1));

})();
