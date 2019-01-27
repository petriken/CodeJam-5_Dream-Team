import thunk from 'redux-thunk';
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import {
  loadTranslations,
  setLocale,
  syncTranslationWithStore,
  i18nReducer,
} from 'react-redux-i18n';

const translationsObject = {
  en: {
    pages: {
      home: 'Home',
      producers: 'Directors',
    },
    intro: {
      title: 'Film directors of Belarus',
      text: 'Welcome to the culture portal, where you will find information about Belarusian film directors. Photos, facts from life, videos and more!',
      news: 'Director of the day',
      start: 'Start',
      devs: 'Developers of the website',
    },
    team: {
      member1: {
        name: 'Dmitriy Kunets',
        github: 'brateckrolikstudent',
        mail: 'ibelieveinarabbit@gmail.com',
        img: 'https://brateckrolikstudent.github.io/rsschool-codejam1-cv/images/avatar.jpg',
      },
      member2: {
        name: 'Anastasiya Mazura',
        github: 'AnastasiyaMazura',
        mail: 'mazura.anastasiya@gmail.com',
        img: 'https://anastasiyamazura.github.io/rsschool-codejam1-cv/img/Mazura_Anastasia.jpg',
      },
      member3: {
        name: 'Dzianis Kavalionak',
        github: 'dzianiskavalionak',
        mail: 'nereidy4@gmail.com',
        img: 'https://avatars2.githubusercontent.com/u/41955026?s=460&v=4',
      },
      member4: {
        name: 'Piotr Stashukevich',
        github: 'petriken',
        mail: 'petriken82@gmail.com',
        img: 'https://cdn.discordapp.com/attachments/537907151985704962/538789462943989773/photo.png',
      },
      member5: {
        name: 'Yana Bashtyk',
        github: 'yana-bashtyk',
        mail: 'yankabashtyk16@gmail.com',
        img: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/27973479_1736578996406233_261896360789868839_n.jpg?_nc_cat=107&_nc_ht=scontent-frx5-1.xx&oh=d49a9311ec8afaf37cb07a9ccec51f96&oe=5CB57C44',
      },
    },
    authors: {
      author1: {
        firstName: 'Ivan',
        lastName: 'Ivanov',
      },
      author2: {
        firstName: 'Petr',
        lastName: 'Petrov',
      },
    },
  },
  ru: {
    intro: {
      title: 'Режиссёры кино Беларуси',
      text: 'Добро пожаловать на культурный портал, где вы найдете информацию о белорусских режиссёрах кино. Фотографии, факты из жизни, видео и многое другое!',
      news: 'Режиссёр дня',
      start: 'Начать',
      devs: 'Разработчики сайта',
    },
    team: {
      member1: {
        name: 'Дмитрий Кунец',
        github: 'brateckrolikstudent',
        mail: 'ibelieveinarabbit@gmail.com',
        img: 'https://brateckrolikstudent.github.io/rsschool-codejam1-cv/images/avatar.jpg',
      },
      member2: {
        name: 'Анастасия Мазура',
        github: 'AnastasiyaMazura',
        mail: 'mazura.anastasiya@gmail.com',
        img: 'https://anastasiyamazura.github.io/rsschool-codejam1-cv/img/Mazura_Anastasia.jpg',
      },
      member3: {
        name: 'Денис Ковалёнок',
        github: 'dzianiskavalionak',
        mail: 'nereidy4@gmail.com',
        img: 'https://avatars2.githubusercontent.com/u/41955026?s=460&v=4',
      },
      member4: {
        name: 'Пётр Сташукевич',
        github: 'petriken',
        mail: 'petriken82@gmail.com',
        img: 'https://cdn.discordapp.com/attachments/537907151985704962/538789462943989773/photo.png',
      },
      member5: {
        name: 'Яна Баштык',
        github: 'yana-bashtyk',
        mail: 'yankabashtyk16@gmail.com',
        img: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/27973479_1736578996406233_261896360789868839_n.jpg?_nc_cat=107&_nc_ht=scontent-frx5-1.xx&oh=d49a9311ec8afaf37cb07a9ccec51f96&oe=5CB57C44',
      },
    },
    pages: {
      home: 'Главная',
      producers: 'Режиссёры',
    },
    authors: {
      author1: {
        firstName: 'Иван',
        lastName: 'Иванов',
      },
      author2: {
        firstName: 'Петр',
        lastName: 'Петров',
      },
    },
  },
};

let composeEnhancers = null;

/* eslint-disable no-underscore-dangle */
if (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
} else {
  composeEnhancers = compose;
}
/* eslint-enable no-underscore-dangle */

const store = createStore(
  combineReducers({ i18n: i18nReducer }),
  composeEnhancers(applyMiddleware(thunk)),
);


syncTranslationWithStore(store);
store.dispatch(loadTranslations(translationsObject));
store.dispatch(setLocale('en'));

export default store;
