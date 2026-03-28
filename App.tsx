import { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import { View } from 'react-native';
import ChatScreen from './src/screens/ChatScreen';
import { colors } from './src/styles/colors';

const App = () => {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({ fade: true });
      console.log('BootSplash has been hidden successfully');
    });
  }, []);
  return (
    // <View style={{ backgroundColor: colors.white, flex: 1 }}>
      // <View>
        <ChatScreen />
      // </View>
    // </View>
  );
};

export default App;
