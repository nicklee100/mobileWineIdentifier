import React, { Component } from 'react';
import {View, Text} from 'react-native'
import axios from 'axios'


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
      .then(response => this.setState({wines: response.data}))
  }

   componentDidMount() {
    console.log('component did mount')
  }

  renderWine() {
    this.state.wines.map(wine => <Text>{wine.title}</Text>)
  }


  render(){

    console.log('state here:',this.state)

    return (
      <View>
          <Text>The Wine List</Text>
      </View>
   )
  }
}

export default WineList
