import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import { s, vs } from 'react-native-size-matters';
import { colors } from '../styles/colors';
import Feather from 'react-native-vector-icons/Feather';

interface inputProps {
  messageValue: string;
  setMessageValue: (message: string) => void;
  onMessageSent: (message: string) => void;
}

const InputMessage: FC<inputProps> = ({
  messageValue,
  setMessageValue,
  onMessageSent,
}) => {
  const handelSendButton = () => {
    if (messageValue.trim().length > 0) {
      onMessageSent(messageValue);
      setMessageValue('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={messageValue}
        onChangeText={setMessageValue}
        placeholder="Type The Message...."
        placeholderTextColor={colors.black}
      />
      <TouchableOpacity style={styles.sendIcon} onPress={handelSendButton}>
        <Feather name="send" color={colors.white} size={s(15)} />
      </TouchableOpacity>
    </View>
  );
};

export default InputMessage;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: s(10),
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.mediumGray,
  },
  input: {
    backgroundColor: colors.gray,
    flex: 1,
    borderRadius: s(20),
    paddingHorizontal: s(15),
    paddingVertical: vs(10),
    marginRight: s(10),
    color: colors.black,
  },
  sendIcon: {
    borderRadius: s(80),
    backgroundColor: colors.black,
    width: s(38),
    height: vs(38),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
