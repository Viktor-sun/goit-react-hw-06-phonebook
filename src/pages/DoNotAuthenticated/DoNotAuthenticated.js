import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Title from '../../components/Title';
import routes from '../../routes';
import './DoNotAuthenticated.scss';

const DoNotAuthenticated = () => {
  return (
    <Container fixed>
      <Title title="Please Login!"></Title>
      <p className="DoNotAuthenticated__description">
        You need to <NavLink to={routes.login}>log in</NavLink> or{' '}
        <NavLink to={routes.register}>log up</NavLink> to use the phone book.
      </p>
    </Container>
  );
};

export default DoNotAuthenticated;
