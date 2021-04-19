import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import IconButton from '@material-ui/core/IconButton';
import Spinner from '../../components/Spinner';
import Container from '../../components/Container';
import FormAddContact from '../../components/FormAddContact';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';
import Modal from '../../components/Modal';
import Title from '../../components/Title';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import './ContactsPage.scss';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(contactsSelectors.getLoading);
  const totalContacts = useSelector(contactsSelectors.getTotalContactsCount);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const toggleModal = useCallback(
    () => setShowModal(prevShowModal => !prevShowModal),
    [],
  );

  return (
    <Container>
      {isLoading && <Spinner />}

      <Title title="Contacts" />

      <div className="wrapper-stats">
        <IconButton aria-label="add contact" onClick={toggleModal}>
          <AddIcCallIcon fontSize="large" color="primary" />
        </IconButton>
        <p className="contacts-total">
          total contacts:
          <span className="contacts-total__count"> {totalContacts}</span>
        </p>
      </div>

      <Filter />
      <ContactList />

      {showModal && (
        <Modal onCloseModal={toggleModal}>
          <FormAddContact onSave={toggleModal} />
        </Modal>
      )}
    </Container>
  );
}
