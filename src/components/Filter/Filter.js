import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/contacts';
import { contactsSelectors } from '../../redux/contacts';
import './Filter.scss';

const Filter = () => {
  const dispatch = useDispatch();
  const onChange = e => dispatch(actions.changeFilter(e.currentTarget.value));
  const inputValue = useSelector(contactsSelectors.getFilter);

  return (
    <label className="filter__field">
      <span className="filter__label">Find contacts by name</span>
      <input
        className="filter__input"
        type="text"
        name="filter"
        onChange={onChange}
        value={inputValue}
        placeholder="Enter name or number"
      />
    </label>
  );
};

export default Filter;
