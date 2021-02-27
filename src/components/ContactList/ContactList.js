import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
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

export default ContactList;
