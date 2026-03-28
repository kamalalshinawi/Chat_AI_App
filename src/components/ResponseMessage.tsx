import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { s, vs } from 'react-native-size-matters';
import { colors } from '../styles/colors';

interface ResponseMessage {
  ResponseMessage: string;
}

const ResponseMessage: FC<ResponseMessage> = ({ ResponseMessage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <Text style={styles.resMessage}>{ResponseMessage}</Text>
      </View>
    </View>
  );
};

export default ResponseMessage;

const styles = StyleSheet.create({
  container: {
    marginVertical: vs(4),
    marginBottom: vs(4),
  },
  messageContainer: {
    borderRadius: s(30),
    padding: s(10),
    maxWidth: '80%',
    backgroundColor: colors.grayBack,
  },
  resMessage: {
    fontSize: s(15),
    color: colors.black,
  },
});
