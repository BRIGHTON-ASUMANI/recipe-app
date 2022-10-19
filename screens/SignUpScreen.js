import React, { useState } from 'react';
import { View } from 'react-native';
import Text from '@kaloraat/react-native-text';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import LoadingScreen from './LoadingScreen';
import UserInput from '../sharedComponents/UserInput';
import Logo from '../sharedComponents/Logo';
import CustomButton from '../sharedComponents/CustomButton';

const SignUpScreen = () => {
//   const { colors } = theme;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleSubmit = async () => {
    setLoading(true);
    if (!email || !password) {
      alert('All fields are required');
      setLoading(false);
      return;
    }

    try {
      const endpoint = '/api/user/create/';
      const { data } = await axios.post(endpoint, { email, password, name });
      if (data.error) {
        alert(data.error);
      } else {
        await AsyncStorage.setItem('@auth', JSON.stringify(data));
        setLoading(false);
        navigation.navigate('Login');
        alert('Sign up successful');
      }
    } catch (err) {
      setLoading(false);
      alert('Error signing up');
    }
  };

  return (
    loading ? <LoadingScreen /> : (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <View>
          <Logo style={{ marginVertical: 100 }} />
          <UserInput
            name="NAME"
            value={name}
            setValue={setName}
            autoCorrect={false}
            autoCapitalize="words"
            keyboardType="email-address"
          />
          <UserInput
            name="EMAIL"
            value={email}
            setValue={setEmail}
            autoCompleteType="email"
            keyboardType="email-address"
          />
          <UserInput
            name="PASSWORD"
            value={password}
            secureTextEntry
            autoCompleteType="password"
            setValue={setPassword}
          />

          <CustomButton
            onPress={() => handleSubmit()}
            textValue="Sign Up"
          />

          <Text small center>
            Already have an account?
            <Text onPress={() => navigation.navigate('SignIn')} color="#ff2222"> Sign In</Text>
          </Text>

        </View>
      </KeyboardAwareScrollView>
    )
  );
};

export default SignUpScreen;
