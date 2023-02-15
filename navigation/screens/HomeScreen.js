import * as React from 'react';
import {View,Dimensions,Text,StyleSheet, Button,ScrollView} from 'react-native';
import { useRoute } from '@react-navigation/native';
import  { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LineChart,ProgressChart} from "react-native-chart-kit";
const { width } = Dimensions.get('window');

const HomeScreen= ()=>{
        const route = useRoute();
        const [result,setResult] = useState([[0,],[0,],[0,],[0,],[0,]]);
    

        AsyncStorage.getItem('nickname', (err, value) => {
            setResult(JSON.parse(value))

        });
        // if(route.params.a != undefined){
        //     setResult(route.params.a)
        // }
        const componentDidMount=()=> {
            setTimeout(() => {this.scrollView.scrollTo({x: -30}) }, 1) // scroll view position fix
        }
        return(
        <View style ={styles.screen}>
            <View style ={styles.proContainer}>                                           
                <View style ={styles.totalpersentCon}>

                </View>
                {/* <View style ={styles.threeContainer}>
                </View> */}
             <ScrollView 
                // ref={(scrollView) => { this.scrollView = scrollView; }}
                
                // pagingEnabled={true}
                horizontal= {true}
                decelerationRate={0}
                snapToInterval={width}
                snapToAlignment={"center"}
                contentInset={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                }}>
                <View style={styles.view}>
                    <Text style={{fontSize:25,width:width*0.95,height:'20%',marginTop:'3%'}}>  Today Eat Carbo</Text>
                    <View style={{width:width*0.95,height:'80%',flexDirection:'row'}}>
                        <View style={{width:'60%',height:'100%'}}>
                        <ProgressChart
                            data={[0.5]}
                            width={width*0.95*0.6}
                            height={180}
                            strokeWidth={16}
                            radius={60}
                            chartConfig={{
                                backgroundColor: "#d7e5fc",
                                borderRadius:'20',
                                backgroundGradientFrom: "#d7e5fc",
                                backgroundGradientTo: "#d7e5fc",
                                decimalPlaces: 2, // optional, defaults to 2dp
                                color: (opacity = 1) => `rgba(10, 10, 10, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(10, 10, 10, ${opacity})`,
                                style: {
                                    borderRadius: 16
                                },
                                propsForDots: {
                                    r: "6",
                                    strokeWidth: "2",
                                    stroke: "#ffa726"
                                }
                            }}
                            hideLegend={false}
                            />
                        </View>
                        <View style={{width:'40%',height:'100%',display:'flex'}}>
                            <Text  style={{textAlign:'center',marginTop:'80%',fontSize:20}}>{result[2][0]}g</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.view}>
                    <Text style={{fontSize:25,width:width*0.95,height:'20%'}}>  Today Eat Protein</Text>
                    <View style={{width:width*0.95,height:'80%',flexDirection:'row'}}>
                        <View style={{width:'60%',height:'100%'}}>
                        <ProgressChart
                            data={[0.5]}
                            width={width*0.95*0.6}
                            height={180}
                            strokeWidth={16}
                            radius={60}
                            chartConfig={{
                                backgroundColor: "#d7e5fc",
                                backgroundGradientFrom: "#d7e5fc",
                                backgroundGradientTo: "#d7e5fc",
                                decimalPlaces: 2, // optional, defaults to 2dp
                                color: (opacity = 1) => `rgba(10, 10, 10, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(10, 10, 10, ${opacity})`,
                                style: {
                                    borderRadius: 16
                                },
                                propsForDots: {
                                    r: "6",
                                    strokeWidth: "2",
                                    stroke: "#ffa726"
                                }
                            }}
                            hideLegend={false}
                            />
                        </View>
                        <View style={{width:'40%',height:'100%',display:'flex'}}>
                            <Text  style={{textAlign:'center',marginTop:'80%',fontSize:20}}>{result[2][0]}g</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.view}>
                    <Text style={{fontSize:25,width:width*0.95,height:'20%'}}>  Today Eat Province</Text>
                    <View style={{width:width*0.95,height:'80%',flexDirection:'row'}}>
                        <View style={{width:'60%',height:'100%'}}>
                        <ProgressChart
                            data={[0.5]}
                            width={width*0.95*0.6}
                            height={180}
                            strokeWidth={16}
                            radius={60}
                            chartConfig={{
                                backgroundColor: "#d7e5fc",
                                backgroundGradientFrom: "#d7e5fc",
                                backgroundGradientTo: "#d7e5fc",
                                decimalPlaces: 2, // optional, defaults to 2dp
                                color: (opacity = 1) => `rgba(10, 10, 10, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(10, 10, 10, ${opacity})`,
                                style: {
                                    borderRadius: 16
                                },
                                propsForDots: {
                                    r: "6",
                                    strokeWidth: "2",
                                    stroke: "#ffa726"
                                }
                            }}
                            hideLegend={false}
                            />
                        </View>
                        <View style={{width:'40%',height:'100%',display:'flex'}}>
                            <Text  style={{textAlign:'center',marginTop:'80%',fontSize:20}}>{result[2][0]}g</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
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
        backgroundColor:'white',
    },
    proContainer:{
        width:'100%',
        height:'60%',

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
    view: {
        marginTop: 10,
        backgroundColor: '#d7e5fc',
        width: width*0.95,
        marginLeft:width*0.025,
        marginRight:width*0.025,
        height: 240,
        borderRadius: 10,
        //paddingHorizontal : 30
      },
      
   });

export default HomeScreen;