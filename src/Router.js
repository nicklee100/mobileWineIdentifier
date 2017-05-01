import React from 'react';
import {Scene, Router} from 'react-native-router-flux'
//import CameraComp from './components/Camera'
import WineList from './components/WineList'

import ConnectedWineList from './components/ConnectedWineList'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

//
// const RouterComponent = () => {
//
//   return (
//    <Provider store={createStore(reducers)}>
//     <CameraComp/>
//     </Provider>
//   )
// }

RouterComponent.navigationOptions = {
  title: 'Wine Home'
}


const RouterComponent = () => {
  return (
    <Router sceneStyle={{paddingTop: 65}}>
      <Scene key='root'>
        <Scene key='winelist' component={WineList} title="Wine List"  initial  />
      </Scene>
    </Router>
  )
}

export default RouterComponent

//<Scene key='picture' component={CameraComp} title="Take Picture?"  />
