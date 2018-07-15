import React, { Component } from 'react';
import './App.css';
import ReviewListPage from './containers/ReviewListPage';

class App extends Component {
  render() {
    return (
      <div className="container">
        <ReviewListPage />
      </div>
    );
  }
}

export default App;
