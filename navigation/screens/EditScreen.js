import * as React from 'react';
import {View,Dimensions,Text,StyleSheet, Button,ScrollView,Pressable} from 'react-native';
import { useRoute,useIsFocused, useNavigation } from '@react-navigation/native';
import  { useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LineChart,ProgressChart} from "react-native-chart-kit";
import * as Progress from "react-native-progress";
import { MultipleSelectList } from 'react-native-dropdown-select-list'
import Icon from 'react-native-vector-icons/Ionicons';

const EditScreen = () =>{
    const route = useRoute();
    const navigation = useNavigation();
    const avvv = route.params.c
    const [selected, setSelected] = React.useState([]);
    const data = [
        {key:'1', value:'쌀밥',},
        {key:'2', value:'인절미', },
        {key:'3', value:'Cameras'},
        {key:'4', value:'Computers', disabled:true},
        {key:'5', value:'Vegetables'},
        {key:'6', value:'Diary Products'},
        {key:'7', value:'Drinks'},
    ]
    const editdata = ( ) =>{
        navigation.navigate('Detail',{d:avvv})
    }
    console.log(selected)
    return (
        <View>
             <MultipleSelectList 
                setSelected={(val) => setSelected(val)}   //avvv[1].name =selected[1]
                data={data} 
                save="value"
                onSelect={() =>avvv[1].name =selected[1]} 
                label="Categories"
                boxStyles={{marginTop:'5%'}}
            />
             <Pressable style={styles.button} onPress={editdata}>
            <Icon name="send" size={24} color="#ffffff" />
          </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: 'white',
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    
    buttonContainer:{
      width:'100%',
      height:'10%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Container:{
      width:'100%',
      height:'80%',
      alignItems: 'center',
      marginTop:'15%'
    },
    textBox:{
      borderWidth:1,
      width:'50%',
      height:'40%',
      borderRadius:'5',
      textAlign:'center'
    },
    button:{
      alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'black',
        bored:'2',
        shadowColor: "#000",
          shadowOffset: {
            width: 5,
            height: 5,
          },
          shadowOpacity: 0.5,
          shadowRadius: 6,
          width:'20%'
    },
    textBox_Container:{
      flexDirection:'row',
      width:'100%',
      height:'15%',
  
      alignItems:'center'
    },
    textCon:{
      width:'30%',
      height:'25%',
      marginLeft:'5%',
      textAlign:'center',
      fontSize:'18'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 100,
        elevation: 3,
        backgroundColor: 'black',
        bored:'2',
        shadowColor: "#000",
          shadowOffset: {
            width: 5,
            height: 5,
          },
          shadowOpacity: 0.5,
          shadowRadius: 6,
    },
  })
export default EditScreen;

