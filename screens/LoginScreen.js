import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Text from '@kaloraat/react-native-text';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/Authcontext';
import LoadingScreen from './LoadingScreen';
import UserInput from '../sharedComponents/UserInput';
import CustomButton from '../sharedComponents/CustomButton';
import Logo from '../sharedComponents/Logo';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { setState } = useContext(AuthContext);
  const navigation = useNavigation();

  const handleSubmit = async () => {
    setLoading(true);
    if (!email || !password) {
      alert('All fields are required');
      setLoading(false);
      return;
    }

    try {
      const endpoint = '/api/user/token/';
      const { data } = await axios.post(endpoint, { email, password });

      if (data.error) {
        alert(data.error);
      } else {
        setState(data);
        await AsyncStorage.setItem('@auth', JSON.stringify(data));
        setLoading(false);
        navigation.navigate('Home');
        // alert('Sign in successful');
      }
    } catch (err) {
      console.log({ err, email, password });
      setLoading(false);
      alert('Error logging in');
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
          <Text title center>Sign In</Text>
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
            textValue="Sign In"
          />
          <Text small center>
            Do not have an account?
            <Text onPress={() => navigation.navigate('SignUp')} color="#ff2222"> Sign Up</Text>
          </Text>

          <Text small center color="red" style={{ marginTop: 10 }}>
            Forgot Password?
          </Text>
        </View>
      </KeyboardAwareScrollView>
    )
  );
};

export default LoginScreen;
