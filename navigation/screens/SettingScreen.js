import * as React from 'react';
import {View,StyleSheet,Text,Image} from 'react-native';

const Picture = () => {
  return(
    <View  style={styles.imageContainer}>
        <View  style={styles.imageRow}>
            <Image style={styles.imageBox} source={require('/Users/haesu/reactnative/assets/egg-bread.png')}></Image>
            <Image style={styles.imageBox} source={require('/Users/haesu/reactnative/assets/egg-bread.png')}></Image>
            <Image style={styles.imageBox} source={require('/Users/haesu/reactnative/assets/egg-bread.png')}></Image>
        </View>
        <View style={styles.imageRow}>
            <Image style={styles.imageBox} source={require('/Users/haesu/reactnative/assets/egg-bread.png')}></Image>
            <Image style={styles.imageBox} source={require('/Users/haesu/reactnative/assets/egg-bread.png')}></Image>
            <Image style={styles.imageBox} source={require('/Users/haesu/reactnative/assets/egg-bread.png')}></Image>
        </View>
        <View style={styles.imageRow}>
            <Image style={styles.imageBox} source={require('/Users/haesu/reactnative/assets/egg-bread.png')}></Image>
            <Image style={styles.imageBox} source={require('/Users/haesu/reactnative/assets/egg-bread.png')}></Image>
            <Image style={styles.imageBox} source={require('/Users/haesu/reactnative/assets/egg-bread.png')}></Image>
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
        <Text>최근 9사진</Text>
      </View>
      <Picture/>
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
      height:'45%',

    },
    texta:{
      width:'100%',
      height:'5%',
      backgroundColor:'orange',
      textAlign:'center'
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
      borderRadius:5
    }
})
export default SettingScreen;