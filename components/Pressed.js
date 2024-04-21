import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import { Button } from 'react-native-paper';
import { Video, ResizeMode } from 'expo-av';

export default function Pressed(props) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={{ flex:1, alignItems: 'center',justifyContent: 'center' }}>
        <Image
        style={{flex:1, resizeMode:'contain', justifyContent:'center'}}
        source={require('../assets/innovationday.png')}
        />
        <Video
        ref={video}
        style={styles.video}
        source={{
          uri: "../assets/media/Media1.mp4",
        }}
        useNativeControls
        resizeMode="cover"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
        shouldPlay
      />
      {/* <Image source={require('../assets/media/Picture1.gif')} /> */}
        <Button
        mode="text"
        onPress={()=>props.navigation.navigate("Landing")}>Back</Button>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
