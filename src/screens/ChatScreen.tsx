import { FlatList, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import AppHeader from '../components/AppHeader';
import SentMessageCard from '../components/SentMessageCard';
import ResponseMessage from '../components/ResponseMessage';
import { s, vs } from 'react-native-size-matters';
import { RECEIVED, SENT } from '../constants/typeMessage';
import InputMessage from '../components/InputMessage';
import { colors } from '../styles/colors';

interface Message {
  id: number;
  message: string;
  type: string;
}

const ChatScreen = () => {
  const messagesList: Message[] = [
    {
      message: 'Hello I need a help',
      id: 1,
      type: SENT,
    },
    {
      message: 'Hi, how can i help you',
      id: 2,
      type: RECEIVED,
    },
    {
      message: 'Hello I need a help',
      id: 3,
      type: SENT,
    },
    {
      message: 'Hi, how can i help you',
      id: 4,
      type: RECEIVED,
    },
   
  ];

  const [message, setMessage] = useState<Message[]>(messagesList);

  return (
    <View style={{ flex: 1 }}>
      <AppHeader />
      <FlatList
        style={{ flex: 1 }}
        data={message}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          return item.type === SENT ? (
            <SentMessageCard message={item.message} />
          ) : (
            <ResponseMessage ResponseMessage={item.message} />
          );
        }}
        contentContainerStyle={{
          paddingBottom: vs(10),
          paddingHorizontal: s(8),
          backgroundColor: colors.white,
          flexGrow: 1,
        }}
      />
      <InputMessage />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
