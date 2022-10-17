import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";


const LoadingScreen =({ navigation, theme })=> {

  return (
    <View style={styles.container}>
        <React.Fragment>
          <ActivityIndicator size="large" />
          <View style={{ marginTop: 10 }}>
            <Text>Please wait...</Text>
          </View>
        </React.Fragment>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoadingScreen;