import React, { useEffect, useState } from 'react';
import {LogBox,ActionSheetIOS, View, Text, StyleSheet, Image, Button,Pressable,TextInput,Alert,Dimensions} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SelectList } from 'react-native-dropdown-select-list'
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
const { width, height } = Dimensions.get('window');


const DetailScreen=({route})=>{
    const foodList = [
  '쌀밥', '기타잡곡밥', '콩밥', '보리밥', '돌솥밥', '현미밥', '흑미밥', '감자밥', '곤드레밥', '김치볶음밥', '주먹밥', '볶음밥', '일반비빔밥', '전주비빔밥', '삼선볶음밥', '새우볶음밥', '알밥', '산채비빔밥 ', '오므라이스', '육회비빔밥', '해물볶음밥', '열무비빔밥', '불고기덮밥', '소고기국밥', '송이덮밥', '오징어덮밥', '자장밥', '잡채밥', '잡탕밥', '장어덮밥', '제육덮밥', '짬뽕밥', '순대국밥', '카레라이스', '전주콩나 물국밥', '해물덮밥', '회덮밥', '소머리국밥', '돼지국밥', '하이라이스', '김치김밥', '농어초밥', '문어초밥', '새우초밥', '새우튀김롤', '샐러드김밥', '광어초밥', '소고기김밥', '갈비삼각김밥', '연어롤 ', '연어초밥', '유부초밥', '장어초밥', '참치김밥', '참치마요삼각김밥', '치즈김밥 ', '캘리포니아롤', '한치초밥', '일반김밥', '간자장', '굴짬뽕', '기스면', '김치라면', '김치우동', '김치말이국수', '닭칼국수', '들깨칼국수', '떡라면', '라면', '막국수', '메밀국수', '물냉면', '비빔국수', '비빔냉면', '삼선우동', '삼선자장면', '삼선짬뽕', '수제비', '쌀국수', '열무김치국수', '오일소스스파게티', '일식우동', '볶음우동', '자장면', '잔치국수', '짬뽕', '짬뽕라면', '쫄면', '치즈라면', '콩국수', '크림소스스파게티', '토마토소스스파게티', '해물칼국수', '회냉면', '떡국', '떡만둣국', '짜장라면', '고기만두', '군만두', '김치만두', '물만두', '만둣국', '게살죽', '깨죽', '닭죽', '소고기버섯죽', '어죽', '잣죽', '전복죽', '참치죽', '채소죽', '팥죽', '호박죽', '콘스프', '토마토스프', '굴국', '김치국', '달걀국', '감자국', '미역국', '바지락조개국', '소고기무국', '소고기미역국', '순대국', '어묵국', '오징어국', '토란국', '탕국', '홍합미역국', '황태해장국', '근대된장국', '미소된장국', '배추된장국', '뼈다귀해장국 ', '선지(해장)국', '콩나물국', '시금치된장국', '시래기된장국', '쑥된장국', '아욱된장국', '우거지된장국', '우거지해장국', '우렁된장국', '갈비탕', '감자탕', '곰탕', '매운탕', '꼬리곰탕', '꽃게탕', '낙지탕', '내장탕', '닭곰탕', '닭볶음탕', '지리탕', '도가니탕', '삼계탕', '설렁탕', '알탕', '연포탕', '오리탕', '추어탕', '해물탕', '닭개장', '육개장', '뼈해장국', '미역오이냉국', '고등어찌개', '꽁치찌개', '동태찌개', '부대찌개', '된장찌개', '청국장찌개', '두부전골', '곱창전골', '소고기전골', '국수전골', '돼지고기김치찌개', '버섯찌개', '참치김치찌개', '순두부찌개', '콩비지찌개', '햄김치찌개', '호박찌개', '고추장찌개', '대구찜', '도미찜', '문어숙회', '아귀찜', '조기찜', '참꼬막', '해물찜', '소갈비찜', '돼지갈비찜', '돼지고기수육', '찜닭', '족발', '달걀찜', '닭갈비', '닭꼬치', '돼지갈비', '떡갈비', '불고기', '소곱창구이', '소양념갈비구이', '소불고기', '양념왕갈비', '햄버거스테이크', '훈제오리', '치킨데리야끼', '치킨윙', '더덕구이', '양배추구이', '두부구이', '삼치구이', '가자미전', '굴전', '동태전', '해물파전', '동그랑땡', '햄부침', '육전', '감자전', '고추전', '김치전', '깻잎전', '녹두빈대떡', '미나리전', '배추전', '버섯전', '부추전', '야채전', '파전', '호박부침개', '호 박전', '달걀말이', '두부부침', '두부전', '건새우볶음', '낙지볶음', '멸치볶음', '어묵볶음', '오징어볶음', '오징어채볶음', '주꾸미볶음', '해물볶음', '감자볶음', '김치볶음', '깻잎나물볶음', '느타리버섯볶음', '두부김치', '머위나물볶음', '양송이버섯볶음', '표고버섯볶음', '고추잡채', '호박볶음', '돼지고기볶음', '돼지껍데기볶음', '소세지볶음', '순대볶음', '오리불고기', '오삼불고기', '떡볶이', '라볶이', '마파두부', '가자미조림', '갈치조림', '고등어조림', '꽁치조림', '동태조림', '북어조림', '조기조림', '코다리조림', '달걀장조림', '메추리알장조림', '돼지고기메추리알장조림', '소고기메추리알장조림', '고추조림', '감자조림', '우엉조림', '알감자조림', '(검은)콩조림', '콩조림', '두부고추장조림', '땅콩조림', '미꾸라지튀김', '새우튀김', '생선가스', '쥐포튀김', '오징어튀김', '닭강정', '닭튀김', '돈가스', '모래집튀김', '양념치킨', '치즈돈가스', '치킨가스', '탕수육', '깐풍기', '감자튀김', '고구마맛탕', '고구마튀김', '고추튀김', '김말이튀김', '채소튀김', '노각무침', '단무지무침', '달래나물무침', '더덕무침', '도라지생채', '도토리묵', '마늘쫑무침', '무생채', '무말랭이', '오이생채', '파무침', '상추겉절이', '쑥갓나물무침', '청포묵무침', '해파리냉채', '가지나물', '고사리나물', '도라지나물', '무나물', '미나리나물', '숙 주나물', '시금치나물', '취나물', '콩나물', '고구마줄기나물', '우거지나물무침', '골뱅이무침', '김무침', '미역초무침', '북어채무침', '회무침', '쥐치채', '파래무침', '홍어무침', '골뱅이국수무침', '오징어무침', '잡채', '탕평채', '갓김치', '고들빼기', '깍두기', '깻잎김치', '나박김치', '동치미', ' 배추겉절이', '배추김치', '백김치', '부추김치', '열무김치', '열무얼갈이김치', '오이소박이', '총각김치', '파김치', '간장게장', '마늘쫑장아찌', '고추장아찌', '깻잎장아찌', '마늘장아찌', '무장아찌', '양념게 장', '양파장아찌', '오이지', '무피클', '오이피클', '단무지', '오징어젓갈', '명란젓', '생연어', '생선물회', '광어회 ', '훈제연어', '육회', '육사시미', '가래떡', '경단', '꿀떡', '시루떡', '메밀전병', '찰떡', '무지개떡', '백설기', '송편', '수수부꾸미', '수수팥떡', '쑥떡', '약식', '인절미', '절편', '증편', '찹쌀떡', '매작과', '다식', '약과', '유과', '산자', '깨강정'
    ];
    const foodamount = [
      '1',
      '2',
      '3',
      '4',
      '5',
    ];

    const IsFocoused = useIsFocused();
    const navigation = useNavigation();
    const [pickedImagePath, setPickedImagePath] = useState('');
    const [food, setFood] = useState();
    const [foodCnt, setFoodCnt] = useState(0);
    const [visible, setVisible] = useState(false);
    let [jData, setjData] = useState('');
    var j =[];
    const [homeData,sethomeData] = useState('');
    var homedat = [[],[],[],[],[]];
    var images = [];
    const data = new FormData()
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
      // console.log(result);dw
  
      if (!result.canceled) {
          setFoodCnt(0)
          setVisible(false)
          setPickedImagePath(result.assets[0].uri);
          // console.log(result.assets[0].uri);
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
      // console.log(result);
  
    
      if (!result.canceled) {
        setFoodCnt(0)
        setVisible(false)
        setPickedImagePath(result.assets[0].uri);
        // console.log(result.assets[0].uri);
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
          console.log(res.data)
          var da = res.data.map(function(item){
            return {
              id : item.id,
              name: item.name,
              amount: item.amount
            }
          })
          // setjData(res.data)
          setjData(res.data)
          da = da.filter((f) => f.name !== undefined)
          setPickedImagePath(`data:image/jpeg;base64,${res.data[0].image_data}`)
          setFoodCnt(res.data.length - 1)
          setFood(da)
          setVisible(true);
        })
  
        .catch((err) => {
          Alert.alert('멍청이가 인식하지 못했어요!')
          console.log('에러...');
          console.error(err);
        });
    };
    const showFoodList = () =>{

      const result = [];
      if(visible){
        for (let i = 0; i < foodCnt; i++){
          const a = food[i].id
          const b = food[i].name
          const c = food[i].amount
          result.push(
            <View style={styles.textBox} key={i}>
            {/* <TextInput style={styles.textBox}key={i}> */}
              {/* <Text style={styles.textInput} onPress={abb}>id: {food[i].id}</Text>
              <Text style={styles.textInput2}>이름: { food[i].name}</Text>
              <Text style={styles.textInput3}>양: {food[i].amount}</Text> */}<Text style={{fontSize:15,marginLeft:'5%'}}>음식이름 : </Text>
              <SelectDropdown
            data={foodList}
            // defaultValueByIndex={1}
            // defaultValue={'England'}
            onSelect={(selectedItem) => {
              // console.log(selectedItem, index);
              jData[i+1].name=selectedItem
            }}
            defaultButtonText={food[i].name}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown2BtnStyle}
            buttonTextStyle={styles.dropdown2BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#000'} size={10} />;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown2DropdownStyle}
            rowStyle={styles.dropdown2RowStyle}
            rowTextStyle={styles.dropdown2RowTxtStyle}
            selectedRowStyle={styles.dropdown2SelectedRowStyle}
            search
            searchInputStyle={styles.dropdown2searchInputStyleStyle}
            searchPlaceHolder={'Search here'}
            searchPlaceHolderColor={'#F8F8F8'}
            renderSearchInputLeftIcon={() => {
              return <FontAwesome name={'search'} color={'#000'} size={18} />;
            }}
          />
          <Text style={{fontSize:15,marginLeft:'5%'}}>양 :</Text>
          <SelectDropdown

            data={foodamount}
            // defaultValueByIndex={1}
            // defaultValue={'England'}
            onSelect={(selectedItem) => {
              jData[i+1].amount=selectedItem
            }}
            defaultButtonText={food[i].amount}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown3BtnStyle}
            buttonTextStyle={styles.dropdown2BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#000'} size={10} />;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown2DropdownStyle}
            rowStyle={styles.dropdown2RowStyle}
            rowTextStyle={styles.dropdown2RowTxtStyle}
            selectedRowStyle={styles.dropdown2SelectedRowStyle}
            searchInputStyle={styles.dropdown2searchInputStyleStyle}
            searchPlaceHolder={'Search here'}
            searchPlaceHolderColor={'#F8F8F8'}
            renderSearchInputLeftIcon={() => {
              return <FontAwesome name={'search'} color={'#000'} size={18} />;
            }}
          />
              {/* </TextInput> */}
                {/* <TextInput style={styles.textInput} value={'{}'}
                onChangeText={val=>{
                  
                }} key={i}/>
                <TextInput style={styles.textInput2} value={b}
                onChangeText={val=>{
                  
                }}/><TextInput style={styles.textInput3} value={c}
                onChangeText={val=>{
                  
                }}/> */}
            </View>)
        }
      }
      return result
    }
    const sendText = async () => {
      await axios
        .post('http://121.174.150.180:50001/save',JSON.stringify(jData),{
          headers: {
            'content-type': 'application/json',
          },
          responseType: 'json'
        })
        .then((res) => {
          // console.log(res.data)
          for(let i =0;i<7;i++){
            homedat[0][i]=res.data[i].date.substring(5,)
            homedat[1][i]=res.data[i].kacl
            homedat[2][i]=res.data[i].carbo
            homedat[3][i]=res.data[i].protein
            homedat[4][i]=res.data[i].province
          }
          for(let i =7;i<16;i++){
            images[i-7]=res.data[i].image_data    
          }
          console.log(images)
          sethomeData(homedat);        
          AsyncStorage.setItem('nickname',JSON.stringify(homedat), () => {
          });
          AsyncStorage.setItem('aaaaa',JSON.stringify(images), () => {
          });
          
        })
  
        .catch((err) => {
          console.log('에러...');
          console.error(err);
        }); 
    };
     const navigateToScreen=()=>{
        navigation.navigate('Home',{
          a:{homedat} 
        });
      // try {
      //   const jsonValue = JSON.stringify(homeData)
      //   await AsyncStorage.setItem('@storage_Key', jsonValue)

      //   console.log(jsonValue)
      // } catch (e) {
      //   // saving error
      // }
    }
    const abb = () => {
      navigation.navigate('edit',{c:food})
    };
    return(
        <View style={styles.screen}>
  
        <View style={styles.imageContainer} >
          <View style={styles.imageBox}>
          {
            pickedImagePath && <Image source={{ uri: pickedImagePath }}
            style={styles.image} /> 
          }    
          </View>
          {/* <Button title = 'dddd'onPress={console.log(route.params.a)}></Button> */}
          {/* {
            pickedImagePath && <Image source={{ uri: pickedImagePath }}
            style={styles.imageBox} /> 
          } */}
        </View>
        <View style={styles.labelContainer}>
            {visible && <View style={styles.labelContainer}>
            {showFoodList()}
          </View>}
        </View>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={actionSheet}>
            <Icon name="camera" size={24} color="#ffffff"> or <Icon name="copy" size={24} color="#ffffff" /></Icon>             
          </Pressable>
          <Pressable style={styles.button} onPress={postImage}>
            <Icon name="send" size={24} color="#ffffff" />
          </Pressable>
          <Pressable style={styles.button} onPress={()=>{sendText() ,navigateToScreen()}}>
            
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
  labelContainer: {
      width: '100%',
      height:"35%",
      alignItems:'center',
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
      backgroundColor: 'white',
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
      width: "90%",
      height:'35%',
      borderWidth: 1,
      borderRadius: 10,
      marginTop:'5%',
      flexDirection:'row',
      alignItems:'center'
    },
    imageBox:{
      width:'90%',
      height:"90%",
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center',
      resizeMode : 'contain',
      backgroundColor: '#ffffff',
      shadowColor: "#000",
        shadowOffset: {
          width: 5,
          height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },

    image: {
      width:'100%',
      height:"100%",
      borderRadius:10,
      resizeMode : 'contain',
      backgroundColor: '#ffffff'
    },
    textInput:{
      marginLeft:'5%',
    },
    textInput2:{
      width:'45%',
      paddingLeft:'3%'
    },
    textInput3:{
      width:'2%',
      paddingLeft:'3%'
    },
    dropdown2BtnStyle: {
      width: '45%',
      height: 20,
      backgroundColor: '#fff',
      borderRadius: 8,
      marginRight:'5%'
    },
    dropdown2BtnTxtStyle: {
      color: '#000',
      textAlign: 'center',
      fontSize:15
      // fontWeight: 'bold',
    },
    dropdown2DropdownStyle: {
      backgroundColor: '#fff',
      borderRadius: 12,
    },
    dropdown2RowStyle: {backgroundColor: '#fff', borderBottomColor: '#C5C5C5'},
    dropdown2RowTxtStyle: {
      color: '#000',
      textAlign: 'center',
      fontWeight: 'bold',
    },
    dropdown2SelectedRowStyle: {backgroundColor: 'rgba(255,255,255,0.2)'},
    dropdown2searchInputStyleStyle: {
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: '#FFF',
    },
    dropdown3BtnStyle: {
      marginLeft:'3%',
      width: '15%',
      height: 20,
      backgroundColor: '#fff',
      borderRadius: 8,
    },
  });
  


  export default DetailScreen;