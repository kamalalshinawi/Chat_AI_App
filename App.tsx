import { useEffect, useState } from 'react';
import BootSplash from 'react-native-bootsplash';
import ChatScreen from './src/screens/ChatScreen';
import AuthScreen from './src/screens/AuthScreen';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
    isAuthenticated ? (
      <ChatScreen />
    ) : (
      <AuthScreen onAuthenticated={() => setIsAuthenticated(true)} />
    )
  );
};

export default App;
