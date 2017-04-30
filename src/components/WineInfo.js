import React from 'react'
import { View, Text, Image, Linking } from 'react-native'  // was use view instead of card
import Card from './Card'
import WineSection from './WineSection'
import Button from './Button'


const WineInfo = ({wine}) => { // vs props
  const {name, vintage, varietal, winery, image, link, price} = wine;
  console.log(image)
 return (
  <Card>
    <WineSection>
      <View style={styles.thumbnailContainerStyle}>
        <Image style={styles.thumbnailStyle} source={{uri: wine.image}} />
      </View>
      <View style={styles.headerContentStyle}>
        <Text style={styles.headerTextStyle} key={wine.name}>{wine.name}</Text>
        <Text key={wine.winery}>{wine.winery}</Text>
      </View>
    </WineSection>
    <WineSection>
      <Image style={styles.imageStyle} source={{ uri: wine.image }} />
    </WineSection>
    <WineSection>
      <Button onPressProp={() => Linking.openURL(wine.link)}>
        Buy Wine
      </Button>
    </WineSection>

  </Card>
 )
}

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle:{
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  imageStyle:{
    height: 300,
    flex: 1,
    width: null,
  },
  thumbnailContainerStyle : {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
}

export default WineInfo
