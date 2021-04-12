import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Title from '../../components/Title';
import routes from '../../routes';
import './HomePage.scss';

const HomePage = () => (
  <Container fixed>
    <Title title="Phonebook" />

    <p className="home-welcome">
      Welcome to your new phonebook!{' '}
      <NavLink to={routes.contacts}>Go to contacts</NavLink>
    </p>
  </Container>
);
export default HomePage;
