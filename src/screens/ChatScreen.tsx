import { FlatList, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import AppHeader from '../components/AppHeader';
import SentMessageCard from '../components/SentMessageCard';
import ResponseMessage from '../components/ResponseMessage';
import { s } from 'react-native-size-matters';
import { RECEIVED, SENT } from '../constants/typeMessage';

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
    <View>
      <AppHeader />
      <FlatList
        data={message}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          return item.type === SENT ? (
            <SentMessageCard message={item.message} />
          ) : (
            <ResponseMessage ResponseMessage={item.message} />
          );
        }}
        contentContainerStyle={{ paddingHorizontal: s(8) }}
      />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
