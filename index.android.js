/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  View,
  Navigator
} from 'react-native';

import IndexComponent from './examples/index';

export default class RNExamples extends React.Component {

  render() {
    let homeComponentName = 'IndexComponent';
    let homeComponent = IndexComponent;

    return (
      <Navigator
      initialRoute={{name:homeComponent, component: homeComponent}}
      configureScene={(route) => {
        return Navigator.SceneConfigs.VerticalDownSwipeJump;
      }}

      renderScene={(route,navigator) => {
        let Component = route.component;
        return <Component {...route.params} navigator={navigator}/>
      }}/>
      );
  }
}

AppRegistry.registerComponent('RNExamples', () => RNExamples);
