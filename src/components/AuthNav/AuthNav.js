import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import './AuthNav.scss';

const AuthNav = () => (
  <>
    <Box mr={1}>
      <NavLink
        to={routes.login}
        className="AuthNav__link"
        activeClassName="AuthNav__link--active"
      >
        <Button color="inherit" variant="outlined">
          Log In
        </Button>
      </NavLink>
    </Box>
    <Box>
      <NavLink
        to={routes.register}
        className="AuthNav__link"
        activeClassName="AuthNav__link--active"
      >
        <Button color="secondary" variant="contained">
          Log Up
        </Button>
      </NavLink>
    </Box>
  </>
);
export default AuthNav;
