import React, {Component} from 'react'
import { Text, View, TouchableOpacity } from 'react-native'


class CameraComp extends Component {


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


      </View>
  )
}


}



export default CameraComp



