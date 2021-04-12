import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddIcCallIcon from '@material-ui/icons/AddIcCall';
import IconButton from '@material-ui/core/IconButton';
import Spinner from '../../components/Spinner';
import Container from '../../components/Container';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';
import Modal from '../../components/Modal';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import './ContactsPage.scss';

class ContactsPage extends Component {
  state = { showModal: false };

  componentDidMount() {
    this.props.fetchContacts();
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <Container>
        {this.props.isLoading && <Spinner />}

        <h2 className="contacts-title">Contacts</h2>

        <IconButton aria-label="add contact" onClick={this.toggleModal}>
          <AddIcCallIcon fontSize="large" color="primary" />
        </IconButton>
        <span>total contacts: 0</span>

        <Filter />
        <ContactList />

        {showModal && (
          <Modal onCloseModal={this.toggleModal}>
            <ContactForm onSave={this.toggleModal} />
          </Modal>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
