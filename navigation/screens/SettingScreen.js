import * as React from 'react';
import {View, Text,StyleSheet,Image,FlatList,TouchableOpacity} from 'react-native';
const SettingScreen=()=>{
    const bookArr=[
        {
          idx:"1",
          src: 'require("/assets/egg-bread.png")',
        },
        {
          idx:"2",
          src: 'require("/assets/egg-bread.png")',
        },
        {
          idx:"3",
          src: 'require("/assets/egg-bread.png")',
        },
        {
          idx:"4",
          src: 'require("/assets/egg-bread.png")',
        },
        {
          idx:"5",
          src:'require("/assets/egg-bread.png")',

        },
        {
          idx:"6",
          src:'require("/assets/egg-bread.png")',
        },
        {
          idx:"7",
          src:'require("/assets/egg-bread.png")',

        },
        console.log(bookArr)
      ];
    return(
        <View style={styles.screen}>
            <View style={styles.user}>

            </View>
            <View style={styles.imageContainer}>
                <View  style={styles.backgroundImage}>
                    <FlatList
                    keyExtractor={item => item.idx}
                    data={bookArr}
                    style={styles.bookContainer}
                    renderItem={({item}) => (
                        <TouchableOpacity>
                        <View
                        style={{
                            flex:1,
                            flexDirection:'column',
                            margin:10
                        }}>
                            <Image
                            style={styles.imageThumbnail}
                            source={item.src}
                            />
                        </View>
                        </TouchableOpacity>
                    )}
                    numColumns={3}
                    />
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
        height:'40%',
        backgroundColor:'aqua'
    },
    imageContainer:{
        width:'100%',
        height:'50%',
        backgroundColor:'white'
    },
    backgroundImage:{
        width: "100%",
        height:"100%",
      },
      boardImage:{
        marginTop:"10%",
        marginLeft:"5%",
        width:"95%",
        height:"95%",
      },
      imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode:'contain',
        width:190,
        height:250,
      },
      bookContainer: {
        marginHorizontal:"8%",
        marginVertical:"10%",
      },
})
export default SettingScreen;