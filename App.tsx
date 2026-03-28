import { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import { View } from 'react-native';
import ChatScreen from './src/screens/ChatScreen';

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
    <View>
      <ChatScreen />
    </View>
  );
};

export default App;
