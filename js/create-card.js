import {
  chooseNumber,
  getRandomArrayElement
} from './data.js';

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

let CardsArray = [];

// const loadPictures = createLoader();
// loadPictures().then((data) => {
//   CardsArray = data;
// })
// .catch((err) => {
//   console.log(err);
//   alert( "Не удалось загрузить данные" );
//  });



const createComment = () => ({
  commentId: chooseNumber(1, 10000),
  avatar: `img/avatar-${chooseNumber(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGE),
  userName: getRandomArrayElement(USER_NAME),
});

function CreateCommentList(length) {
  return Array.from({
    length: length,
  },
  createComment,
  );

}

// comments end

let card = [];
// eslint-disable-next-line arrow-body-style
const createCard = (index) => {
  return {
    photo: index,
    url: `photos/${index+1}.jpg`,
    description: DESCRIPTION[index],
    likes: chooseNumber(15, 200),
    comments: CreateCommentList(chooseNumber(1, 12)),
  };
};

// const commentArray = [];

// for (let index = 0; index < 25; index++) {
//   commentArray.push(createCard(index));
// }


// for (let index = 0; index < 25; index++) {
//   CardsArray.push(createCard(index));
// }
// card = createCard(chooseNumber(1, 24));

export {
  createCard
};
export {
  createComment
};
export {
  card
};
export {
  CardsArray
};
