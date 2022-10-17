import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar, Button, withTheme } from "react-native-paper";
import { StackActions } from "@react-navigation/native";
import { AuthContext } from "../context/Authcontext";
import FooterTabs from "../components/nav/FooterTabs";
import { SafeAreaView } from "react-native-safe-area-context";


const HomeScreen = ({ navigation, theme }) => {
    const { colors } = theme;
    const { state, setState } = useContext(AuthContext);
  return (
    <SafeAreaView style={{ flex: 1}}>
        {state && (
            <Text>{JSON.stringify(state, null, 4)}</Text>
        )}
        <View style={{ flex: 1, justifyContent: "flex-end"}}>
          <FooterTabs />
        </View>
    </SafeAreaView>
  );
};


export default withTheme(HomeScreen);