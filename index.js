import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/stores';
import App from './src/App.container';
import { name as appName } from './app.json';

export default class todoApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => todoApp);
