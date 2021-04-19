import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import ContactListItem from './ContactListItem';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import './ContactList.scss';
import Modal from '../Modal';
import FormUpdateContact from '../FormUpdateContact';

export default function ContactList() {
  const dispatch = useDispatch();
  const filterContacts = useSelector(contactsSelectors.getFilterContacts);

  const [showModal, setshowModal] = useState(false);
  const [contact, setcontact] = useState(null);

  const toggleModal = useCallback(
    () => setshowModal(prevShow => !prevShow),
    [],
  );

  const setDataAndToggleModal = contact => {
    setcontact(contact);
    toggleModal();
  };

  return (
    <>
      <ul className="contacts">
        {filterContacts.map(({ id, name, number }) => (
          <li key={id} className="contacts__item">
            <ContactListItem
              name={name}
              number={number}
              onDelete={() => dispatch(contactsOperations.deleteContacts(id))}
              onOpenModal={() => setDataAndToggleModal({ id, name, number })}
            />
          </li>
        ))}
      </ul>

      {showModal && (
        <Modal onCloseModal={toggleModal}>
          <FormUpdateContact contactData={contact} onUpdate={toggleModal} />
        </Modal>
      )}
    </>
  );
}

ContactList.propsTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
