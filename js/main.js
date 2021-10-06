function chooseNumber(from, to) {
  const number = from + Math.random() * (to + 1 - from);
  return Math.floor(number);
}

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

// массивы

const PHOTO_ID = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

const URL_NUMBER = chooseNumber(1, 25);
const URL_ADDRESS = `photos/${  URL_NUMBER  }.jpg`;

const DESCRIPTION = [
  'на каникулах1',
  'на каникулах2',
  'на каникулах3',
  'на каникулах4',
  'на каникулах5',
  'в осеннем лесу1',
  'в осеннем лесу2',
  'в осеннем лесу3',
  'в осеннем лесу4',
  'в осеннем лесу5',
  'рабочие будни1',
  'рабочие будни2',
  'рабочие будни3',
  'рабочие будни4',
  'рабочие будни5',
  'боулинг с друзями1',
  'боулинг с друзями2',
  'боулинг с друзями3',
  'боулинг с друзями4',
  'боулинг с друзями5',
  'на даче у бабули1',
  'на даче у бабули2',
  'на даче у бабули3',
  'на даче у бабули4',
  'на даче у бабули5',
];

const LIKES = chooseNumber(15, 200);

const getRandomArrayElement = (elements) => elements[_.random(0, elements.length - 1)];
// comments start
const COMMENT_ID = chooseNumber(1, 10000);

const URL_AVATAR = chooseNumber(1, 6);
const AVATAR = `img/avatar${  URL_AVATAR  }.svg`;

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ? !',
];

const NAME = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];
const createComment = () => ({
  id: COMMENT_ID,
  avatar: AVATAR,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAME),
});
const COMMENTS = Array.from({
  length: 50,
}, createComment);

// comments end

const createCard = () => ({
  photo: getRandomArrayElement(PHOTO_ID),
  url: getRandomArrayElement(URL_ADDRESS),
  description: getRandomArrayElement(DESCRIPTION),
  likes: LIKES,
  comments: getRandomArrayElement(COMMENTS),
});

const CARD = Array.from({
  length: 25,
}, createCard);

CARD;
