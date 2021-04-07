import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../components/Spinner';
import Container from '../../components/Container';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';
import Title from '../../components/Title';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import './ContactsPage.scss';

class ContactsPage extends Component {
  state = {};
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Container>
        {this.props.isLoading && <Spinner />}

        <Title />

        <ContactForm />

        <h2 className="contacts-title">Contacts</h2>
        <Filter />
        <ContactList />
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
