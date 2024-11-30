import { Button, FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign';
export default function SettingsScreen(){

    const accountSettingsList={
        personal:"Personal information",
        notifications:"Notifications",
        developerContact:"Contact developer",
        version:"Version 1.0.1",
    }

 
    return (
        
        <SafeAreaView>
            <View>
                <Text style={{fontSize:30, textAlign:"center",margin:50}}>Name user</Text>
            </View>
            <FlatList
            style={{ width:320, margin:"auto"}}
                data={Object.entries(accountSettingsList)}
                renderItem={({item})=>{
                    const [value, key] = item
                    return (
                    <View style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", margin:20}}>
                       
                        <Text style={{fontSize:25}}>
                            {key}
                        </Text>
                        <Pressable><AntDesign name="arrowright" size={24} color="black" /></Pressable>
                    </View>
                    )
                }}
            />
        </SafeAreaView>
    )
}