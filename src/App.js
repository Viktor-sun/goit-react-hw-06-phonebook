import React from 'react';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import Title from './components/Title';
import './App.scss';

const App = () => (
  <Container>
    <Title />

    <ContactForm />

    <h2 className="contacts-title">Contacts</h2>
    <Filter />
    <ContactList />
  </Container>
);

export default App;
