import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import './FormAddContact.scss';

export default function FormAddContact({ onSave }) {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getAllContacts);

  const [name, setName] = useState('');
  const handleChangeName = e => setName(e.currentTarget.value);

  const [number, setNumber] = useState('');
  const handleChangeNumber = e => setNumber(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = { name, number };

    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`${name} is already in contacts!`)
      : dispatch(contactsOperations.addContacts(newContact));

    onSave();
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="form__field">
        <span className="form__label">Name</span>
        <input
          className="form__input"
          type="text"
          name="name"
          onChange={handleChangeName}
          value={name}
          placeholder="Vasya Pupkin"
          required
        />
      </label>
      <label className="form__field">
        <span className="form__label">Number</span>
        <input
          className="form__input"
          type="tel"
          name="number"
          onChange={handleChangeNumber}
          value={number}
          placeholder="+380112223344"
          pattern="[+0-9]{10,13}"
          required
        />
        <span className="form__error">
          This field should contain a phone number in the format +380112223344
        </span>
      </label>
      <button className="form__button" type="submit">
        Add contact
      </button>
    </form>
  );
}

FormAddContact.propsTypes = {
  onSave: PropTypes.func.isRequired,
};
