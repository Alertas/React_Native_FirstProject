/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  Alert, 
  Button
} from 'react-native';

class FirstProject extends Component {
  onPressButton() {
    Alert.alert('Tu mane paspaudei')
  }
  changeColor() {
    
  }
  render() {
    return (
      <View>
        <Button onPress={this.onPressButton} title="Mygtukas" color="red"/>
        <Button onPress={this.onPressButton} title="Mygtukas" color="green"/>
        <Button onPress={this.onPressButton} title="Mygtukas" color="yellow"/>
      </View>
    );
  }
}




AppRegistry.registerComponent('FirstProject', () => FirstProject);