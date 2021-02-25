import React from 'react';
import './Filter.scss';

const Filter = ({ value, onChange }) => (
  <label className="filter__field">
    <span className="filter__label">Find contacts by name</span>
    <input
      className="filter__input"
      type="text"
      name="filter"
      onChange={onChange}
      value={value}
      placeholder="Enter name or number"
    />
  </label>
);

export default Filter;
