import React, { } from 'react';
import { View } from 'react-native';
import { withTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import FooterTabs from '../components/nav/FooterTabs';

const LinkScreen = () => (
  <SafeAreaView style={{ flex: 1 }}>
    {/* <Avatar.Image size={100} source={{ uri: userData.picture }} /> */}
    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
      <FooterTabs />
    </View>
  </SafeAreaView>
);

export default withTheme(LinkScreen);
