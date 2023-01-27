import React, { useState } from 'react';
import {ActionSheetIOS, View, Text, StyleSheet, Image, Button,Pressable,TextInput} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';



const DetailScreen=({navigation})=>{
    const [pickedImagePath, setPickedImagePath] = useState('');
    const [food, setFood] = useState();
    const [foodCnt, setFoodCnt] = useState(0);
    const [visible, setVisible] = useState(false);
    const data = new FormData();
    data.append('file', pickedImagePath);
    // This function is triggered when the "Select an image" button pressed
    const showImagePicker = async () => {
      // Ask the user for the permission to access the media library 
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
      if (permissionResult.granted === false) {
        alert("You've refused to allow this appp to access your photos!");
        return;
      }
  
      const result = await ImagePicker.launchImageLibraryAsync();
  
      // Explore the result
      console.log(result);
  
      if (!result.canceled) {
        setPickedImagePath(result.assets[0].uri);
        console.log(result.assets[0].uri);
      }
    }
    
  
    // This function is triggered when the "Open camera" button pressed
    const openCamera = async () => {
      // Ask the user for the permission to access the camera
      const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
  
      if (permissionResult.granted === false) {
        alert("You've refused to allow this appp to access your camera!");
        return;
      }
  
      const result = await ImagePicker.launchCameraAsync();
      // Explore the result
      console.log(result);
  
      if (!result.canceled) {
        setPickedImagePath(result.assets[0].uri);
        console.log(result.assets[0].uri);
      }
    }
    const actionSheet = async () => {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ["카메라로 촬영하기", "사진 선택하기", "취소"],
          cancelButtonIndex: 2,
        },
        (buttonIndex) => {
          if (buttonIndex === 0) {
            openCamera();
          } else if (buttonIndex === 1) {
            showImagePicker();
          }
        },
      )
    }
    const postImage = async () => {
      const fd = new FormData();
      const data = {
        uri: pickedImagePath,
        type: 'image/jpeg',
        name: 'test',
      }
      fd.append('file', data);
  
      await axios
        .post('http://121.174.150.180:50001/predict', fd, {
          headers: {
            'content-type': 'multipart/form-data',
          }, 
           responseType: 'json'
        })

        .then((res) => {
          // console.log(res.data[1])
          var da = res.data.map(function(item){
            return {
              name: item.name,
              amount: item.amount
            }
          })
          da = da.filter((f) => f.name !== undefined)
          setPickedImagePath(`data:image/jpeg;base64,${res.data[0].image_data}`)
          setFoodCnt(res.data.length - 1)
          setFood(da)
          setVisible(true);
        })
  
        .catch((err) => {
          console.log('에러...');
          console.error(err);
        });
    };
    const showFoodList = () =>{
      const result = [];
      if(visible){
        for (let i = 0; i < foodCnt; i++){
          result.push(<TextInput style={styles.textBox}key={i}>{food[i].name} {food[i].amount}</TextInput>)
        }
      }
      return result
    }
    return(
        <View style={styles.screen}>
  
        <View style={styles.imageContainer} >
          {
            pickedImagePath && <Image source={{ uri: pickedImagePath }}
            style={{width:'90%',height:"90%",borderRadius:10}} /> 
          }
        </View>
        <View style={styles.lableContainer}>
            {visible && <View>
            {showFoodList()}
          </View>}
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={actionSheet}>
            <Icon name="camera" size={24} color="#ffffff"> or <Icon name="copy" size={24} color="#ffffff" /></Icon>             
          </Pressable>
          <Pressable style={styles.button} onPress={postImage}>
            {/* <Text style={styles.text}>앙 업로드</Text> */}
            <Icon name="send" size={24} color="#ffffff" />
          </Pressable>
          <Pressable style={styles.button} onPress={postImage}>
            {/* <Text style={styles.text}>앙 업로드</Text> */}
            <Icon name="save" size={24} color="#ffffff" />
          </Pressable>
        </View>

      </View>
    );
}
const styles = StyleSheet.create({
   button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 100,
      elevation: 3,
      backgroundColor: '#000000',
  },
  lableContainer: {
      width: '100%',
      height:"35%",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
    screen: {
      flex: 1,
      backgroundColor: 'white'
      // justifyContent: 'center',
      // alignItems: 'center',
    },
    buttonContainer: {
      width: '100%',
      height:"15%",
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    imageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width:'100%',
      height:"50%",
    },
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },
    textBox:{
      borderColor: "gray",
      width: "80%",
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      marginBottom: '2%',
      marginLeft:'10%'
      
    }
    // image: {
    //   width: 400,
    //   height: 300,
    //   resizeMode: 'cover'
    // }
  });
  


  export default DetailScreen;