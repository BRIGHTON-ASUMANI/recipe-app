/* eslint-disable consistent-return */
/* eslint-disable no-useless-escape */
/* eslint-disable no-alert */
/* eslint-disable react/style-prop-object */
/* eslint-disable global-require */
import React, { useContext, useState } from 'react';
import {
  StyleSheet, Text, View, Image, TextInput, TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { withTheme } from 'react-native-paper';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/Authcontext';
import LoadingScreen from './LoadingScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '90%',
    height: 45,
    marginBottom: 20,

    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    // padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: '60%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#FF1493',
  },
});

const LoginScreen = ({ navigation }) => {
//   const { colors } = theme;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { setState } = useContext(AuthContext);

  const validate = (text) => {
    console.log(text);
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      alert('Email is Not Correct');
      setEmail(text);
      return false;
    }
    setEmail(text);
  };

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
      setLoading(false);
      alert('Error logging in');
    }
  };

  return (
    loading ? <LoadingScreen /> : (
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/lion.jpg')} />

        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={(e) => validate(e)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry
            onChangeText={(val) => setPassword(val)}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleSubmit()} style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    )
  );
};

export default withTheme(LoginScreen);
