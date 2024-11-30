import { View, Text, Image, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Info from '@expo/vector-icons/Ionicons';

import { useRouter } from "expo-router";
export default function SideBarMenu() {

  const router = useRouter();
  return (
    <SafeAreaView>
      <Text style={{ textAlign: "start", padding: 20, fontSize: 20 }}>
        Tittle Application
      </Text>
      <Pressable onPress={()=> router.push("/")}
        style={{
          borderRadius: 360,
          borderWidth: 1,
          backgroundColor: "#E4E0E1",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          margin: "auto",
        }}
      >
        <Image style={{ width: 100,height: 100,borderRadius:360}}source={{uri:"https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg"}}/>
      </Pressable>

      <View>
        <Text style={{ textAlign: "center" }}>Name user</Text>
      </View>
      <View style={{borderWidth:1, width:200, height:1,marginTop:20,display:"flex",marginLeft:100}}></View>
     
     
      <Pressable onPress={()=> router.push("/screens/homeScreen")} 
       style={{display:"flex", flexDirection:"row",alignItems:"center", justifyContent:"space-between", width:80, margin:10}}>
      <FontAwesome5 name="home" size={24} color="black" />
        <Text>Home</Text>
      </Pressable>

      <Pressable onPress={()=> router.push("/screens/materialScreen")}
       style={{display:"flex", flexDirection:"row",alignItems:"center", justifyContent:"space-between", width:80, margin:10}}>
      <MaterialCommunityIcons name="bookshelf" size={24} color="black" />
        <Text>Material</Text>
      </Pressable>

      <Pressable  onPress={()=> router.push("/screens/myClassScreen")}
      style={{display:"flex", flexDirection:"row",alignItems:"center", justifyContent:"space-between", width:80, margin:10}}>
      <Ionicons name="people" size={24} color="black" />
        <Text>My class</Text>
      </Pressable>

      <Pressable onPress={()=> router.push("/screens/aboutScreen")} 
      
      style={{display:"flex", flexDirection:"row",alignItems:"center", justifyContent:"space-between", width:50, margin:10}}>
      <Info name="information" size={24} color="black" />
        <Text>About</Text>
      </Pressable>
      <View style={{borderWidth:1, width:200, height:1,marginTop:20}}></View>

    </SafeAreaView>
  );
}
