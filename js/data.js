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


// проверяет нажатие клавиши эскейп

const isEscEvent = (evt) => evt.key === 'Escape';

// рандомайзер числа

function chooseNumber(from, to) {
  const number = from + Math.random() * (to + 1 - from);
  return Math.floor(number);
}

//рандомайзер элемента

const getRandomArrayElement = (elements) => elements[chooseNumber(0, elements.length - 1)];


export {isEscEvent};
export {getRandomArrayElement};
export {chooseNumber};
