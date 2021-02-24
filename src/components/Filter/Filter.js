import React from 'react';

const Filter = ({ value, onChange }) => (
  <div>
    <label>
      Find contacts by name
      <input type="text" name="filter" onChange={onChange} value={value} />
    </label>
  </div>
);

export default Filter;
