import * as React from 'react';
import {View,Dimensions,Text,StyleSheet, Button} from 'react-native';
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';
import { useRoute } from '@react-navigation/native';
import  { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const HomeScreen= ()=>{
        const route = useRoute();
        const a=[];
        const [result,setResult] = useState('');
        AsyncStorage.getItem('nickname', (err, value) => {
            setResult(JSON.parse(value))
            // console.log('되었노 니거'); // User1 출력
        });
    
        return(
        <View style ={styles.screen}>
            <View style ={styles.proContainer}>                                           
                <View style={styles.todayProg}>
                    <Text marginTop={5}>♥ 오늘 목표퍼센트 ♥</Text>
                    <View>
                    </View>     
                </View>

                <View style={styles.threeProg}>
                    <View style={styles.fat}>
                        <Button title={'dddd'}onPress={()=>{console.log(result)}}>ddd</Button>
                    </View>
                    <View style={styles.fat}>
                    </View>
                    <View style={styles.fat}>

                    </View>
                </View>
            </View>
            {/* <View style={styles.graphContainer}>
                <VerticalBarGraph
                       data={(result[1])}
                        labels={(result[0])}
                        width={Dimensions.get('window').width - 30}
                        height={200}
                        barRadius={5}
                        barWidthPercentage={0.65}r
                        barColor='#53ae31'
                        baseConfig={{
                            hasXAxisBackgroundLines: false,
                            xAxisLabelStyle: {
                            position: 'right',
                            // prefix: 'k'
                            }
                        }}
                        style={{
                            marginBottom: 10,
                            marginTop:10,
                            padding: 10,
                            paddingTop: 20,
                            borderRadius: 20,
                            backgroundColor: `#dff4d7`,
                            width: Dimensions.get('window').width - 10
                            }}
                            />
            </View>  */}
        </View>
    );                                    
}  

const styles = StyleSheet.create({
    screen:{
        flex:1, 
        alignItems: 'center'
    },
    proContainer:{
        width:'100%',
        height:'60%',
    },
    todayProg:{
        width:'100%',
        height:'30%',
        backgroundColor:'blue',
        alignItems:'center',
        textAlign:'center'
    },
    threeProg:{
        width:'100%',
        height:'70%',
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    graphContainer:{
        width:'100%',
        height:'40%',
        backgroundColor:'orange',
        justifyContent:'center',
        alignItems:'center'
    },
    todayProg_Text:{
        marginTop:'2%',
        textAlign:'center',
        height:'30%',
        backgroundColor:'red'
    },
    fat:{
        height:'50%',
        width: '32%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red'
    }
   });

export default HomeScreen;