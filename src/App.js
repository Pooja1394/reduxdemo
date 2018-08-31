import React, { Component } from 'react';
import './App.css';
import Home from './containers/Home';
import { Provider } from 'react-redux';
import store from './store/ConfigureStore';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home/>
      </Provider>
    );
  }
}

export default App;
