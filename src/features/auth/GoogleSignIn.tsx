import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React, { useState } from 'react';
import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const GoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId:
      '291353308749-mul2vg6p0j664u5m94ggrpkbv8js9dp0.apps.googleusercontent.com',
  });

  const [userInfo, setUserInfo] = useState();

  const googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        setUserInfo(response.data);
        console.log(response.data);
      } else {
        // sign in was cancelled by user
      }
    } catch (error) {
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // Android only, play services not available or outdated
            break;
          default:
          // some other error happened
        }
      } else {
        // an error that's not related to google sign in occurred
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: 'red', fontSize: 16, fontFamily: 'Arial' }}>
        kamal alshinawi
      </Text>
      <Button title="Sign In With google" onPress={googleSignIn} />
      <Text style={{ fontSize: 16, color: 'red' }}>{userInfo?.user?.name}</Text>
      <Text style={{ fontSize: 16, color: 'red' }}>
        {userInfo?.user?.email}
      </Text>
      <Image
        style={{ height: 100, width: 100, borderRadius: 50 }}
        source={{ uri: userInfo?.user?.photo }}
      />
    </View>
  );
};

export default GoogleSignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
