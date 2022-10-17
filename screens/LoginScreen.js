import React, { useContext, useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import { StatusBar } from "expo-status-bar";
import { Button, withTheme } from "react-native-paper";
import { StackActions } from "@react-navigation/native";
import { AuthContext } from "../context/Authcontext";
import { API } from "../utils/utils";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoadingScreen from "./LoadingScreen";


const LoginScreen = ({ navigation }) => {
//   const { colors } = theme;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { state, setState } = useContext(AuthContext);

  // useEffect(() => {
  //   if (loggedIn) {
  //     navigation.dispatch(StackActions.replace("Account"));
  //   }
  // }, [loggedIn]);

  const handleSubmit = async () => {
    setLoading(true);
    if (!email || !password){
      alert("All fields are required");
      setLoading(false);
      return;
    }

    try {
      const endpoint = `/api/user/token/`
      const { data } = await axios.post(endpoint, {email,password} )
      if (data.error){
          alert(data.error)
      } else {
          setState(data)
          await AsyncStorage.setItem('@auth', JSON.stringify(data))
          setLoading(false)
          navigation.navigate("Home");
          // alert('Sign in successful');
      }
      } catch (err) {
      setLoading(false)
      alert('Error logging in');
      }

  }

  return (
    loading ? <LoadingScreen/> : <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/lion.jpg")} />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => handleSubmit()} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );

 
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
   
    image: {
      marginBottom: 40,
    },
   
    inputView: {
      backgroundColor: "#FFC0CB",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
   
      alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
   
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FF1493",
    },
  });

export default withTheme(LoginScreen);