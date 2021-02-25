import React from 'react';

const ContactListItem = ({ name, number, onDeleteContacts, id }) => (
  <>
    <span>
      {name}: {number}
    </span>

    <button
      className="contacts__button"
      type="button"
      onClick={() => onDeleteContacts(id)}
    >
      Delete
    </button>
  </>
);

export default ContactListItem;
