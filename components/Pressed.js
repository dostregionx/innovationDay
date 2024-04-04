import React from 'react'
import { View, Image } from 'react-native'
import { Button } from 'react-native-paper';

export default function Pressed(props) {
  return (
    <View style={{ flex:1, alignItems: 'center',justifyContent: 'center' }}>
        <Image
        style={{flex:1, width:'100%', height:'100%', resizeMode:'contain'}}
        source={require('../assets/innovationday.png')}
        />
        <Button
        mode="text"
        onPress={()=>props.navigation.navigate("Landing")}>Back</Button>
    </View>
  )
}
"D:\React\InnovationDay\node_modules\react-native-screens\android\src\main\AndroidManifest.xml"

