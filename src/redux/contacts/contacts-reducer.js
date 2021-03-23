import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as action from './contacts-actions';

const itemsReducer = createReducer([], {
  [action.addContacts]: (state, { payload }) => [...state, payload],
  [action.deleteContacts]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [action.changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
