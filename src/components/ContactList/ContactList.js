import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactListItem from './ContactListItem';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import './ContactList.scss';
import Modal from '../Modal';
import UpdateContactForm from '../UpdateContactForm';

const ContactList = ({ filterContacts, onDeleteContacts }) => {
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
              onDelete={() => onDeleteContacts(id)}
              onOpenModal={() => setDataAndToggleModal({ id, name, number })}
            />
          </li>
        ))}
      </ul>

      {showModal && (
        <Modal onCloseModal={toggleModal}>
          <UpdateContactForm contactData={contact} onUpdate={toggleModal} />
        </Modal>
      )}
    </>
  );
};

ContactList.propsTypes = {
  filterContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContacts: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  filterContacts: contactsSelectors.getFilterContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContacts: id => dispatch(contactsOperations.deleteContacts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
