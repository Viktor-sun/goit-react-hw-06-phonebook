import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../redux/contacts';
import { contactsSelectors } from '../../redux/contacts';
import './Filter.scss';

const Filter = ({ inputValue, onChange }) => (
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

Filter.propsTypes = {
  inputValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  inputValue: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(actions.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
