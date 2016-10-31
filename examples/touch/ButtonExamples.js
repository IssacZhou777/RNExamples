'use strict';

import React from 'react';
import {
	Alert,
  	StyleSheet,
  	Text,
  	Image,
  	TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback,
  	View
} from 'react-native'

class ButtonExample extends React.Component {

  _onPress() {
    Alert.alert(
      'Clicked',
      null,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: true});
  }

  render() {
    return {
      <View style={styles.container}>
          <TouchableHighlight onPress={this._onPress} style={styles.button} underlayColor={'#FFFF00'}>
            <Text>TouchableHighlight</Text>
          </TouchableHighlight>

          <TouchableNativeFeedback onPress={this._onPress} backgroundColor={TouchableNativeFeedback.SelectableBackground()} style={styles.button}>
            <Text style={margin:30}>TouchableNativeFeedback</Text>
          </TouchableNativeFeedback>

          <TouchableOpacity onPress={this.onPress} style={styles.button}>
            <Text style={margin:30}>TouchableOpacity</Text>
          </TouchableOpacity>

          <TouchableWithoutFeedback onPress={this._onPress} style={styles.button}>
            <Text style={margin:30}>TouchableWithoutFeedback</Text>
          </TouchableWithoutFeedback>

      </View>
    }
  }
}

const StyleSheet styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button:{
    width: 80,
    height:40,
    alignItems:center,
    backgroundColor:'#0000FF'
  },
}
