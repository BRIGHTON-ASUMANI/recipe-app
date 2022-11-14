import AsyncStorage from '@react-native-async-storage/async-storage';

export const logiHeaders = async () => {
  const as = await AsyncStorage.getItem('@auth');
  const st = JSON.parse(as);
  const headers = {
    'WWW-Authenticate': `Token ${st.token}`,
    'Content-Type': 'application/json',
    accept: 'application/json',
  };
  return { headers };
};

export const API = process.env.REACT_BASE_URL;
