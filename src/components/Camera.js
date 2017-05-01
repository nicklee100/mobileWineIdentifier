import React, {Component} from 'react'
import { Text, View, TouchableOpacity, Button } from 'react-native'
import ConnectedWineList from './ConnectedWineList'
      // <ConnectedWineList/>


class CameraComp extends Component {

  static navigationOptions ={
    title: 'yo'
  }

  render(){

    styles = {
      cameraStyles:{
        flexDirection: 'row',
        height: 200,
        padding: 20,
        justifyContent: 'center',
      },
      cameraText:{
        display: 'flex',
        fontWeight: '900',
      },


    }
  return (
     <View style={styles.cameraStyles}>
        <Text style={styles.cameraText}>Take a photo</Text>
        <Button onPress={ () => navigate('ConnectedWineList')} title='Take a Picture'/>

      </View>
  )
}

}

CameraComp.navigationOptions = {
  title: 'Camera Screen'
}



//export default CameraComp
