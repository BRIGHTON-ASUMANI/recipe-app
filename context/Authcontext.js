import React, { useState, useEffect, createContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from "jwt-decode";
import axios from "axios";
import { logiHeaders } from "../utils/utils";

const AuthContext = createContext();

const AuthContextProvider = (props) => {
const [loading, setLoading] = useState(true);
const [loggedIn, setLoggedIn] = useState(null);
const [userData, setUserData] = useState(null);

const getUserData = async id => {
    const {name, picture, exp} = jwtDecode(userData);

    if (exp < Date.now() / 1000) {
        throw new Error('ID token expired!');
    }

    return {
        name,
        picture,
    };
    };

// Executed whenever the component is rendered
useEffect(() => {
(async () => {
    try {
    const user_data = await getUserData();
    if (user_data) {
        setLoggedIn(true);
        setUserData(user_data);
    }
    } catch (err) {
    setLoggedIn(false);
    }
})();
}, []);


    // Executed just after the user logs in
useEffect(() => {
    (async () => {
    try {
        if (loggedIn) {
        const user_data = await getUserData();
        if (user_data) {
            setLoggedIn(true);
            setUserData(user_data);
        }
        }
    } catch (err) {
        console.log(err)
        // alert('Error logging in');
    }
    })();
}, [loggedIn]);


const login = async (email, password) => {
    setLoading(true)
    try {
        setLoading(true)
        const endpoint = "https://fifty-lines-brake-41-90-65-62.loca.lt/api/user/token/"
        const { data } = await axios.post(endpoint, {email,password} )
        if (data.error){
            alert(data.error)
        } else {
            await AsyncStorage.setItem('@auth', data.token)
            setLoading(false)
            setLoggedIn(true);
            setUserData(data.token)
            alert('Sign IN successful');
        }
        } catch (err) {
        setLoading(false)
        alert('Error logging in');
        }
  };

  const loadFromAsyncStorage = async ()=>{
    let data = await AsyncStorage.getItem("@auth");
  }

  loadFromAsyncStorage()

    const logout = async () => {
        setLoading(true);
    try {
        setLoading(false)
        setLoggedIn(false);
        setUserData(null);
    } catch (err) {
        setLoading(true);
        setLoading(false)
        alert('Error logging out');
    }
    };


    const value = {
    loading,
    loggedIn,
    login,
    logout,
    userData,
    };

    return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
    );
};
    
export { AuthContext, AuthContextProvider };