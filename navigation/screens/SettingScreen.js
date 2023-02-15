import React, { useState } from 'react';
import {View,StyleSheet,Text,Image,Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImageModal from 'react-native-image-modal';




const Picture = () => {
const [result,setResult] = useState('');
AsyncStorage.getItem('aaaaa', (err, value) => {
  setResult(JSON.parse(value))
});

  return(
    <View  style={styles.imageContainer}>
        <View  style={styles.imageRow}>
            <Image style={styles.imageBox} onPress={()=>{console.log(result)}} source={{uri:`data:image/jpeg;base64,${result[0]}`}}></Image>
            <Image style={styles.imageBox} onPress={()=>{console.log(result)}} source={{uri:`data:image/jpeg;base64,${result[1]}`}}></Image> 
            <Image style={styles.imageBox} onPress={()=>{console.log(result)}} source={{uri:`data:image/jpeg;base64,${result[2]}`}}></Image>
        </View>
        <View style={styles.imageRow}>
            <Image style={styles.imageBox} onPress={()=>{console.log(result)}} source={{uri:`data:image/jpeg;base64,${result[3]}`}}></Image>
            <Image style={styles.imageBox} onPress={()=>{console.log(result)}} source={{uri:`data:image/jpeg;base64,${result[4]}`}}></Image>
            <Image style={styles.imageBox} onPress={()=>{console.log(result)}} source={{uri:`data:image/jpeg;base64,${result[5]}`}}></Image>
        </View>
        <View style={styles.imageRow}>
            <Image style={styles.imageBox} onPress={()=>{console.log(result)}} source={{uri:`data:image/jpeg;base64,${result[6]}`}}></Image>
            <Image style={styles.imageBox} onPress={()=>{console.log(result)}} source={{uri:`data:image/jpeg;base64,${result[7]}`}}></Image>
            <Image style={styles.imageBox} onPress={()=>{console.log(result)}} source={{uri:`data:image/jpeg;base64,${result[8]}`}}></Image>
        </View>
    </View>
  );
}


const SettingScreen=()=>{
  return(
    <View style={styles.screen}>
      <View style={styles.user}>

      </View>
      <View style={styles.texta}>
        <Text style={{fontSize:22}}>History</Text>
      </View>
      <Picture/>
    </View>
  );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    user:{
      width:'100%',
      height:'50%'
    },
    imageContainer:{
      width: '100%',
      height:'45%',

    },
    texta:{
      width:'30%',
      height:'5%',
      paddingTop:'2%',
      marginLeft:'3%',
      borderRadius:'10',
    },
    imageRow:{
        width: '100%',
        height:'33%',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection: 'row',
    },
    imageBox:{
      width: '30%',
      height:'90%',
      marginRight:'1%',
      marginTop:'1%',
      marginBottom:'1%',
      marginLeft:'1%',
      borderRadius:8
    },
    modal:{
      width:'50%',
      height:'80%'
    }
})
export default SettingScreen;