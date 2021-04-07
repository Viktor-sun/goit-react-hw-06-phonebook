import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import './Navigation.scss';

const Navigation = () => (
  <List component="nav" aria-label="main mailbox folders">
    <NavLink
      exact
      to={routes.home}
      className="Navlink"
      activeClassName="Navlink-active"
    >
      <ListItem button>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </NavLink>
    <NavLink
      to={routes.contacts}
      className="Navlink"
      activeClassName="Navlink-active"
    >
      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Contacts" />
      </ListItem>
    </NavLink>
  </List>
);

export default Navigation;
