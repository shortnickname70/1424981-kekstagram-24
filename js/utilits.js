// имя_функции(проверяемая_строка, максимальная_длина);
// Результат: true, если строка проходит по длине, и false — если не проходит

function verifyStrokeLength(stroke, maxLength) {
  const strokeLength = stroke.length;
  if (strokeLength <= maxLength) {
    return true;
  } else {
    return false;
  }
}
verifyStrokeLength('some text', 10);


const ESC_KEYCODE = 27;
const ENTER_KEYCODE = 13;

// проверяет нажатие клавиши энтер

const isEnterEvent = function (evt, action) {
  if (evt.keyCode === ENTER_KEYCODE) {
    action(evt);
  }
};

// проверяет нажатие клавиши эскейп

const isEscEvent = function (evt, action) {
  if (evt.keyCode === ESC_KEYCODE) {
    action(evt);
  }
};

export {isEnterEvent};
export {isEscEvent};
