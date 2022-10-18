import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import {
    Text,
    View,
    TouchableOpacity,
  } from "react-native";
import { Divider } from "react-native-elements";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


export const Tab = ({name, iconName, handlePress, screenName, routeName})=>{
    const activeScreenColor = screenName === routeName && "green"
    return (
        <TouchableOpacity onPress={handlePress}>
        <FontAwesome5 
            name={iconName} size={25} 
            style={{ marginBottom: 3, alignSelf: "center"}}
            color={activeScreenColor}
            />
        <Text>{name}</Text>
    </TouchableOpacity>
    )

}
    


export default function FooterTabs () {
    const navigation = useNavigation()
    const route = useRoute()
    
    return (
        <>
        <Divider width={1}/>
        <View style={{
            flexDirection: "row",
            margin: 10,
            marginHorizontal: 30,
            justifyContent: "space-between",
        }}>
          <Tab name="Home" iconName="home" screenName="Home" routeName={route.name} handlePress={()=> navigation.navigate("Home")} />
          <Tab name="Post" iconName="plus-square" screenName="Post" routeName={route.name} handlePress={()=> navigation.navigate("Post")}/>
          <Tab name="Links" iconName="list-ol" screenName="Links" routeName={route.name} handlePress={()=> navigation.navigate("Links")}/>
          <Tab name="Account" iconName="user" screenName="Account" routeName={route.name} handlePress={()=> navigation.navigate("Account")}/>
        </View>
        </>
    )
}