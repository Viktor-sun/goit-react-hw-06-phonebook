import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { contactsOperations } from '../../redux/contacts';
import './FormUpdateContact.scss';

export default function FormUpdateContact({ contactData, onUpdate }) {
  const dispatch = useDispatch();
  const [id, setId] = useState(contactData.id);

  const [name, setName] = useState(contactData.name);
  const handleChangeName = e => setName(e.currentTarget.value);

  const [number, setNumber] = useState(contactData.number);
  const handleChangeNumber = e => setNumber(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();
    const updatedContact = { id, name, number };

    dispatch(contactsOperations.updateContacts(updatedContact));
    onUpdate();
    reset();
  };

  const reset = () => {
    setId('');
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
          autoFocus
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
        Update contact
      </button>
    </form>
  );
}

FormUpdateContact.propsTypes = {
  onUpdate: PropTypes.func.isRequired,
  contactData: PropTypes.object.isRequired,
};
