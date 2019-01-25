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
    pages: {
      home: 'Главная',
      producers: 'Режиссеры',
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
