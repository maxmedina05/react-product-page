import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import ReviewListPage from './containers/ReviewListPage';

class App extends Component {
  render() {
    return (
      <div className="container">
        <ToastContainer />
        <ReviewListPage />
      </div>
    );
  }
}

export default App;
