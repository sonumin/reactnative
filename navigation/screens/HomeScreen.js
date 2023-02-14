import * as React from 'react';
import {View,Dimensions,Text,StyleSheet, Button} from 'react-native';
import VerticalBarGraph from '@chartiful/react-native-vertical-bar-graph';
import { useRoute } from '@react-navigation/native';
import  { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LineChart} from "react-native-chart-kit";

const HomeScreen= ()=>{
        const route = useRoute();
        const [result,setResult] = useState([[0,],[0,],[0,],[0,],[0,]]);
        

        AsyncStorage.getItem('nickname', (err, value) => {
            setResult(JSON.parse(value))

        });

        // if(route.params.a != undefined){
        //     setResult(route.params.a)
        // }

        return(
        <View style ={styles.screen}>
            <View style ={styles.proContainer}>                                           
                <View style ={styles.totalpersentCon}>

                </View>
                <View style ={styles.threeContainer}>

                </View>
            </View>
            <View style={styles.graphContainer}>
        
                   <LineChart
                        data={{
                        labels: result[0],
                        datasets: [
                            {
                            data: result[1]
                            }
                        ]
                        ,
                        legend:['  kcal'],
                        }}
                        width={Dimensions.get("window").width-20} // from react-native
                        height={220}
                        withInnerLines={false}
                        // yAxisLabel="$"
                        // yAxisSuffix="k"
                        
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                        paddingTop:30,    
                        backgroundColor: "#d7e5fc",
                        backgroundGradientFrom: "#d7e5fc",
                        backgroundGradientTo: "#d7e5fc",
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(10, 10, 10, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#d7e5fc"
                        }
                        }}
                        bezier
                        style={{
                        marginVertical: 8,
                        borderRadius: 20,
                        }}
                    />
            </View> 
        </View>
    );                                    
}  

const styles = StyleSheet.create({
    screen:{
        flex:1, 
        alignItems: 'center',
        backgroundColor:'#ffffff',
    },
    proContainer:{
        width:'100%',
        height:'60%',
        backgroundColor:'#ffffff',
        alignItems:'center',

    },
    totalpersentCon:{
        width:'95%',
        height: '32%',
        backgroundColor:'#d7e5fc',
        borderRadius:'20',
        marginTop:'5%',
        marginright:'2%',
        marginBottom:'3%'
    },
    threeContainer:{
        width:'95%',
        height: '60%',
        backgroundColor:'#d7e5fc',
        borderRadius:'20',
        marginTop:'3%',
        marginBottom:'2%',
        marginRight:'3%',
        marginLeft:'3%'
    },
    
    graphContainer:{
        width:'100%',
        height:'40%',
        justifyContent:'center',
        alignItems:'center'
    },
   
   });

export default HomeScreen;