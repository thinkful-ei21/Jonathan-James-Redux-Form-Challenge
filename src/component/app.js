import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { isNotEmpty, required, isFiveChar, allNums } from '../validators';

class App extends React.Component {
    onSubmit(values) {
        console.log(values);
    }

    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}
            >
                <h2>Report a problem with your delivery</h2>
                <label htmlFor="trackingNumber">Tracking Number</label>
                <Field
                    name="trackingNumber"
                    id="trackingNumber"
                    type="text"
                    component="input"
                    validate={[required, isNotEmpty, isFiveChar, allNums]}
                />
                <label htmlFor="issue">What is your issue</label>
                <Field name="issue" id="issue" component="select">
                    <option>My delivery hasn't arrived</option>
                    <option>The wrong item was delivered</option>
                    <option>Part of my order was missing</option>
                    <option>Some of my order arrived damaged</option>
                    <option>Other (give some details below)</option>
                </Field>
                <label htmlFor="details">Give more details (optional)</label>
                <Field name="details" id="details" component="textarea" />
                <button>Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'input'
})(App);
