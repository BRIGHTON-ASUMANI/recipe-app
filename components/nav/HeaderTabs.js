import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useContext } from "react";
import {
    Text,
    View,
    TouchableOpacity,
  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { AuthContext } from "../../context/Authcontext";


export default function HeaderTabs () {
    const { state, setState } = useContext(AuthContext);
    const signOut = async () =>{
        setState({ token: ""})
        await AsyncStorage.removeItem("@auth");
    }

    return (
    <SafeAreaView>
        <TouchableOpacity onPress={signOut}>
        <FontAwesome5 
            name="sign-out-alt" 
            size={25} 
            color="#ff9900"
            />
        </TouchableOpacity>
    </SafeAreaView>
    )}