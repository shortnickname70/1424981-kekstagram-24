function chooseNumber(from, to) {
  let number = from + Math.random() * (to + 1 - from);
  return Math.floor(number);
}

chooseNumber(5, 10);

// имя_функции(проверяемая_строка, максимальная_длина);
// Результат: true, если строка проходит по длине, и false — если не проходит

function verifyStrokeLength(stroke, maxLength) {
let strokeLength =  stroke.length;
if (strokeLength <= maxLength) {
  return true
}
else {
  return false
}
}
verifyStrokeLength ('some text', 10)
