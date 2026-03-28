import { useEffect } from 'react';
import CameraGallery from './src/features/ImagePicker/CameraGallery';
import BootSplash from 'react-native-bootsplash';
import Entypo from 'react-native-vector-icons/Entypo';
import { View } from 'react-native';
import AppIcon from './src/assets/Icons/AppIcon';
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
      {/* <CameraGallery/> */}
      {/* <Entypo name="address" size={30} color={'red'} /> */}
    {/* <AppIcon  /> */}

    <ChatScreen />
    </View>
  );
};

export default App;
