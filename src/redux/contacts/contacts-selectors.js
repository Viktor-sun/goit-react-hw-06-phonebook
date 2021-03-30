import { createSelector } from '@reduxjs/toolkit';

const getAllContacts = state => state.contacts.items;

const getLoading = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const getFilterContacts = createSelector(
  [getAllContacts, getFilter],

  (contacts, filter) => {
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(
      ({ name, number }) =>
        name.toLocaleLowerCase().includes(normalizedFilter) ||
        number.includes(normalizedFilter),
    );
  },
);

const selectors = { getAllContacts, getLoading, getFilter, getFilterContacts };
export default selectors;
