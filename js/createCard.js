import {chooseNumber} from './chooseNumber-function.js';

// массивы

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

const getRandomArrayElement = (elements) => elements[chooseNumber(0, elements.length - 1)];
// comments start

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо.Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.Как можно было поймать такой неудачный момент ? !',
];

const USER_NAME = [
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
  commentId: chooseNumber(1, 10000),
  avatar: `img/avatar${chooseNumber(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGE),
  userName: getRandomArrayElement(USER_NAME),
});
const COMMENTS = Array.from(
  {
    length: 50,
  },
  createComment,
);

// comments end

let card = [];
// eslint-disable-next-line arrow-body-style
const createCard = (index) => {
  return {
    photo: index,
    url: `photos/${index}.jpg`,
    description: DESCRIPTION[index],
    likes: chooseNumber(15, 200),
    comments: getRandomArrayElement(COMMENTS),
  };
};

// const CARD = Array.from(
//   {
//     length: 25,
//   },
//   createCard,
// );

const commentArray = [];

for (let index = 0; index < 25; index++) {
  commentArray.push(createCard(index));
}

card = createCard();

export {createCard};
export {card};
