import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppHeader from '../components/AppHeader';
import SentMessageCard from '../components/SentMessageCard';
import ResponseMessage from '../components/ResponseMessage';

const ChatScreen = () => {
  return (
    <View>
      <AppHeader />
      <SentMessageCard message={'test message to test Sent message card'} />
      <ResponseMessage ResponseMessage={'test Respnse message'} />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
