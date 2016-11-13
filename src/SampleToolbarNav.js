import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Navigator,
  BackAndroid
} from 'react-native';

import Home from './Home';
import Settings from './Settings';

class SampleToolbarNav extends Component {

  _renderScene (route, navigator) {
    switch (route.id) {
      case 'home':
        return (
          <Home navigator={navigator}/>
        )
      case 'settings':
        return (
          <Settings navigator={navigator} />
        )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ id: 'home' }}
        renderScene={(route, navigator) => this._renderScene(route, navigator)}
      />
    );
  }
}

export default SampleToolbarNav;
