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

import translations from '../locales';

const translationsObject = {
  ...translations,
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
