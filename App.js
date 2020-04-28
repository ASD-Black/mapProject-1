/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Root from "./src/main";

export default class App extends Component {
  render(){
    return ( //err 25
      <View style={styles.container}>
        <Root {...this.props}/>
      </View>
    )
  }
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});


AppRegistry.registerComponent('AwesomeProject3', () => AwesomeProject3);