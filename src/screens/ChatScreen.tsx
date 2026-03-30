import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import React, { useRef, useState } from 'react';
import AppHeader from '../components/AppHeader';
import SentMessageCard from '../components/SentMessageCard';
import ResponseMessage from '../components/ResponseMessage';
import { s, vs } from 'react-native-size-matters';
import { RECEIVED, SENT } from '../constants/typeMessage';
import InputMessage from '../components/InputMessage';
import { colors } from '../styles/colors';
import EmptyChat from '../components/EmptyChat';
import { callHuggingFace } from '../api/httpRequest.ts';

interface Message {
  id: number;
  message: string;
  type: string;
}

const ChatScreen = () => {
  const [message, setMessage] = useState<Message[]>([]);
  const [msInput, setMsInput] = useState('');
  const flatListRef = useRef<FlatList>(null);

  const scrollToBottom = () => {
    if (flatListRef.current && message.length > 0) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  };

  const sentMessageToAi = async () => {
    const prompt = msInput.trim();
    if (!prompt) {
      return;
    }

    setMessage(prevMessages => {
      return [
        ...prevMessages,
        {
          message: prompt,
          id: prevMessages.length + 1,
          type: SENT,
        },
      ];
    });
    setMsInput('');

    try {
      const response = await callHuggingFace(prompt);
      receiveMessages(response);
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Request failed. Please try again.';
      receiveMessages(errorMessage);
    }
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
    <View style={styles.container}>
      <AppHeader />
      <FlatList
        ref={flatListRef}
        style={styles.list}
        data={message}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {
          return item.type === SENT ? (
            <SentMessageCard message={item.message} />
          ) : (
            <ResponseMessage ResponseMessage={item.message} />
          );
        }}
        contentContainerStyle={styles.contentContainer}
        ListEmptyComponent={<EmptyChat />}
        onLayout={scrollToBottom}
        onContentSizeChange={scrollToBottom}
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

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { flex: 1 },
  contentContainer: {
    paddingBottom: vs(10),
    paddingHorizontal: s(8),
    backgroundColor: colors.white,
    flexGrow: 1,
  },
});
