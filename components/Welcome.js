import React, {useState} from 'react';
import { Text, View, Image, StyleSheet, ImageBackground, Pressable } from 'react-native'


const App=()=>{
  
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={{backgroundImage: `url("../assets/Background.png")`, height:'100%', alignContent:'center'}}>
        <ImageBackground source={background} resizeMode="cover" style={style.image}>
            <View style={{height:'33%', justifyContent: 'center', alignItems:'center'}}>
                <Text style={[{fontSize: 100},style.glacialindifferenceBold]}>INNOVATION</Text>
                <Text style={{fontSize: 50}}>PRIORITY AREAS</Text>
            </View>
            
            <View style={{height:'33%', flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
                <Pressable
                  onPress={toggleSwitch}>
                  <Image
                    source={require('../assets/icons/1. Learning and Education.png')}
                    style={[style.buttonDims, {backgroundColor: isEnabled?'green':'00FFFFFF'},{borderRadius:75}]}/>
                </Pressable>
                <Pressable
                  onPress={toggleSwitch}>
                  <Image
                    source={require('../assets/icons/2. Health and Wellbeing.png')}
                    style={[style.buttonDims, {backgroundColor: isEnabled?'green':'00FFFFFF'},{borderRadius:75}]}/>
                </Pressable>
                <Pressable
                  onPress={toggleSwitch}>
                  <Image
                    source={require('../assets/icons/3. Food and Agribusiness.png')}
                    style={[style.buttonDims, {backgroundColor: isEnabled?'green':'00FFFFFF'},{borderRadius:75}]}/>
                </Pressable>
                <Pressable
                  onPress={toggleSwitch}>
                  <Image
                    source={require('../assets/icons/4. Finance.png')}
                    style={[style.buttonDims, {backgroundColor: isEnabled?'green':'00FFFFFF'},{borderRadius:75}]}/>
                </Pressable>
                <Pressable
                  onPress={toggleSwitch}>
                  <Image
                    source={require('../assets/icons/5. Manufacturing and Trade.png')}
                    style={[style.buttonDims, {backgroundColor: isEnabled?'green':'00FFFFFF'},{borderRadius:75}]}/>
                </Pressable>
            </View>
            <View style={{height:'33%', flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
                <Pressable
                  onPress={toggleSwitch}>
                  <Image
                    source={require('../assets/icons/6. Transportation and Logistics.png')}
                    style={[style.buttonDims, {backgroundColor: isEnabled?'green':'00FFFFFF'},{borderRadius:75}]}/>
                </Pressable>
                <Pressable
                  onPress={toggleSwitch}>
                  <Image
                    source={require('../assets/icons/7. Public Administration.png')}
                    style={[style.buttonDims, {backgroundColor: isEnabled?'green':'00FFFFFF'},{borderRadius:75}]}/>
                </Pressable>
                <Pressable
                  onPress={toggleSwitch}>
                  <Image
                    source={require('../assets/icons/8. Security and Defense.png')}
                    style={[style.buttonDims, {backgroundColor: isEnabled?'green':'00FFFFFF'},{borderRadius:75}]}/>
                </Pressable>
                <Pressable
                  onPress={toggleSwitch}>
                  <Image
                    source={require('../assets/icons/9. Energy.png')}
                    style={[style.buttonDims, {backgroundColor: isEnabled?'green':'00FFFFFF'},{borderRadius:75}]}/>
                </Pressable>
                <Pressable
                  onPress={toggleSwitch}>
                  <Image
                    source={require('../assets/icons/10. Blue Water and Economy.png')}
                    style={[style.buttonDims, {backgroundColor: isEnabled?'green':'00FFFFFF'},{borderRadius:75}]}/>
                </Pressable>
            </View>  
        </ImageBackground>
    </View>
  )
};

const style = StyleSheet.create({
  buttonDims: {
    width: 100,
    height: 100
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  btn: {
    color: "00FFFFFF",
  },
  btnActive: {
    color: 'green',
  },
  glacialindifferenceBold: {
    fontFamily: 'GlacialIndifference-Bold', // Use the actual font family name
    src: require('../assets/fonts/GlacialIndifference-Bold.otf'),
    fontSize: 100, // Adjust the font size as needed
  },
  // glacialindifferenceRegular: {
  //   fontFamily: 'GlacialIndifference-Regular', // Use the actual font family name
  //   fontSize: 16, // Adjust the font size as needed
  // },
  // leaguespartan: {
  //   fontFamily: 'leaguespartan', // Use the actual font family name
  //   fontSize: 16, // Adjust the font size as needed
  // },
});


const background = {uri: '../assets/Background.png'};

export default App;
  
//landingpage
