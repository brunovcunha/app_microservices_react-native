import { Text, View } from "react-native";

export default function aboutScreen(){
    return (
        <View style={{width:"100%",height:500, display:"flex", justifyContent:"center"}}>
            <Text style={{textAlign:"center", fontSize:30, color:"#78B3CE"}}>About Screen </Text>
        </View> 
    )
}