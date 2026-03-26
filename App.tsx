import { StyleSheet, View, Text } from 'react-native';
import { useNotification } from './src/notification/useNotifications';

const App = () => {
  useNotification()
  return (
    <View style={styles.container}>
      <Text style={{ color: 'red', fontSize: 16, fontFamily: 'Arial' }}>
        kamal alshinawi
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
