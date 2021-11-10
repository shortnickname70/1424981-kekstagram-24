(function () {
  const DEFAULT_LEVEL = 100;

  const levelLine = document.querySelector('.effect-level__line');
  const sliderPin = levelLine.querySelector('.effect-level__pin');
  const sliderDepth = levelLine.querySelector('.effect-level__depth');
  const imgPreview = document.querySelector('.img-upload__preview img');
  const sliderInput = document.querySelector('.effect-level__value');

  // задает глубину эффекта по умолчанию

  const setDefaultDepth = function () {
    sliderInput.value = DEFAULT_LEVEL;

  };

  // задает глубину эффекта фото

  const setEffectDepth = function () {

    const effect = imgPreview.classList.value.replace('effects__preview--', '');

    switch (effect) {
      case 'chrome':
        imgPreview.style.filter = 'grayscale';
        break;
      case 'sepia':
        imgPreview.style.filter = 'sepia';
        break;
      case 'marvin':
        imgPreview.style.filter = 'invert';
        break;
      case 'phobos':
        imgPreview.style.filter = 'blur';
        break;
      case 'heat':
        imgPreview.style.filter = 'brightness';
        break;
      default:
        imgPreview.style.filter = '';
    }
  };

  // реализует перетаскивание слайдера

  const onPinMousedown = function (evt) {
    evt.preventDefault();

    const levelLineWidth = levelLine.offsetWidth;
    let startCoordX = evt.clientX;

    const onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      const shift = startCoordX - moveEvt.clientX;
      const pinCoord = sliderPin.offsetLeft - shift;

      startCoordX = moveEvt.clientX;

      if (!(pinCoord < 0 || pinCoord > levelLineWidth)) {
        const pinCoordProportion = Math.round((pinCoord / levelLineWidth) * 100);

        sliderInput.value = pinCoordProportion;
        sliderPin.style.left = `${pinCoordProportion  }%`;
        sliderDepth.style.width = `${pinCoordProportion  }%`;
        setEffectDepth(sliderInput.value);
      }
    };

    const onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  window.slider = {
    setDefaultDepth: setDefaultDepth,
    onPinMousedown: onPinMousedown,
  };
})();
