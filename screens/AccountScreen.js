import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { withTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import FooterTabs from '../components/nav/FooterTabs';

const AccountScreen = () => {
  const [userData, setUserData] = useState({});
  const endpoint = '/api/user/me/';

  const getUserData = () => {
    axios
      .get(endpoint)
      .then((response) => setUserData(response.data))
      .catch((error) => error);
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Avatar.Image size={100} source={{ uri: userData.picture }} /> */}

      <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'flex-end' }}>
        <FooterTabs />
      </ScrollView>
    </SafeAreaView>
  );
};

export default withTheme(AccountScreen);
