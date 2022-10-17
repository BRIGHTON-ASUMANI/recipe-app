import React, { useState, useEffect, createContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from "jwt-decode";
import axios from "axios";
import { API } from "../utils/utils";

const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
const [state, setState] = useState({
    token: "",
});

axios.defaults.baseURL = API; 

useEffect(() => {
    const loadFromAsyncStorage = async ()=>{
        let data = await AsyncStorage.getItem("@auth");
        console.log({data})
        // const as = JSON.parse(data);
        setState({ ...state, token: data && data.token})
      }
    
      loadFromAsyncStorage()
    }, []);


    return (
    <AuthContext.Provider value={{state, setState}}>
        {children}
    </AuthContext.Provider>
    );
};
    
export { AuthContext, AuthContextProvider };