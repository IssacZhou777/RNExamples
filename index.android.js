/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  View,
  Navigator,
  BackAndroid,
  Platform
} from 'react-native';

import IndexComponent from './examples/index';

export default class RNExamples extends React.Component {

  componentDidMount() {
    if (Platform.OS == 'android') {
      BackAndroid.addEventListener('hardwareBackPress',this._onAndroidBack.bind(this));
    }
  }

  componentWillUnmount() {
    if (Platform.OS == 'android') {
      BackAndroid.removeEventListener('hardwareBackPress',this._onAndroidBack);
    }
  }

  _onAndroidBack = () => {
    const nav = this.refs.nav;
    const routers = nav.getCurrentRoutes();
    if (!nav) return false;

      if (routers.length > 1) {
          nav.pop();
          return true;
      }
    return false;
  };

  render() {
    let homeComponentName = 'IndexComponent';
    let homeComponent = IndexComponent;

    return (
      <Navigator
      ref="nav"
      initialRoute={{name:homeComponent, component: homeComponent}}
      configureScene={(route) => {
        return Navigator.SceneConfigs.FloatFromRight;
      }}

      renderScene={(route,navigator) => {
        let Component = route.component;
        return <Component {...route.params} navigator={navigator}/>
      }}
      />
      );
  }
}

AppRegistry.registerComponent('RNExamples', () => RNExamples);
