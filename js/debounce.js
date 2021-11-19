'use strict';
(function () {
  const DEBOUNCE_INTERVAL = 500; // ms

  const setDebounce = function (cb) {
    let lastTimeout = null;

    return function () {
      const parameters = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(() => {
        cb.apply(null, parameters);
      }, DEBOUNCE_INTERVAL);
    };
  };

  window.debounce = {
    set: setDebounce,
  };
})();
