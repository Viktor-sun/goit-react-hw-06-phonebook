import React from 'react';
import ContactListItem from './ContactListItem';
import './ContactList.scss';

const ContactList = ({ filterContacts, onDeleteContacts }) => (
  <ul className="contacts">
    {filterContacts.map(({ id, name, number }) => (
      <li key={id} className="contacts__item">
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
