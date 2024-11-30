import { Drawer } from "expo-router/drawer";
import SideBarMenu from "./components/sideBarMenu";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
export default function RootLayout() {
  const router = useRouter();
  return (
    <Drawer
      initialRouteName="index"
      drawerContent={() => <SideBarMenu />}
      screenOptions={{
        headerTitle: () => (
          <View
            style={{
              width: 250,
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{display:"flex", flexDirection:"row", alignItems:"center",width:120}}>
              <Image style={{width:30, height:30}} source={{uri:"https://cdn-icons-png.flaticon.com/512/2201/2201572.png"}}/>
            <Text>Title Application</Text>
              </View>

            <TouchableOpacity onPress={()=> router.push("/screens/settingsScreen")}>
            <Image
              style={{ width: 50, height: 50, borderRadius: 360 }}
              source={{
                uri: "https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg",
              }}
            />
            </TouchableOpacity >
          </View>
        ),
      }}
    />
  );
}
