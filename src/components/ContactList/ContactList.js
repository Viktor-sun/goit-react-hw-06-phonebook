import React from 'react';
import ContactListItem from './ContactListItem';

const ContactList = ({ filterContacts, onDeleteContacts }) => (
  <ul>
    {filterContacts.map(({ id, name, number }) => (
      <li key={id}>
        <ContactListItem
          name={name}
          number={number}
          onDeleteContacts={onDeleteContacts}
          id={id}
        />
      </li>
    ))}
  </ul>
);

export default ContactList;
