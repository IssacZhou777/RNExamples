'use strict';

import React from 'react';
import {
		Alert,
  	StyleSheet,
  	Text,
  	Image,
  	TouchableHighlight,
  	ScrollView,
		Navigator,
		BackAndroid,
		Platform,
  	View
} from 'react-native';

import ButtonExample from './touch/ButtonExamples';
import ViewPagerAndroidExample from './touch/ViewPagerAndroidExample'

export default class IndexComponent extends React.Component {
	
	    render() {
	      return (
	      	<View style={styles.container}>
	      		<Text style={styles.welcome}>React Native UI: </Text>

	          	<ScrollView style={styles.ScrollView}>

		          	<TouchableHighlight onPress={() => {
									this.props.navigator.push({name:'ButtonExample', component: ButtonExample});
								}} style={styles.button} underlayColor={'#FF0000'}>
								<View >
			            <Text style={{margin: 30}}>ButtonExample</Text>
			          </View>
		        	</TouchableHighlight>

							<TouchableHighlight onPress={() => {
									this.props.navigator.push({name:'ViewPagerAndroidExample', component: ViewPagerAndroidExample});
							}} style={styles.button} underlayColor={'#FF0000'}>
							<View >
								<Text style={{margin: 30}}>ViewPagerAndroid</Text>
							</View>
						</TouchableHighlight>

	          	</ScrollView>
	        </View>
	        );
	    }
	  }

	 class MyButton extends React.Component {

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

	var TextArray = ['Buttons', 'Image', 'View','Buttons', 'Image', 'View','Buttons', 'Image', 'View'];
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
	    alignItems: 'center',
			backgroundColor:'#7b68ee'
	  },
	  scrollView: {
	  	flex: 1,
	    height:400,
	    width:400,
	    opacity:0.9,
	    alignItems: 'center'
	  }
});
