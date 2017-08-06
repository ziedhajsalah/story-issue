import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import R from 'ramda';
import ButtonLarge from '../atoms/ButtonLarge';
import withColor from '../HOCs/withColor';
import withIcon from '../HOCs/withIcon';

const ButtonAddGreen = R.compose(withIcon('add'), withColor('success'));
const AddButton = ButtonAddGreen(ButtonLarge);

const renderInput = ({
  type,
  input,
  label,
  meta: { touched, error, warning },
}) => (
  <div
    className={`pt-form-group${error && touched ? ' pt-intent-danger' : ''}`}
  >
    <label htmlFor={input.name} className="pt-label">
      {label}
    </label>
    <div className="pt-form-content">
      <input
        type={type}
        {...input}
        id={input.name}
        className="pt-input pt-round pt-large"
      />
      {error &&
        touched &&
        <div className="pt-form-helper-text">
          {error}
        </div>}
    </div>
  </div>
);

class ClientAddForm extends Component {
  submitForm = formValues => this.props.addClient(formValues);
  render() {
    const { indicators, handleSubmit, pristine, valid } = this.props;
    return (
      <form onSubmit={handleSubmit(this.submitForm)}>
        <fieldset>
          <Field name="name" label="Nom" type="text" component={renderInput} />
          <Field
            name="codeTVA"
            label="Code TVA"
            type="text"
            component={renderInput}
          />
          <Field
            name="address"
            label="Addresse"
            type="text"
            component={renderInput}
          />
          <Field name="phone" label="Tel" type="text" component={renderInput} />
          <Field
            name="email"
            label="Email"
            type="email"
            component={renderInput}
          />
          {indicators && indicators.submitting
            ? <div className="pt-progress-bar pt-intent-success">
              <div className="pt-progress-meter" style={{ width: '100%' }} />
            </div>
            : <AddButton
              action="submit"
              type="submit"
              text="Ajouter"
              disabled={!valid || pristine}
            />}
        </fieldset>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const warn = values => {
  const warnings = {};
  if (!values.codeTVA) {
    warnings.codeTVA = 'le code tva vous aide pour chercher le client';
  }
  return warnings;
};

export default reduxForm({
  form: 'clientAdd',
  validate,
  warn,
})(ClientAddForm);
