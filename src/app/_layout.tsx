
import { Stack } from 'expo-router';
import { Button, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

export default function RootLayout() {

  
 

  return (

      <Stack initialRouteName="screens/main" screenOptions={({ navigation }) => ({
        title: 'Home Screen',  // Título da tela
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('OtherScreen')}>
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
        ),
      })} >

        <Stack.Screen name="screens/main" options={{ headerShown: false }} />

      </Stack>
   
   
  );
}
