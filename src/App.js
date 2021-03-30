import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { contactsOperations } from './redux/contacts';
import { contactsSelectors } from './redux/contacts';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import Title from './components/Title';
import './App.scss';

class App extends Component {
  state = {};
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <Container>
        {this.props.isLoading && (
          <Loader
            type="Audio"
            color="#fbd62a"
            height={100}
            width={100}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        )}

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

export default connect(mapStateToProps, mapDispatchToProps)(App);

// const App = () => (
//   <Container>
//     <Title />

//     <ContactForm />

//     <h2 className="contacts-title">Contacts</h2>
//     <Filter />
//     <ContactList />
//   </Container>
// );

// export default App;
