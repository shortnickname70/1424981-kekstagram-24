'use strict';
// имя_функции(проверяемая_строка, максимальная_длина);
// Результат: true, если строка проходит по длине, и false — если не проходит
function verifyStrokeLength(stroke, maxLength) {
  const STROKE_LENGTH = stroke.length;
  if (STROKE_LENGTH <= maxLength) {
    return true;
  } else {
    return false;
  }
}
verifyStrokeLength('some text', 10);

// проверяет нажатие клавиши эскейп

const isEscEvent = (evt) => evt.key === 'Escape';

// рандомайзер энного количества неповторяющихся цифр

function chooseNumberCount(from, to, count) {
  let array = [];
  while (Array.from(new Set(array)).length < count) {
    const number = Math.ceil(from + Math.random() * (to + 1 - from));
    array = Array.from(new Set(array));
    array.push(number);
  }
  return array;
}

//клавиши и левая кнопка мыши
const ESC_BUTTON = 27;
const MOUSE_LEFT_BUTTON = 0;

export {
  isEscEvent
};

export {
  chooseNumberCount
};
export {
  ESC_BUTTON
};
export {
  MOUSE_LEFT_BUTTON
};
