import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppHeader from '../components/AppHeader';
import SentMessageCard from '../components/SentMessageCard';

const ChatScreen = () => {
  return (
    <View>
      <AppHeader />
      <SentMessageCard message={'test message to test Sent message card'} />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
