import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { contactsOperations } from '../../redux/contacts';
import './UpdateContactForm.scss';

class UpdateContactForm extends Component {
  state = {
    id: this.props.contactData.id,
    name: this.props.contactData.name,
    number: this.props.contactData.number,
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onUpdate, onSubmit } = this.props;

    onSubmit(this.state);
    onUpdate();
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label className="form__field">
          <span className="form__label">Name</span>
          <input
            className="form__input"
            type="text"
            name="name"
            onChange={this.handleChange}
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
            onChange={this.handleChange}
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
}

UpdateContactForm.propsTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onSubmit: contactsOperations.updateContacts,
};

export default connect(null, mapDispatchToProps)(UpdateContactForm);
