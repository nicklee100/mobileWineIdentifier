import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './src/components/header'
import WineList from './src/components/WineList'



export default class mobileWineIdentifier extends Component {
  render() {
    return (
      <View>
        <Header headerText={'WineList Identifier!!!'}/>
        <WineList />
      </View>
    );
  }
}



AppRegistry.registerComponent('mobileWineIdentifier', () => mobileWineIdentifier);
