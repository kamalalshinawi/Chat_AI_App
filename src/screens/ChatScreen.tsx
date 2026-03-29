import { FlatList, StyleSheet, View, KeyboardAvoidingView } from 'react-native';
import React, { useState } from 'react';
import AppHeader from '../components/AppHeader';
import SentMessageCard from '../components/SentMessageCard';
import ResponseMessage from '../components/ResponseMessage';
import { s, vs } from 'react-native-size-matters';
import { RECEIVED, SENT } from '../constants/typeMessage';
import InputMessage from '../components/InputMessage';
import { colors } from '../styles/colors';
import EmptyChat from '../components/EmptyChat';

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

  const [message, setMessage] = useState<Message[]>([]);
  const [msInput, setMsInput] = useState('');

  const sentMessageToAi = () => {
    setMessage(prevMessages => {
      return [
        ...prevMessages,
        {
          message: msInput,
          id: prevMessages.length + 1,
          type: SENT,
        },
      ];
    });
    setTimeout(() => {
      receiveMessages('Hello This is dummy Response ');
    }, 1800);
  };

  // got the receiveMessages
  const receiveMessages = (response: string) => {
    setMessage(prevMessages => {
      return [
        ...prevMessages,
        {
          message: response,
          id: prevMessages.length + 1,
          type: RECEIVED,
        },
      ];
    });
  };

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
        ListEmptyComponent={<EmptyChat />}
      />
      <InputMessage
        messageValue={msInput}
        setMessageValue={setMsInput}
        onMessageSent={sentMessageToAi}
      />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
