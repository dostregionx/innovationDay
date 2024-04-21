import React, {useState} from 'react';
import { Text, View, Image, StyleSheet, ImageBackground, Pressable } from 'react-native'


const App=()=>{
  
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
        <ImageBackground source={background} resizeMode="cover" style={styles.image}>
            <View style={{height:'33%', justifyContent: 'center', alignItems:'center'}}>
                <Text style={[{fontSize: 100},styles.glacialindifferenceBold]}>INNOVATION</Text>
                <Text style={{fontSize: 50}}>PRIORITY AREAS</Text>
            </View>
            
            <View style={{height:'33%', flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
                <Pressable
                  onPress={toggleSwitch}
                  style={{}}>
                  <Text>Learning and Education</Text>
                  <Image
                    source={require('../assets/icons/1. Learning and Education.png')}
                    style={[styles.buttonDims, {backgroundColor: isEnabled?'green':'00FFFFFF'},{borderRadius:75}]}/>
                </Pressable>
                <Pressable
                  onPress={toggleSwitch}>
                  <Text>Health and Wellbeing</Text>
                  <Image
                    source={require('../assets/icons/2. Health and Wellbeing.png')}
                    style={[styles.buttonDims, {backgroundColor: isEnabled?'green':'00FFFFFF'},{borderRadius:75}]}/>
                </Pressable>
                <Pressable
                  onPress={toggleSwitch}>
                  <Text>Food and Agribusiness</Text>
                  <Image
                    source={require('../assets/icons/3. Food and Agribusiness.png')}
                    style={[styles.buttonDims, {backgroundColor: isEnabled?'green':'00FFFFFF'},{borderRadius:75}]}/>
                </Pressable>
                <Pressable
                  onPress={toggleSwitch}>
                  <Text>Finance</Text>
                  <Image
                    source={require('../assets/icons/4. Finance.png')}
                    style={[styles.buttonDims, {backgroundColor: isEnabled?'green':'00FFFFFF'},{borderRadius:75}]}/>
                </Pressable>
                <Pressable
                  onPress={toggleSwitch}>
                  <Text>Manufacturing and Trade</Text>
                  <Image
                    source={require('../assets/icons/5. Manufacturing and Trade.png')}
                    style={[styles.buttonDims, {backgroundColor: isEnabled?'green':'00FFFFFF'},{borderRadius:75}]}/>
                </Pressable>
            </View>
            <View style={{height:'33%', flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
                <Pressable
                  onPress={toggleSwitch}>
                  <Text>Transportation and Logistics</Text>
                  <Image
                    source={require('../assets/icons/6. Transportation and Logistics.png')}
                    style={[styles.buttonDims, {backgroundColor: isEnabled?'green':'00FFFFFF'},{borderRadius:75}]}/>
                </Pressable>
                <Pressable
                  onPress={toggleSwitch}>
                  <Text>Public Administration</Text>
                  <Image
                    source={require('../assets/icons/7. Public Administration.png')}
                    style={[styles.buttonDims, {backgroundColor: isEnabled?'green':'00FFFFFF'},{borderRadius:75}]}/>
                </Pressable>
                <Pressable
                  onPress={toggleSwitch}>
                  <Text>Security and Defense</Text>
                  <Image
                    source={require('../assets/icons/8. Security and Defense.png')}
                    style={[styles.buttonDims, {backgroundColor: isEnabled?'green':'00FFFFFF'},{borderRadius:75}]}/>
                </Pressable>
                <Pressable
                  onPress={toggleSwitch}>
                  <Text>Energy</Text>
                  <Image
                    source={require('../assets/icons/9. Energy.png')}
                    style={[styles.buttonDims, {backgroundColor: isEnabled?'green':'00FFFFFF'},{borderRadius:75}]}/>
                </Pressable>
                <Pressable
                  onPress={toggleSwitch}>
                  <Text>Blue Water and Economy</Text>
                  <Image
                    source={require('../assets/icons/10. Blue Water and Economy.png')}
                    style={[styles.buttonDims, {backgroundColor: isEnabled?'green':'00FFFFFF'},{borderRadius:75}]}/>
                </Pressable>
            </View>  
        </ImageBackground>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
