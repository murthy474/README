
import React, { Component } from 'react';
import {
  Platform,FlatList,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import Router from './src/router';

export default class App extends Component {
  render() {
    return(
    <View style={{flex:1}}>
           < Router />
    </View>
    );
  }
}

