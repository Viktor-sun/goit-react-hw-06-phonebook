import React from 'react';

const ContactListItem = ({ name, number, onDeleteContacts, id }) => (
  <>
    <p>
      {name}: {number}
    </p>

    <button type="button" onClick={() => onDeleteContacts(id)}>
      Delete
    </button>
  </>
);

export default ContactListItem;
