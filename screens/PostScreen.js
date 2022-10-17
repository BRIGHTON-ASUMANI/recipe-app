import React, {  } from "react";
import { View, Text, StyleSheet } from "react-native";
import { withTheme } from "react-native-paper";


const PostScreen = ({ navigation, theme }) => {
  const { colors } = theme;
  return (

    <SafeAreaView style={{ flex: 1}}>
           {/* <Avatar.Image size={100} source={{ uri: userData.picture }} /> */}
    {state && (
        <Text>{JSON.stringify(state, null, 4)}</Text>
    )}
    <View style={{ flex: 1, justifyContent: "flex-end"}}>
      <FooterTabs />
    </View>
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

export default withTheme(PostScreen);