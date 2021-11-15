(() => {
  const EffectParameter = {
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
      STEP: 1,
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
    original: {
      CLASS: 'effects__preview--none',
    },
  };
  const sliderElement = document.querySelector('.img-upload__effect-level'); // слайдер
  const valueElement = document.querySelector('.effect-level__value'); //инпут, значение слайдера записывается сюда
  const imgPreviewElement = document.querySelector('.img-upload__preview img'); // загруженное изображение
  const effectsListElement = document.querySelector('.effects__list'); //список эффектов
  // const defaultEffect = 'none';
  let currentEffectName = effectsListElement.querySelector('.effects__radio:checked'); // выбранный эффект по радио-кнопке
  const effectsListInput = document.querySelector('.effects__radio'); // эффекты-картинки-они-же-инпуты


  // const EffectValue = {
  //   MAX: 100,
  //   DEFAULT: 100,
  // };

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
  sliderElement.noUiSlider.on('update', (values, handle) => {
    valueElement.value = values[handle];
  });
  //

  // const applyEffect = (value) => {
  //   if (currentEffectName === defaultEffect) {
  //     imgPreviewElement.style.filter = '';
  //   } else {
  //     // eslint-disable-next-line no-use-before-define
  //     imgPreviewElement.style.filter = `${EffectParameter[currentEffectName].NAME}(${getFilterValue(currentEffectName, value)})`;
  //   }
  //   // eslint-disable-next-line no-use-before-define
  // };

  // const onImageEffectClick = (evt) => {
  //   const target = evt.target;
  //   if (target.tagName === 'input') {
  //     return;
  //   }
  //   imgPreviewElement.classList = '';
  //   currentEffectName = target.value;
  //   imgPreviewElement.classList.add(`effects__preview--${currentEffectName}`);
  //   imgPreviewElement.style.filter = '';

  //   //скрытие слайдера, если выбран "Оригинал"
  //   if (currentEffectName === defaultEffect) {
  //     sliderElement.classList.add('hidden');
  //   } else {
  //     sliderElement.classList.remove('hidden');
  //   }
  //   valueElement.value = EffectValue.DEFAULT;
  //   applyEffect(EffectValue.DEFAULT);
  // };

  // const getFilterValue = (effect, value) => value * (EffectParameter[effect].MAX_VALUE - EffectParameter[effect].MIN_VALUE) / EffectValue.MAX + EffectParameter[effect].MIN_VALUE + EffectParameter[effect].SCALE_DEG;


  // effectsListElement.addEventListener('click', onImageEffectClick);


  effectsListInput.addEventListener('change', (evt) => {
    // if (evt.target.checked === EffectParameter.original)
    if (evt.target.checked.child.classList.contains('effects__preview--none')) {
      sliderElement.classList.add('visually-hidden');
    } else {
      sliderElement.classList.remove('visually-hidden');
      currentEffectName = evt.target.value;
      imgPreviewElement.classList.add(`effects__preview--${currentEffectName}`);
      sliderElement.noUiSlider.updateOptions({
        range: {
          min: EffectParameter[currentEffectName].MIN,
          max: EffectParameter[currentEffectName].MAX,
        },
        start: EffectParameter[currentEffectName].MAX,
        step: EffectParameter[currentEffectName].STEP,
      });
    }
    // else {
    //   sliderElement.noUiSlider.updateOptions({
    //     range: {
    //       min: 0,
    //       max: 100,
    //     },
    //     step: 1,
    //   });
    //   // sliderElement.noUiSlider.set(100);
    // }
  });
})();


//https://up.htmlacademy.ru/profession/frontender/11/javascript/demos/5989#16
