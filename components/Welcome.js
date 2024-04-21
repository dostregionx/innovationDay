import React, {useState} from 'react';
import { Text, View, Image, StyleSheet, ImageBackground, Pressable } from 'react-native';
import {useFonts} from 'expo-font';

export default function Pressed(props){
  const [fontsLoaded, fontError] = useFonts({
    'GlacialIndifference-Bold': require('../assets/fonts/GlacialIndifference-Bold.otf'),
    'GlacialIndifference-Regular': require('../assets/fonts/GlacialIndifference-Regular.otf'),
    'leaguespartan-bold': require('../assets/fonts/leaguespartan-bold.ttf'),
  });
  const [isPressed1, setIsPressed1] = React.useState(false);
  const [isPressed2, setIsPressed2] = React.useState(false);
  const [isPressed3, setIsPressed3] = React.useState(false);
  const [isPressed4, setIsPressed4] = React.useState(false);
  const [isPressed5, setIsPressed5] = React.useState(false);
  const [isPressed6, setIsPressed6] = React.useState(false);
  const [isPressed7, setIsPressed7] = React.useState(false);
  const [isPressed8, setIsPressed8] = React.useState(false);
  const [isPressed9, setIsPressed9] = React.useState(false);
  const [isPressed0, setIsPressed0] = React.useState(false);
  const toggleSwitch1 = () => setIsPressed1(previousState => !previousState);
  const toggleSwitch2 = () => setIsPressed2(previousState => !previousState);
  const toggleSwitch3 = () => setIsPressed3(previousState => !previousState);
  const toggleSwitch4 = () => setIsPressed4(previousState => !previousState);
  const toggleSwitch5 = () => setIsPressed5(previousState => !previousState);
  const toggleSwitch6 = () => setIsPressed6(previousState => !previousState);
  const toggleSwitch7 = () => setIsPressed7(previousState => !previousState);
  const toggleSwitch8 = () => setIsPressed8(previousState => !previousState);
  const toggleSwitch9 = () => setIsPressed9(previousState => !previousState);
  const toggleSwitch0 = () => {setIsPressed0(previousState => !previousState); props.navigation.navigate("InnovationDay")};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
    },
    buttonDims: {
      width: 100,
      height: 100,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    btnNormal: {
      color: "00FFFFFF",
    },
    btnPress: {
      color: 'green',
    },
    title:{
      textAlign: 'center',
      marginBottom: 10,
    },
    selected:{
      color:'green',
      borderRadius: 75,
    },
    label:{
      color:'white',
    },
    selectedLabel:{
      color:'green',
    },
    glacialindifferenceBold: {
      fontFamily: 'GlacialIndifference-Bold', // Use the actual font family name
      fontSize: 70, // Adjust the font size as needed
      color: 'white',
    },
    glacialindifferenceRegular: {
      fontFamily: 'GlacialIndifference-Regular', // Use the actual font family name
      fontSize: 65, // Adjust the font size as needed
      color: 'white',
    },
    leaguespartanBold: {
      fontFamily: 'leaguespartan-bold', // Use the actual font family name
      fontSize: 16, // Adjust the font size as needed
      color: 'white',
    },
  });
  
  
  const background = {uri: '../assets/Background.png'};
  return (
    <View style={styles.container}>
        <ImageBackground source={background} resizeMode="cover" style={[styles.image,{padding: 50}]}>
            <View style={[styles.container, {justifyContent: 'center', alignItems:'center'}]}>
                <Text style={[styles.glacialindifferenceBold,styles.title]}>INNOVATION</Text>
                <Text style={[styles.glacialindifferenceRegular,styles.title]}>PRIORITY AREAS</Text>
            </View>
            <View style={[styles.container, {flexDirection: 'row', justifyContent: 'center'}]}>
                <Pressable
                  onPress={toggleSwitch1}
                  style={[styles.container, {alignItems:'center'}]}>
                  <Text style={[styles.leaguespartanBold, {color:isPressed1?'green':'white'}]}>Learning and Education</Text>
                  <Image
                    source={require('../assets/icons/1. Learning and Education.png')}
                    style={[styles.buttonDims, {backgroundColor: isPressed1?'green':'00FFFFFF'},{borderRadius:75}]}/>
                </Pressable>
                <Pressable
                  onPress={toggleSwitch2}
                  style={[styles.container, {alignItems:'center'}]}>
                  <Text style={[styles.leaguespartanBold, {color:isPressed2?'green':'white'}]}>Health and Wellbeing</Text>
                  <Image
                    source={require('../assets/icons/2. Health and Wellbeing.png')}
                    style={[styles.buttonDims, {backgroundColor: isPressed2?'green':'00FFFFFF'},{borderRadius:75}]}/>
                </Pressable>
                <Pressable
                  onPress={toggleSwitch3}
                  style={[styles.container, {alignItems:'center'}]}>
                  <Text style={[styles.leaguespartanBold, {color:isPressed3?'green':'white'}]}>Food and Agribusiness</Text>
                  <Image
                    source={require('../assets/icons/3. Food and Agribusiness.png')}
                    style={[styles.buttonDims, {backgroundColor: isPressed3?'green':'00FFFFFF'},{borderRadius:75}]}/>
                </Pressable>
                <Pressable
                  onPress={toggleSwitch4}
                  style={[styles.container, {alignItems:'center'}]}>
                  <Text style={[styles.leaguespartanBold, {color:isPressed4?'green':'white'}]}>Finance</Text>
                  <Image
                    source={require('../assets/icons/4. Finance.png')}
                    style={[styles.buttonDims, {backgroundColor: isPressed4?'green':'00FFFFFF'},{borderRadius:75}]}/>
                </Pressable>
                <Pressable
                  onPress={toggleSwitch5}
                  style={[styles.container, {alignItems:'center'}]}>
                  <Text style={[styles.leaguespartanBold, {color:isPressed5?'green':'white'}]}>Manufacturing and Trade</Text>
                  <Image
                    source={require('../assets/icons/5. Manufacturing and Trade.png')}
                    style={[styles.buttonDims, {backgroundColor: isPressed5?'green':'00FFFFFF'},{borderRadius:75}]}/>
                </Pressable>
            </View>
            <View style={[styles.container, {flexDirection: 'row', justifyContent: 'center', alignItems:'center'}]}>
                <Pressable
                  onPress={toggleSwitch6}
                  style={[styles.container, {alignItems:'center'}]}>
                  <Text style={[styles.leaguespartanBold, {color:isPressed6?'green':'white'}]}>Transportation and Logistics</Text>
                  <Image
                    source={require('../assets/icons/6. Transportation and Logistics.png')}
                    style={[styles.buttonDims, {backgroundColor: isPressed6?'green':'00FFFFFF'},{borderRadius:75}]}/>
                </Pressable>
                <Pressable
                  onPress={toggleSwitch7}
                  style={[styles.container, {alignItems:'center'}]}>
                  <Text style={[styles.leaguespartanBold, {color:isPressed7?'green':'white'}]}>Public Administration</Text>
                  <Image
                    source={require('../assets/icons/7. Public Administration.png')}
                    style={[styles.buttonDims, {backgroundColor: isPressed7?'green':'00FFFFFF'},{borderRadius:75}]}/>
                </Pressable>
                <Pressable
                  onPress={toggleSwitch8}
                  style={[styles.container, {alignItems:'center'}]}>
                  <Text style={[styles.leaguespartanBold, {color:isPressed8?'green':'white'}]}>Security and Defense</Text>
                  <Image
                    source={require('../assets/icons/8. Security and Defense.png')}
                    style={[styles.buttonDims, {backgroundColor: isPressed8?'green':'00FFFFFF'},{borderRadius:75}]}/>
                </Pressable>
                <Pressable
                  onPress={toggleSwitch9}
                  style={[styles.container, {alignItems:'center'}]}>
                  <Text style={[styles.leaguespartanBold, {color:isPressed9?'green':'white'}]}>Energy</Text>
                  <Image
                    source={require('../assets/icons/9. Energy.png')}
                    style={[styles.buttonDims, {backgroundColor: isPressed9?'green':'00FFFFFF'},{borderRadius:75}]}/>
                </Pressable>
                <Pressable
                  onPress={toggleSwitch0}
                  style={[styles.container, {alignItems:'center'}]}>
                  <Text style={[styles.leaguespartanBold, {color:isPressed0?'green':'white'}]}>Blue Water and Economy</Text>
                  <Image
                    source={require('../assets/icons/10. Blue Water and Economy.png')}
                    style={[styles.buttonDims, {backgroundColor: isPressed0?'green':'00FFFFFF'},{borderRadius:75}]}/>
                </Pressable>
            </View>  
        </ImageBackground>
    </View>



)
};

  
//landingpage
