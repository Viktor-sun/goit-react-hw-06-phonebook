import axios from 'axios';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  updateContactRequest,
  updateContactSuccess,
  updateContactError,
} from './contacts-actions';
import notifications from '../../pnotify';

const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error.message)));
};

const addContacts = contact => dispatch => {
  dispatch(addContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => {
      dispatch(addContactSuccess(data));
      notifications.sucess('Contact added.');
    })
    .catch(error => {
      dispatch(addContactError(error.message));
      notifications.error(error.message);
    });
};

const deleteContacts = id => dispatch => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(deleteContactSuccess(id));
      notifications.sucess('Contact deleted.');
    })
    .catch(error => {
      dispatch(deleteContactError(error.message));
      notifications.error(error.message);
    });
};

const updateContacts = contact => dispatch => {
  const { id, name, number } = contact;
  dispatch(updateContactRequest());

  axios
    .patch(`/contacts/${id}`, { name, number })
    .then(() => {
      dispatch(updateContactSuccess(contact));
      notifications.sucess('Contact updated.');
    })
    .catch(error => {
      dispatch(updateContactError(error.message));
      notifications.error(error.message);
    });
};

const operations = {
  fetchContacts,
  addContacts,
  deleteContacts,
  updateContacts,
};
export default operations;
