import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import { colors } from '../styles/colors';
import Feather from 'react-native-vector-icons/Feather';

const InputMessage = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
      <TouchableOpacity style={styles.sendIcon}>
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
