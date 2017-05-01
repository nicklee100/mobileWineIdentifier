import React from 'react';
import {Scene, Router} from 'react-native-router-flux'
import CameraComp from './components/Camera'
import WineList from './components/WineList'


const RouterComponent = () => {
  return (
    <Router sceneStyle={{paddingTop: 65}}>
      <Scene key='root'>
        <Scene key='winelist' component={WineList} title="Wine List"   />
        <Scene key='picture' component={CameraComp} title="Take Picture?" initial />
      </Scene>
    </Router>
  )
}

export default RouterComponent
