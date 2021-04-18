import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const ContactListItem = ({ name, number, onDelete, onOpenModal }) => (
  <>
    <span>
      {name}: {number}
    </span>

    <div className="contacts__wrapper-button">
      <IconButton aria-label="edit" color="primary" onClick={onOpenModal}>
        <EditIcon />
      </IconButton>
      <IconButton aria-label="delete" color="primary" onClick={onDelete}>
        <DeleteIcon />
      </IconButton>
    </div>
  </>
);

ContactListItem.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
};

export default ContactListItem;
