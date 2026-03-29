import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import AppIcon from '../assets/Icons/AppIcon';


const EmptyChat = () => {
  return (
    <View style={styles.container}>
      <AppIcon />
      <Text style={styles.title}>Hello,</Text>
      <Text style={styles.subtitle}>What can I help with?</Text>
    </View>
  );
};

export default EmptyChat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: s(20),
    paddingTop: vs(140),
  },
  title: {
    marginTop: vs(10),
    fontSize: s(24),
    fontWeight: 'bold',
    marginBottom: vs(8),
  },
  subtitle: {
    fontSize: s(18),
  },
});
