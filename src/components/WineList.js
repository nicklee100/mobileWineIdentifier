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
  constructor(props){
    super(props)    //if i want ot access this.props in construtor
    this.state = {
      wines: [{"name":"Guigal Cotes Rouge","code":"guigal-cotes-rouge-2010","region":"France > Rh\u00f4ne > Southern Rh\u00f4ne > C\u00f4tes-du-rh\u00f4ne","winery":"E. Guigal","winery_id":"e-guigal","varietal":"Grenache^Syrah","price":"11.99","vintage":"2010","type":"Red Wine","link":"http:\/\/www.snooth.com\/wine\/guigal-cotes-rouge-2010\/","tags":"","image":"http:\/\/ei.isnooth.com\/multimedia\/d\/e\/f\/image_3780416_square.jpeg","snoothrank":3.5,"available":1,"num_merchants":192,"num_reviews":21},{"name":"Guigal Cotes Rouge","code":"guigal-cotes-rouge-2010","region":"France > Rh\u00f4ne > Southern Rh\u00f4ne > C\u00f4tes-du-rh\u00f4ne","winery":"E. Guigal","winery_id":"e-guigal","varietal":"Grenache^Syrah","price":"11.99","vintage":"2010","type":"Red Wine","link":"http:\/\/www.snooth.com\/wine\/guigal-cotes-rouge-2010\/","tags":"","image":"http:\/\/ei.isnooth.com\/multimedia\/d\/e\/f\/image_3780416_square.jpeg","snoothrank":3.5,"available":1,"num_merchants":192,"num_reviews":21}]
    }
  }

  componentWillMount() {   //this will have to fetch my api endpoint
    console.log('component will mount')
    axios.get('https://cryptic-crag-39792.herokuapp.com/') // promise returned
      .then(response => {
        //  this.setState({wines:response.data.wines})
      })

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
        <View>
            <Text>The Wine List</Text>
            { this.renderWines() }
        </View>
   )
  }
}

export default WineList

// const mapStateToProps = (state) => {
//   return { wines: state.wines}
// }



//export default connect(mapStateToProps)(WineList)
