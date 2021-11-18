

(function () {
  const RANDOM_PICTURES_MAX_RANGE = 20;
  const RANDOM_PICTURES_AMOUNT = 10;

  const filters = document.querySelector('.img-filters');
  const filterDefault = filters.querySelector('#filter-default');
  const filterRandom = filters.querySelector('#filter-random');
  const filterDiscussed = filters.querySelector('#filter-discussed');
  const picturesContainer = document.querySelector('.pictures');

  const removeElements = window.util.removeElements;
  const addID = window.util.addID;
  const addtListenersPicture = window.preview.addtListenersPicture;
  const getFragment = window.picture.getFragment;
  const getArrayOfUniqueNumbers = window.util.getArrayOfUniqueNumbers;
  const set = window.debounce.set;

  // переключает класс активной кнопки

  const setActiveClass = function (element) {
    const activeButton = filters.querySelector('.img-filters__button--active');

    if (activeButton) {
      activeButton.classList.remove('img-filters__button--active');
    }

    element.classList.add('img-filters__button--active');
  };

  // отрисовывает фотографии по новой

  const rerenderPictures = function (pictures) {

    removeElements(picturesContainer);
    addID(pictures);
    picturesContainer.appendChild(getFragment(pictures));
    addtListenersPicture(pictures);
  };

  // фильтрует и отображает 10 случайных неповторяющихся фото

  const onRandomClick = set(() => {
    const uniqueArray = getArrayOfUniqueNumbers(RANDOM_PICTURES_MAX_RANGE, RANDOM_PICTURES_AMOUNT);

    const randomPictures = uniqueArray.map((number) => window.gallery.data[number]);

    rerenderPictures(randomPictures);
  });

  // сортирует обсуждаемые фото - т.е. по кол-ву комментариев

  const onDiscussedClick = set(() => {
    const copyData = window.gallery.data.slice();

    copyData.sort((a, b) => b.comments.length - a.comments.length);

    rerenderPictures(copyData);
  });

  // отображает фото в исходном порядке

  const onDefaultClick = set(() => {
    rerenderPictures(window.gallery.data);
  });

  // отображает блок с фильтрами

  const showFilters = function () {
    filterDiscussed.addEventListener('click', () => {
      setActiveClass(filterDiscussed);
      onDiscussedClick();
    });
    filterRandom.addEventListener('click', () => {
      setActiveClass(filterRandom);
      onRandomClick();
    });
    filterDefault.addEventListener('click', () => {
      setActiveClass(filterDefault);
      onDefaultClick();
    });

    filters.classList.remove('img-filters--inactive');
  };

  window.filter = {
    show: showFilters,
  };
})();
