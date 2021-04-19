import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import './UserMenu.scss';

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <>
      <IconButton
        color="inherit"
        onClick={handleClick}
        aria-label="open user menu"
      >
        <AccountCircleIcon fontSize="large" />
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <span className="UserMenu-name"> {name}</span>
        </MenuItem>
        <MenuItem onClick={() => dispatch(authOperations.logOut())}>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
