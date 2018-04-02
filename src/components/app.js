import React, { Component } from 'react';
import BirthdayForm from './birthdayForm';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Birthday!!</h1>
        <BirthdayForm />
      </div>
    );
  }
}