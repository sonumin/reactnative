import * as React from 'react';
import {View,StyleSheet,Dimensions} from 'react-native';
const DeviceWidth = Dimensions.get('window').width

const SettingScreen=()=>{
  return(
    <View style={styles.screen}>
      <View style={styles.user}>

      </View>
      <View  style={styles.imageContainer}>
          <View  style={styles.imageRow}>
            <View style={styles.imageBox} />
            <View style={styles.imageBox} />
            <View style={styles.imageBox} />
          </View>
          <View style={styles.imageRow}>
            <View style={styles.imageBox} />
            <View style={styles.imageBox} />
            <View style={styles.imageBox} />
          </View>
          <View style={styles.imageRow}>
            <View style={styles.imageBox} />
            <View style={styles.imageBox} />
            <View style={styles.imageBox} />
          </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection: 'column',
    },
    user:{
      width:'100%',
      height:'50%',
      backgroundColor:'blue'
    },
    imageContainer:{
      width: '100%',
      height:'50%',
      backgroundColor:'red'
    },
    imageRow:{
        width: '100%',
        height:'33%',
        flexDirection: 'row',
        backgroundColor:'red'
    },
    imageBox:{
      width: '30%',
      height:'100%',
      backgroundColor: 'aqua',
      marginRight:'2%',
      marginBottom:'2%'
    }
})
export default SettingScreen;