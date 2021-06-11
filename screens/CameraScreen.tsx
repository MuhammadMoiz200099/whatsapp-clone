import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.auto);

  const cam = useRef<Camera | null>();

  const _takePicture = async () => {
    if (cam.current) {
      if(flash === Camera.Constants.FlashMode.auto) {
        setFlash(Camera.Constants.FlashMode.torch);
        setTimeout(() => {
          setFlash(Camera.Constants.FlashMode.off)
        }, 500);
      }

      const options = { quality: 0.5, base64: true, skipProcessing: false };

      let photo = await cam.current.takePictureAsync(options);
      const source = photo.uri;

      if (source) {
        cam.current.resumePreview();
      }
    }
  }

  const toggleFlashLight = () => {
    if(flash === Camera.Constants.FlashMode.auto) {
      setFlash(Camera.Constants.FlashMode.torch);
    } else if (flash === Camera.Constants.FlashMode.torch) {
      setFlash(Camera.Constants.FlashMode.off)
    } else if (flash === Camera.Constants.FlashMode.off) {
      setFlash(Camera.Constants.FlashMode.auto)
    }
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera flashMode={flash} ref={cam as any} style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <View style={styles.cameraOptions}>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => toggleFlashLight()}
              >
                {flash === Camera.Constants.FlashMode.auto && (<MaterialCommunityIcons name="flash-auto" size={30} color="white" />)}
                {flash === Camera.Constants.FlashMode.torch && (<MaterialCommunityIcons name="flash" size={30} color="white" />)}
                {flash === Camera.Constants.FlashMode.off && (<MaterialCommunityIcons name="flash-off" size={30} color="white" />)}
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {_takePicture();}}>
                <FontAwesome name="circle-thin" size={80} color="white" />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}>
                <Ionicons name="camera-reverse" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  cameraOptions: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    bottom: 10
  },
});