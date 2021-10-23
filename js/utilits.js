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

export {isEscEvent};
