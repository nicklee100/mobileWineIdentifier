import React, { Component } from 'react';
import {View, Text, ScrollView} from 'react-native'
import axios from 'axios'
import WineInfo from './WineInfo'

//class based components have know about lifecycle, has those methods

class WineList extends Component {
  constructor(props){
    super(props)    //if i want ot access this.props in construtor
    this.state = {
      wines: []
    }
  }

  componentWillMount() {   //this will have to fetch my api endpoint
    console.log('component will mount')
    axios.get('https://cryptic-crag-39792.herokuapp.com/') // promise returned
      .then(response => {
         this.setState({wines:response.data.wines})
      })
      console.log(this.state)
  }

   componentDidMount() {
    console.log('component did mount')
  }

  renderWines() {
    return this.state.wines.map((wine,index) => <WineInfo key={index} wine={wine}/> )
  }


  render(){

    console.log('state here:',this.state)

    return (
      <ScrollView>
          <Text>The Wine List</Text>
          { this.renderWines() }
      </ScrollView>
   )
  }
}

export default WineList
