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
      producers: 'Producers',
    },
    application: {
      title: 'Hello World',
      text: 'This is a simple message',
    },
    intro: {
      title: 'Film directors of Belarus',
      text: 'Welcome to the cultural portal, where you will find information about Belarusian film directors. Photos, facts from life, videos and more!',
      news: 'Director of the day',
      start: 'Start',
      devs: 'Developers of the website',
    },
    team: {
      member1: {
        name: 'Dmitriy Kunets',
      },
      member2: {
        name: 'Anastasiya Mazura',
      },
      member3: {
        name: 'Dzianis Kavalionak',
      },
      member4: {
        name: 'Piotr Stashukevich',
      },
      member5: {
        name: 'Yana Bashtyk',
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
    application: {
      title: 'Привет мир',
      text: 'Это простое сообщение',
    },
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
      },
      member2: {
        name: 'Анастасия Мазура',
      },
      member3: {
        name: 'Денис Ковалёнок',
      },
      member4: {
        name: 'Пётр Сташукевич',
      },
      member5: {
        name: 'Яна Баштык',
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
