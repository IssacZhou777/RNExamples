'use strict';

import React from 'react';
import {
	Alert,
  	StyleSheet,
  	Text,
  	TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback,
  	View
} from 'react-native'

export default class ButtonExample extends React.Component {

  _onPress() {
    console.log('_onPress');
  }

  _onLongPress() {
    Alert.alert(
      'Long Press',
      null,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: true});
  }

  render() {
    return (
      <View style={styles.container}>
          <TouchableHighlight onPress={this._onPress} onLongPress={this._onLongPress} style={styles.button} underlayColor={'#FFFF00'}>
          <View>
            <Text style={{margin: 30}}>TouchableHighlight</Text>
          </View>
          </TouchableHighlight>

          <TouchableNativeFeedback onPress={this._onPress} backgroundColor={TouchableNativeFeedback.SelectableBackground()} style={styles.button}>
          <View >
            <Text style={{margin: 30}}>TouchableNativeFeedback</Text>
          </View>
          </TouchableNativeFeedback>

          <TouchableOpacity onPress={this._onPress} style={styles.button} onLongPress={this._onLongPress}>
          <View>
            <Text style={{margin: 30}}>TouchableOpacity</Text>
          </View>
          </TouchableOpacity>

          <TouchableWithoutFeedback onPress={this._onPress} onLongPress={this._onLongPress} style={styles.button}>
          <View >
            <Text style={{margin: 30}}>TouchableWithoutFeedback</Text>
          </View>
          </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button:{
    alignItems:'center',
    backgroundColor:'#7b68ee'
  },
});
