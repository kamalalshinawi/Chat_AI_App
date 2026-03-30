import { Button, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';

type GoogleSignInProps = {
  onSignInSuccess: () => void;
};

const GoogleSignIn = ({ onSignInSuccess }: GoogleSignInProps) => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '291353308749-mul2vg6p0j664u5m94ggrpkbv8js9dp0.apps.googleusercontent.com',
    });
  }, []);

  const googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        onSignInSuccess();
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
      <Button title="Sign In With Google" onPress={googleSignIn} />
    </View>
  );
};

export default GoogleSignIn;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
