'use strict';
(() => {
  const EFFECT_PARAMETER = {
    chrome: {
      CLASS: 'effects__preview--chrome',
      NAME: 'grayscale',
      MIN: 0,
      MAX: 1,
      SCALE_DEG: '',
      STEP: 0.1,
    },
    sepia: {
      CLASS: 'effects__preview--sepia',
      NAME: 'sepia',
      MIN: 0,
      MAX: 1,
      SCALE_DEG: '',
      STEP: 0.1,
    },
    marvin: {
      CLASS: 'effects__preview--marvin',
      NAME: 'invert',
      MIN: 0,
      MAX: 100,
      SCALE_DEG: '%',
      STEP: 0.1,
    },
    phobos: {
      CLASS: 'effects__preview--phobos',
      NAME: 'blur',
      MIN: 0,
      MAX: 3,
      SCALE_DEG: 'px',
      STEP: 0.1,
    },
    heat: {
      CLASS: 'effects__preview--heat',
      NAME: 'brightness',
      MIN: 1,
      MAX: 3,
      SCALE_DEG: '',
      STEP: 0.1,
    },
    none: {
      CLASS: 'effects__preview--none',
      NAME: 'original',
      MIN: 0,
      MAX: 100,
      SCALE_DEG: '',
      STEP: 1,
    },
  };
  const sliderElement = document.querySelector('.img-upload__effect-level'); // слайдер
  const valueElement = document.querySelector('.effect-level__value'); //инпут, значение слайдера записывается сюда
  const imgPreviewElement = document.querySelector('.img-upload__preview img'); // загруженное изображение
  const effectsListElement = document.querySelector('.effects__list'); //список эффектов
  const defaultEffect = 'none';
  let currentEffectName = effectsListElement.querySelector('.effects__radio:checked'); // выбранный эффект по радио-кнопке
  const effectsListInput = document.querySelectorAll('.effects__radio'); // эффекты-картинки-они-же-инпуты


  //слайдер
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 100,
    },
    start: 50,
    step: 1,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });


  const getFilterValue = (effect, value) => value + EFFECT_PARAMETER[effect].SCALE_DEG;

  sliderElement.classList.add('visually-hidden');

  effectsListInput.forEach((effectInput) => {
    effectInput.addEventListener('change', (evt) => {
      if (evt.target.value === 'none') {
        sliderElement.classList.add('visually-hidden');
        imgPreviewElement.className = 'effects__preview--none';
        imgPreviewElement.style.removeProperty('filter');
      } else {
        sliderElement.classList.remove('visually-hidden');
        currentEffectName = evt.target.value;
        imgPreviewElement.className = `effects__preview--${currentEffectName}`;
        sliderElement.noUiSlider.updateOptions({
          range: {
            min: EFFECT_PARAMETER[currentEffectName].MIN,
            max: EFFECT_PARAMETER[currentEffectName].MAX,
          },
          start: EFFECT_PARAMETER[currentEffectName].MAX,
          step: EFFECT_PARAMETER[currentEffectName].STEP,
        });
      }
    });
  });
  sliderElement.noUiSlider.on('update', (values, handle) => {
    valueElement.value = values[handle];

    if (EFFECT_PARAMETER[currentEffectName] && currentEffectName !== defaultEffect) {

      imgPreviewElement.style.filter = `${EFFECT_PARAMETER[currentEffectName].NAME}(${getFilterValue(currentEffectName,
        values[handle])})`;
    }

  });
})();
