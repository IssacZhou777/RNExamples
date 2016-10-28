/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Alert,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  ScrollView,
  View
} from 'react-native';

export default class RNExamples extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          There are RN Examples：
        </Text> 

        <ScrollView style={styles.scrollView} vertical={true}>

        {TextArray.map(creatButton)}

        </ScrollView>

      </View>
    );
  }
}

  class MyButton extends Component {

    _onPress() {
      var key = 'test';
        Alert.alert(
          'button '+ key + ' is clicked',
          null,
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ],
          {cancelable: true});
    };

    render() {
      return (
          <TouchableHighlight onPress={this._onPress} style={styles.button} underlayColor={'#FF0000'}>
            <Text>{this.props.text}</Text>
        </TouchableHighlight>
        );
    }
  }


var TextArray = ['Buttons', 'Image', 'View','Buttons', 'Image', 'View','Buttons', 'Image', 'View',];
var creatButton = (text, i) => <MyButton key={i} text={text}/>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  logo_og: {
    width: 100,
    height: 100,
  },
  button: {
    width: 400,
    height: 80,
    alignItems: 'center',
  },
  scrollView: {
    height:400,
    width:400,
    opacity:0.9
  }
});

AppRegistry.registerComponent('RNExamples', () => RNExamples);
