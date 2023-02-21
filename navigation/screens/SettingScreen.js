import React, { useEffect, useState } from 'react';
import {View,StyleSheet,Text,Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Picture = () => {
const [result,setResult] = useState(['','','','','','','','','']);
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
  const [goal,setGoal] = useState([0,0,0,0,0,0]);
  const getProfile = () => {
    AsyncStorage.getItem('profile', (err, value) => {
      setGoal(JSON.parse(value))
  }); 
  }
  const isFocused = useIsFocused();            
  useEffect(()=>{
              getProfile();
          },[isFocused])
  const navigation= useNavigation();
  const abc =() => {
    navigation.navigate("send")
  }
  return(
    <View style={styles.screen}>
      <View style={styles.firstContainer}>
          <View style={styles.userContainer}>
            {/* <Button title='222' onPress={abc}></Button> */}
            <View style={styles.profile}>
              <Image style={styles.userImage}source={require('/Users/haesu/reactnative/assets/egg-bread.png')}/>
              <View style={styles.profilelabel}>
                <TouchableOpacity style={styles.button} onPress={abc}>
                   <Icon name="settings-outline" size={24} color="#000000" />
                </TouchableOpacity>
                <Text style={styles.userlable}>안녕하세요 {goal[0]}님!</Text>
                </View>
                
            </View>
            <View style={styles.labelContainer}>
              <Text style={styles.goaltext}>키: {goal[1]}cm    몸무게:  {goal[2]}kg</Text>
              <Text style={styles.goaltext}>목표 칼로리: {goal[3]}</Text>
              <Text style={styles.goaltext}>목표 탄수화물: {goal[4]}   목표 단백질: {goal[5]}  목표 지방: {goal[6]}</Text>
            </View>
          </View>
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
    firstContainer:{
      width:'100%',
      height:'45%',
      alignItems:'center',
      justifyContent:'center'
    },
    imageContainer:{
      width: '100%',
      height:'50%',

    },
    texta:{
      width:'30%',
      height:'5%',
      paddingTop:'2%',
      marginLeft:'3%',
      borderRadius:'10',
    },
    userContainer:{
      width:'90%',
      height:'85%',
      borderRadius:'16',
      backgroundColor:'#ffffff',
      shadowColor: "#000",
        shadowOffset: {
          width: 3,
          height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    profile:{
      width:'100%',
      height:'50%',
      flexDirection:'row'
    },
    profilelabel:{
      width:'75%',
      height:'100%',

    },
    userImage:{
      marginTop:'10%',
      marginLeft:'3%',
      width:'20%',
      height:'45%',
    },
    userlable:{
      width:'95%',
      height:'30%',
      marginTop:'5%',
      marginLeft:'5%',    
      fontSize:30,

    },
    labelContainer:{
      width:'100%',
      height:'50%',
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
    },
    goaltext:{
      marginLeft:'4%',
      marginTop:'1.5%',
      marginBottom:'1.5%',
      fontSize:18
    },
    button: {
        marginTop:'5%',
        marginLeft:'80%',
        width:'20%',
        alignItems:'center',
        justifyContent:'center'
      }
})
export default SettingScreen;