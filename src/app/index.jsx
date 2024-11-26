import { View, Button} from 'react-native';

import { WebView } from 'react-native-webview';
import { useRef } from 'react';
export default function HomeScreen  () {

  return (
    <View style={{ flex: 0.5 }}>

 
    
    <WebView
        source={{ uri: 'https://demonstrations.wolfram.com/ForcesAndDraftsInFlatRolling/' }}
        style={{ flex: 1 }}
    
        scalesPageToFit={true}   
   
        mediaPlaybackRequiresUserAction={false} 
        allowsFullscreenVideo={true}  
      />
    </View>
  );
};
