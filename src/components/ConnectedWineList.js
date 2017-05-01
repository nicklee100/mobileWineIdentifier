import React, { Component } from 'react';
import {View, Text, ScrollView} from 'react-native'
import axios from 'axios'
import WineInfo from './WineInfo'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../reducers'
import { connect } from 'react-redux'


//class based components have know about lifecycle, has those methods

class WineList extends Component {
  render(props){
    return (
        <View>
            <Text>The Wine List</Text>
             { this.props.wines.map((wine,index) => <WineInfo key={index} wine={wine}/> )}
            {/*{ this.renderWines() }*/}
        </View>
   )
  }
}

//export default WineList

const mapStateToProps = (state) => {
  return { wines: state.wines}
}



export default connect(mapStateToProps)(WineList)
