import React from 'react';
import { reduxForm, Field } from 'redux-form';

export default class App extends React.Component  {
 


  render() {
    return (
      <form>
        <h2>Report a problem with your delivery</h2>
        <label>Tracking Number</label>
        <input type='text' />
        <label>What is your issue</label>
        <select>
          <option>My delivery hasn't arrived</option>
          <option>The wrong item was dilivered</option>
          <option>Part of my order was missing</option>
          <option>Some of my order arrived damaged</option>
          <option>Other (give some details below)</option>
        </select>
        <label>Give more details (optional)</label>
        <textarea></textarea>
        <button>Submit</button>
      </form>
    )
  }
}



