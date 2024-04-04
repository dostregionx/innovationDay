import React from 'react'
import { View, Image } from 'react-native'
import { Button } from 'react-native-paper'


export default function Pressed(props) {
  return (
    <View style={{ flex:1, flexDirection: 'row', alignItems: 'center',justifyContent: 'center', }}>
        <Button
        mode="contained"
        onPress={()=>props.navigation.navigate("InnovationDay")}>Press Me</Button>
    </View>
  )
}

