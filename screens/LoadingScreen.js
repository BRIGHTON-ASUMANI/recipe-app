import React from 'react';
import {
  View, Text, ActivityIndicator, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const LoadingScreen = ({ navigation, theme }) => (
  <View style={styles.container}>
    <>
      <ActivityIndicator size="large" />
      <View style={{ marginTop: 10 }}>
        <Text>Please wait...</Text>
      </View>
    </>
  </View>
);

export default LoadingScreen;
