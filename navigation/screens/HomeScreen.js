import * as React from 'react';
import {View, Text} from 'react-native';
import * as Progress from 'react-native-progress';

const HomeScreen= ()=>{
    return(
        <View style ={{flex:1, alignItems: 'center'}}>
            <Progress.Bar progress={10}style={{width:'100%',marginTop:'5%'}}></Progress.Bar>
            <Text
            onPress={()=> alert('This is the "Home" Screen.')}
            style ={{fontSize:26,fontWeight:'bold'}}>Home Screen</Text>
        </View>
    );                                    
}  

export default HomeScreen;