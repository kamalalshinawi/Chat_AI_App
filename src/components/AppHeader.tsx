import { StyleSheet, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import { colors } from '../styles/colors';
import { IS_IOS } from '../constants/platform';
import AppIcon from '../assets/Icons/AppIcon';

const AppHeader = () => {
  return (
    <View style={styles.container}>
      <AppIcon height={vs(33)} width={s(33)} stroke={colors.white} />
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: vs(10),
    backgroundColor: colors.black,
    paddingTop: IS_IOS ? vs(43) : undefined,
  },
});
