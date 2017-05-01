import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './src/components/header'
import WineList from './src/components/WineList'
import RouterComponent from './src/Router'



export default class mobileWineIdentifier extends Component {
  render() {
    return (
      <View>
         <RouterComponent />
      </View>
    );
  }
}

//<Header headerText={'WineList Identifier!!!'}/>
 // <WineList />



AppRegistry.registerComponent('mobileWineIdentifier', () => mobileWineIdentifier);
