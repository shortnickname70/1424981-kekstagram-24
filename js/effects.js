(() => {
  const EffectParameter = {
    chrome: {
      CLASS: 'effects__preview--chrome',
      NAME: 'grayscale',
      MIN_VALUE: 0,
      MAX_VALUE: 1,
      SCALE_DEG: '',
    },
    sepia: {
      CLASS: 'effects__preview--sepia',
      NAME: 'sepia',
      MIN_VALUE: 0,
      MAX_VALUE: 1,
      SCALE_DEG: '',
    },
    marvin: {
      CLASS: 'effects__preview--marvin',
      NAME: 'invert',
      MIN_VALUE: 0,
      MAX_VALUE: 100,
      SCALE_DEG: '%',
    },
    phobos: {
      CLASS: 'effects__preview--phobos',
      NAME: 'blur',
      MIN_VALUE: 0,
      MAX_VALUE: 3,
      SCALE_DEG: 'px',
    },
    heat: {
      CLASS: 'effects__preview--heat',
      NAME: 'brightness',
      MIN_VALUE: 1,
      MAX_VALUE: 3,
      SCALE_DEG: '',
    },
  };
  const sliderElement = document.querySelector('.img-upload__effect-level'); // слайдер
  const valueElement = document.querySelector('.effect-level__value'); //инпут, значение слайдера записывается сюда
  const imgPreviewElement = document.querySelector('.img-upload__preview img'); // загруженное изображение
  const effectsListElement = document.querySelector('.effects__list'); //список эффектов
  const defaultEffect = 'none';
  let currentEffectName = effectsListElement.querySelector('.effects__radio:checked'); // выбранный эффект по радио-кнопке

  const EffectValue = {
    MAX: 100,
    DEFAULT: 100,
  };

  //слайдер
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 100,
    },
    start: 50,
  });
  sliderElement.noUiSlider.on('update', (_, handle, unencoded) => {
    valueElement.value = unencoded[handle];
  });
  //

  const applyEffect = (value) => {
    if (currentEffectName === defaultEffect) {
      imgPreviewElement.style.filter = '';
    } else {
      // eslint-disable-next-line no-use-before-define
      imgPreviewElement.style.filter = `${EffectParameter[currentEffectName].NAME}(${getFilterValue(currentEffectName, value)})`;
    }
    // eslint-disable-next-line no-use-before-define
  };

  const onImageEffectClick = (evt) => {
    const target = evt.target;
    if (target.tagName !== 'INPUT') {
      return;
    }
    imgPreviewElement.classList = '';
    currentEffectName = target.value;
    imgPreviewElement.classList.add(`effects__preview--${currentEffectName}`);
    imgPreviewElement.style.filter = '';

    //скрытие слайдера, если выбран "Оригинал"
    if (currentEffectName === defaultEffect) {
      sliderElement.classList.add('hidden');
    } else {
      sliderElement.classList.remove('hidden');
    }
    valueElement.value = EffectValue.DEFAULT;
    applyEffect(EffectValue.DEFAULT);
  };

  const getFilterValue = (effect, value) => value * (EffectParameter[effect].MAX_VALUE - EffectParameter[effect].MIN_VALUE) / EffectValue.MAX + EffectParameter[effect].MIN_VALUE + EffectParameter[effect].SCALE_DEG;


  effectsListElement.addEventListener('click', onImageEffectClick);


})();
