import React from 'react'
import { Text, View, Image, ScrollView, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'

const style = StyleSheet.create({
  buttonDims: {
    width: 100,
    height: 100,
  }
});

export default function Pressed(props) {
  return (
    <ScrollView style={{backgroundImage: `url("../assets/Background.png")`, height:'100%', alignContent:'center'}}>
        <View style={{height:'33%', justifyContent: 'center', alignItems:'center'}}>
            <Text style={{fontSize: 100}}>INNOVATION</Text>
            <Text style={{fontSize: 50}}>PRIORITY AREAS</Text>
        </View>
        <View style={{height:'33%', flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
            <Button
            mode="contained"
            onPress={()=>props.navigation.navigate("InnovationDay")}><Image source={{ uri:"../assets/1. Learning and Education.png"}} style={{alt:"1. Learning and Education", width:100, height:100}}/></Button>
            <Button
            mode="contained"
            onPress={()=>props.navigation.navigate("InnovationDay")}><Image source={{ uri:"../assets/2. Health and Wellbeing.png"}} style={{alt:"2. Health and Wellbeing", width:100, height:100}}/></Button>
            <Button
            mode="contained"
            onPress={()=>props.navigation.navigate("InnovationDay")}><Image source={{ uri:"../assets/3. Food and Agribusiness.png"}} style={{alt:"3. Food and Agribusiness", width:100, height:100}}/></Button>
            <Button
            mode="contained"
            onPress={()=>props.navigation.navigate("InnovationDay")}><Image source={{ uri:"../assets/4. Finance.png"}} style={{alt:"4. Finance", width:100, height:100}}/></Button>
            <Button
            mode="contained"
            onPress={()=>props.navigation.navigate("InnovationDay")}><Image source={{ uri:"../assets/5. Manufacturing and Trade.png"}} style={{alt:"5. Manufacturing and Trade", width:100, height:100}}/></Button>
        </View>
        <View style={{height:'33%', flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
            <Button
            mode="contained"
            onPress={()=>props.navigation.navigate("InnovationDay")}><Image source={{ uri:"../assets/6. Transportation and Logistics.png"}} style={{alt:"6. Transportation and Logistics", width:100, height:100}}/></Button>
            <Button
            mode="contained"
            onPress={()=>props.navigation.navigate("InnovationDay")}><Image source={{ uri:"../assets/7. Public Administration.png"}} style={{alt:"7. Public Administration", width:100, height:100}}/></Button>
            <Button
            mode="contained"
            onPress={()=>props.navigation.navigate("InnovationDay")}><Image source={{ uri:"../assets/8. Security and Defense.png"}} style={{alt:"8. Security and Defense", width:100, height:100}}/></Button>
            <Button
            mode="contained"
            onPress={()=>props.navigation.navigate("InnovationDay")}><Image source={{ uri:"../assets/9. Energy.png"}} style={{alt:"9. Energy", width:100, height:100}}/></Button>
            <Button
            mode="contained"
            onPress={()=>props.navigation.navigate("InnovationDay")}><Image source={{ uri:"../assets/10. Blue Water and Economy.png"}} style={{alt:"10. Blue Water and Economy", width:100, height:100}}/></Button>
        </View>  
        <Image source={require('../assets/Background.png')}/>
    </ScrollView>
  )
}
//landingpage
