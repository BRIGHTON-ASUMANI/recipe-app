import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { withTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import FooterTabs from "../components/nav/FooterTabs";
import { AuthContext } from "../context/Authcontext";
import { logiHeaders } from "../utils/utils";


const AccountScreen = ({ navigation, theme }) => {
  const { colors } = theme;
  const [userData, setUserData] = useState({})
  const endpoint = `/api/user/me/`


  const getUserData = () => {
    axios
    .get(endpoint)
    .then(response => setUserData(response.data))
    .catch(error => error);
    };


  useEffect(() => {
    getUserData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1}}>
    {/* <Avatar.Image size={100} source={{ uri: userData.picture }} /> */}

  <ScrollView contentContainerStyle={{ flex: 1, justifyContent: "flex-end"}}>
    <FooterTabs />
  </ScrollView>
</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 30,
    paddingLeft: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  userContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  textContainer: {
    marginTop: 10
  },
});

export default withTheme(AccountScreen);