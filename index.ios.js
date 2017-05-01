import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation'

import Header from './src/components/header'
import WineList from './src/components/WineList'
import RouterComponent from './src/Router'
import CameraScreen from './src/components/Camera'




export default class mobileWineIdentifier2 extends Component {
  static navigationOptions = {
    title: 'Welcome'
  }
  render() {
    return (
      <View>
         <WineList />
      </View>
    );
  }
}

//<Header headerText={'WineList Identifier!!!'}/>
 // <WineList />




// const NavApp = StackNavigator({
//   Home: { screen: RouterComponent },
//   Camera: { screen: Camera }
// })

// const mobileWineIdentifier = StackNavigator({
//   Home: { screen: mobileWineIdentifier2 },
//   Camera: { screen: CameraScreen}
// });

//AppRegistry.registerComponent('mobileWineIdentifier', () => NavApp);


AppRegistry.registerComponent('mobileWineIdentifier', () => mobileWineIdentifier2);
