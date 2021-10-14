function chooseNumber(from, to) {
  const number = from + Math.random() * (to + 1 - from);
  return Math.floor(number);
}

export {chooseNumber};
