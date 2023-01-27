import React from 'react'
import {TextInput, View, Text, StyleSheet, Image, Button, Pressable} from 'react-native'

const SendScreen=()=>{
  const adv=()=>{
    console.log(pickedImagePath)
  }
  return (
    <View >
      <View style={styles.imageContainer} >
        <Button onPress={adv} title='dddddd'></Button>     
      </View>
      <View style={styles.foodContainer}>
        
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white'
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  input:{
    borderWidth:'1',
    padding:'10',
    height: '40',
    backgroundColor:'white'

  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    backgroundColor:'black',
    height:"60%",
    marginTop:"5%",
    marginBottom: '5%'
  },
  foodContainer:{
    backgroundColor: 'yellow',
    height : '25%',
    width: '100%'
  }
})
export default SendScreen;
