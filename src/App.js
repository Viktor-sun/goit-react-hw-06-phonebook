import React, { Component } from 'react';
import shortid from 'shortid';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import './App.scss';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsString = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contactsString);

    if (parseContacts) {
      this.setState({ contacts: parseContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  handleFormSubmit = data => {
    const { name, number } = data;
    const { contacts } = this.state;

    contacts.some(contact => contact.name === name)
      ? alert(`${name} is already in contacts!`)
      : this.setState({
          contacts: [
            ...contacts,
            { id: shortid.generate(), name: name, number: number },
          ],
        });
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(
      ({ name, number }) =>
        name.toLocaleLowerCase().includes(normalizedFilter) ||
        number.includes(normalizedFilter),
    );
  };

  deleteContacts = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const filterContacts = this.getFilterContacts();

    return (
      <Container>
        <div className="wrapper-title">
          <h1 className="title">Phonebook</h1>
        </div>

        <ContactForm onSubmit={this.handleFormSubmit} />

        <h2 className="contacts-title">Contacts</h2>
        <Filter inputValue={filter} onChange={this.changeFilter} />
        <ContactList
          filterContacts={filterContacts}
          onDeleteContacts={this.deleteContacts}
        />
      </Container>
    );
  }
}

export default App;
