import shortid from 'shortid';
import * as actionTypes from './contacts-types';

export const addContacts = (name, number) => ({
  type: actionTypes.ADD,
  payload: { id: shortid.generate(), name, number },
});

export const deleteContacts = id => ({
  type: actionTypes.DELETE,
  payload: id,
});

export const changeFilter = value => ({
  type: actionTypes.CHANGE_FILTER,
  payload: value,
});
