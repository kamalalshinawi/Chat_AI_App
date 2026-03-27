import { Image, StyleSheet, Text, View } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import React, { useState } from 'react';

const CameraGallery = () => {
  const [selectedImageUri, setSelectedImageUri] = useState('');

  const openCamera = async () => {
    try {
      const result = await launchCamera({ mediaType: 'mixed' });
      setSelectedImageUri(result.assets[0]?.uri);
    } catch (error) {
      console.log('error happens ', error);
    }
  };

  const openGallery = async () => {
    try {
      const result = await launchImageLibrary({ mediaType: 'photo' });
      console.log(result);
      setSelectedImageUri(result.assets[0]?.uri);
    } catch (error) {
      console.log('error happens ', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16, color: 'white' }}>CameraGallery</Text>
      <Text style={{ fontSize: 16, color: 'white' }} onPress={openGallery}>
        Open Gallery
      </Text>
      <Text style={{ fontSize: 16, color: 'white' }} onPress={openCamera}>
        Open Camera
      </Text>
      <Image
        source={{ uri: selectedImageUri }}
        style={{ height: 200, width: 200 }}
      />
    </View>
  );
};

export default CameraGallery;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
