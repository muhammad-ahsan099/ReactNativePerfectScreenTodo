/**
 * @format
 */
 import React from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/config/Store';
import App from './App';
import {name as appName} from './app.json';

export default function Main() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }

AppRegistry.registerComponent(appName, () => Main);





