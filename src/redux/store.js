import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from './contacts/contacts-reducer';

// const initialState = {
//   contacts: {
//     items: [],
//     filter: '',
//   },
// };

// ====================
const getPreloadedState = () => {
  const contactsString = localStorage.getItem('contacts');
  const parseContacts = JSON.parse(contactsString);

  if (parseContacts) {
    return {
      contacts: {
        items: parseContacts,
        filter: '',
      },
    };
  }
};
const preloadedState = getPreloadedState();

// const preloadedParse = localStorage.getItem('contacts')
//   ? JSON.parse(localStorage.getItem('contacts'))
//   : {};

// =========================

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, preloadedState, composeWithDevTools());

// ================================
store.subscribe(() => {
  localStorage.setItem(
    'contacts',
    JSON.stringify(store.getState().contacts.items),
  );
});
// =====================================

export default store;
