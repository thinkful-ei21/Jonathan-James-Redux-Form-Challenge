import React from 'react';
import { reduxForm, Field, SubmissionError, focus } from 'redux-form';
import { isNotEmpty, required, isFiveChar, allNums } from '../validators';
import Input from './input';

class App extends React.Component {
  onSubmit(values) {
    return fetch(
      'https://us-central1-delivery-form-api.cloudfunctions.net/api/report',
      {
        method: 'POST',
        body: JSON.stringify(values)
      }
    )
      .then(res => {
        if (!res.ok) {
          return Promise.reject();
        }
        return console.log('Submitted with values', values);
      })
      .catch(() => {
        return Promise.reject(
          new SubmissionError({ _error: 'Error submitting form...' })
        );
      });
  }

  render() {
    let successMessage;
    if (this.props.submitSucceeded) {
      successMessage = (
        <div className="message message-success">
          Message submitted successfully!
        </div>
      );
    }

    let errorMessage;
    if (this.props.error) {
      errorMessage = (
        <div className="message message-error">{this.props.error}</div>
      );
    }
    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <h2>Report a problem with your delivery!</h2>
        {successMessage}
        {errorMessage}
        <Field
          name="trackingNumber"
          id="trackingNumber"
          type="text"
          component={Input}
          element="input"
          label="Tracking Number"
          validate={[required, isNotEmpty, isFiveChar, allNums]}
        />
        <Field
          name="issue"
          id="issue"
          component={Input}
          element="select"
          label="What is your issue"
          validate={[required]}
        >
          <option value="">Select an issue</option>
          <option value="not-delivered">My delivery hasn't arrived</option>
          <option value="wrong-item">The wrong item was delivered</option>
          <option value="missing-part">Part of my order was missing</option>
          <option value="damaged">Some of my order arrived damaged</option>
          <option value="other">Other (give some details below)</option>
        </Field>
        <Field
          name="details"
          id="details"
          component={Input}
          element="textarea"
          label="Give more details (optional)"
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'input',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('input', Object.keys(errors)[0]))
})(App);
