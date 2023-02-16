import React from 'react'
import {TextInput, View, Text, StyleSheet, Image, Button, Pressable} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
const SendScreen=()=>{
  return (
    <View style={styles.screen}>
      <View style={styles.Container}>
        <View style={styles.textBox_Container}>
            <Text style={styles.textCon}>이름 :</Text><TextInput style={styles.textBox}></TextInput>
        </View>
        <View style={styles.textBox_Container}>
            <Text style={styles.textCon}>키 :</Text><TextInput style={styles.textBox}></TextInput>
        </View>
        <View style={styles.textBox_Container}>
            <Text style={styles.textCon}>몸무게 :</Text><TextInput style={styles.textBox}></TextInput>
        </View>
        <View style={styles.textBox_Container}>
            <Text style={styles.textCon}>칼로리 :</Text><TextInput style={styles.textBox}></TextInput>
        </View>
        <View style={styles.textBox_Container}>
            <Text style={styles.textCon}>단백질 :</Text><TextInput style={styles.textBox}></TextInput>
        </View>
        <View style={styles.textBox_Container}>
            <Text style={styles.textCon}>지방 :</Text><TextInput style={styles.textBox}></TextInput>
        </View>
         
      </View>
      <View style={styles.buttonContainer}>
          <Pressable style={styles.button}>
            <Icon name="save" size={24} color="#ffffff" />
          </Pressable>
      </View>
    </View>
  )
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
  }
})
export default SendScreen;
