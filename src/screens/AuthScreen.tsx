import React from 'react';
import { StyleSheet, View } from 'react-native';
import GoogleSignIn from '../features/auth/GoogleSignIn';
import { colors } from '../styles/colors';

type AuthScreenProps = {
  onAuthenticated: () => void;
};

const AuthScreen = ({ onAuthenticated }: AuthScreenProps) => {
  return (
    <View style={styles.container}>
      <GoogleSignIn onSignInSuccess={onAuthenticated} />
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: 20,
  },
});
