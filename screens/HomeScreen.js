import React from 'react';
import { View } from 'react-native';
import { Text, withTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import FooterTabs from '../components/nav/FooterTabs';

const HomeScreen = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <Text title center light>Home</Text>
    {/* {state && (
            <Text>{JSON.stringify(state, null, 4)}</Text>
        )} */}
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
      <FooterTabs />
    </View>
  </SafeAreaView>
);

export default withTheme(HomeScreen);
