import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import './Navigation.scss';

const Navigation = ({ onCloseDrawer }) => (
  <List component="nav" aria-label="main mailbox folders">
    <NavLink
      exact
      to={routes.home}
      className="Navlink"
      activeClassName="Navlink-active"
      onClick={onCloseDrawer}
    >
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </NavLink>
    <NavLink
      to={routes.contacts}
      className="Navlink"
      activeClassName="Navlink-active"
      onClick={onCloseDrawer}
    >
      <ListItem button>
        <ListItemIcon>
          <RecentActorsIcon />
        </ListItemIcon>
        <ListItemText primary="Contacts" />
      </ListItem>
    </NavLink>
  </List>
);

Navigation.propTypes = {
  onCloseDrawer: PropTypes.func.isRequired,
};

export default Navigation;
