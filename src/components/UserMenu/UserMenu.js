import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

const UserMenu = ({ name, onLogout }) => {
  return (
    <>
      <span>Welcome, {name}</span>

      <Button variant="contained" color="secondary" onClick={onLogout}>
        Logout
      </Button>
    </>
  );
};

const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
