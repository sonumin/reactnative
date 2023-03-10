import * as React from 'react';
import {View,Dimensions,Text,StyleSheet, Button,ScrollView} from 'react-native';
import { useRoute,useIsFocused, useNavigation } from '@react-navigation/native';
import  { useState,useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LineChart,ProgressChart} from "react-native-chart-kit";
import * as Progress from "react-native-progress";

const { width, height } = Dimensions.get('window');
const viewcolor = '#ffffff';
const screencolor = '#ffffff';
const HomeScreen= ()=>{
        const isFocused = useIsFocused();
        useEffect(()=>{
            getdata();
        },[isFocused])
 // isFoucesd Define
        const navigation = useNavigation();
        const [result,setResult] = useState([[0,],[0,],[0,],[0,],[0,],[0,]]);
        const [goal,setGoal] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0]);
        const [persent,setPersent] = useState([0,0,0,0]);
        const viewcolor = '#ffffff'
        const probarcolor = `rgba(0, 0, 255, 0.66)`
        const ringcolor =(opacity = 0.9) => `rgba(0, 0, 255, ${opacity})`
        const getdata= async()=>{
            let p =[];
            // AsyncStorage.getItem('profile', (err, value) => {
            //     setGoal(JSON.parse(value))
            // });
            AsyncStorage.getItem('profile', (err, value) => {
                setGoal(JSON.parse(value))
            });  
            AsyncStorage.getItem('nickname', (err, value) => {
                setResult(JSON.parse(value))
            })
            for(let i =0;i<4;i++){
                p[i] = parseInt(result[i+1][0])/parseInt(goal[i+3])
            }
            setPersent(p)
        }
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
                    <Text style={{fontSize:25,width:width*0.88,height:'20%',marginTop:'2%',borderBottomWidth:'1'}}> ????????? ?????????</Text>
                    <View style={{width:width*0.88,height:'80%',borderRadius:16}}>
                        <View style={{width:'100%',height:'60%',borderRadius:16}}>
                            <View style={{width:'100%',height:'30%',marginTop:'8%',alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                                <Progress.Bar
                                    progress={persent[0]>0?persent[0]:0}
                                    width={width*0.88*0.75}
                                    height={height*0.015}
                                    color={probarcolor}/>
                                    <Text style={{fontSize:15,textAlign:'center',marginLeft:'4%'}}>{persent[0]>0?(persent[0]*100).toFixed():0}%</Text>
                                    
                            </View>
                            {/* <Button title='dd' onPress={getdata}>ddddd</Button> */}
                        </View>
                        <View style={{width:width*0.88,height:'40%'}}>
                            <Text style={{marginTop:'2%',marginLeft:'63%',textAlign:'center',fontSize:20}}>{persent[0]<1?result[1][0]+' /kcal':'??????'}</Text>
                        </View>
                    </View>
                </View>
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
                            data={[persent[1]<1?persent[1]:1]}
                            width={width*0.95*0.6}
                            height={height*0.18}
                            strokeWidth={16}
                            radius={height*0.07}
                            chartConfig={{
                                backgroundColor: viewcolor,
                                borderRadius:'20',
                                backgroundGradientFrom: viewcolor,
                                backgroundGradientTo: viewcolor,
                                decimalPlaces: 2, // optional, defaults to 2dp
                                color: ringcolor,
                                labelColor: ringcolor,
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
                            style={{borderRadius:16}}
                            />
                        </View>
                        <View style={{width:'40%',height:'100%',display:'flex'}}>
                            <Text  style={{textAlign:'center',marginTop:'80%',fontSize:20}}>{persent[1]<1?result[2][0]+' g':'??????!'}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.view}>
                    <Text style={{fontSize:25,width:width*0.95,height:'20%',marginTop:'3%'}}>  Today Eat Protein</Text>
                    <View style={{width:width*0.95,height:'80%',flexDirection:'row'}}>
                        <View style={{width:'60%',height:'100%'}}>
                        <ProgressChart
                            data={[persent[2]<1?persent[2]:1]}
                            width={width*0.95*0.6}
                            height={height*0.18}
                            strokeWidth={16}
                            radius={height*0.07}
                            chartConfig={{
                                backgroundColor: viewcolor,
                                backgroundGradientFrom: viewcolor,
                                backgroundGradientTo: viewcolor,
                                decimalPlaces: 2, // optional, defaults to 2dp
                                color: ringcolor,
                                labelColor: ringcolor,
                                propsForDots: {
                                    r: "6",
                                    strokeWidth: "2",
                                    stroke: "#ffa726"
                                }
                            }}
                            hideLegend={false}
                            style={{borderRadius:16}}
                            />
                        </View>
                        <View style={{width:'40%',height:'100%',display:'flex'}}>
                            <Text  style={{textAlign:'center',marginTop:'80%',fontSize:20}}>{persent[2]<1?result[3][0]+' g':'??????!!'}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.view}>
                    <Text style={{fontSize:25,width:width*0.95,height:'20%',marginTop:'3%'}}>  Today Eat Province</Text>
                    <View style={{width:width*0.95,height:'80%',flexDirection:'row'}}>
                        <View style={{width:'60%',height:'100%'}}>
                        <ProgressChart
                            data={[persent[3]<1?persent[3]:1]}
                            width={width*0.95*0.6}
                            height={height*0.18}
                            strokeWidth={16}
                            radius={height*0.07}
                            chartConfig={{
                                backgroundColor: viewcolor,
                                backgroundGradientFrom: viewcolor,
                                backgroundGradientTo: viewcolor,
                                decimalPlaces: 2, // optional, defaults to 2dp
                                color:  ringcolor,
                                labelColor:ringcolor,
                                style: {
                                    borderRadius: 16,
                                },
                                propsForDots: {
                                    r: "6",
                                    strokeWidth: "2",
                                    stroke: "#ffa726"
                                }
                            }}
                            hideLegend={false}
                            style={{borderRadius:16}}
                            />
                        </View>
                        <View style={{width:'40%',height:'100%',display:'flex'}}>
                            <Text  style={{textAlign:'center',marginTop:'80%',fontSize:20}}>{persent[3]<1?result[4][0]+' g':'??????!'}</Text>
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
                        width={width*0.88} // from react-native
                        height={height*0.26}
                        withInnerLines={false}
                        // yAxisLabel="$"
                        // yAxisSuffix="k"
                        
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                        paddingTop:30,    
                        backgroundColor: viewcolor,
                        backgroundGradientFrom: viewcolor,
                        backgroundGradientTo: viewcolor,
                        decimalPlaces: 0, // optional, defaults to 2dp
                        color: (opacity = 0.2) => `rgba(0, 0, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        // style: {
                        //     borderRadius: 16
                        // },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#d7e5fc"
                        }
                        }}
                        bezier
                        style={{
                        marginVertical: 8,
                        borderRadius: 16,
                        marginBottom:12,
                        shadowColor: "#000",
                        shadowOffset: {
                          width: 5,
                          height: 5,
                        },
                        shadowOpacity: 0.5,
                        shadowRadius: 10,
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
        backgroundColor:screencolor,
    },
    proContainer:{
        width:'100%',
        height:'60%',
        alignItems:'center',

    },
    totalpersentCon:{
        width:'88%',
        height: '32%',
        backgroundColor:viewcolor,
        borderRadius:20,
        marginTop:'5%',
        marginright:'2%',
        marginBottom:'3%',
        shadowColor: "#000",
        shadowOffset: {
          width: 3,
          height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
      },

    
    graphContainer:{
        width:'100%',
        height:'37%',
        justifyContent:'center',
        alignItems:'center',
    },
    view: {
        marginTop: 10,
        backgroundColor: viewcolor,
        width: width*0.88,
        marginLeft:width*0.06,
        marginRight:width*0.06,
        height: height*0.25,
        borderRadius: 16,
        shadowColor: "#000",
        shadowOffset: {
          width: 5,
          height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        //paddingHorizontal : 30
      },
      graphview:{
        width:width-20, // from react-native
        height:220,
      }
      
   });

export default HomeScreen;
