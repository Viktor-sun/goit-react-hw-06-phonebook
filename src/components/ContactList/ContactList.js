import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactListItem from './ContactListItem';
import * as actions from '../../redux/contacts/contacts-actions';
import './ContactList.scss';

const ContactList = ({ filterContacts, onDeleteContacts }) => (
  <ul className="contacts">
    {filterContacts.map(({ id, name, number }) => (
      <li key={id} className="contacts__item">
        <ContactListItem
          name={name}
          number={number}
          onDelete={() => onDeleteContacts(id)}
        />
      </li>
    ))}
  </ul>
);

ContactList.propsTypes = {
  filterContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContacts: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

const getFilterContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLocaleLowerCase();

  return contacts.filter(
    ({ name, number }) =>
      name.toLocaleLowerCase().includes(normalizedFilter) ||
      number.includes(normalizedFilter),
  );
};

const mapStateToProps = state => ({
  filterContacts: getFilterContacts(
    state.contacts.items,
    state.contacts.filter,
  ),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContacts: id => dispatch(actions.deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
