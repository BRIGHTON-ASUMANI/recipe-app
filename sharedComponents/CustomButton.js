import React from 'react';
import Text from '@kaloraat/react-native-text';
import { TouchableOpacity } from 'react-native';

const CustomButton = ({ onPress, textValue }) => (
  <TouchableOpacity
    style={{
      backgroundColor: '#ff9900',
      height: 50,
      marginBottom: 20,
      marginHorizontal: 15,
      borderRadius: 24,
      justifyContent: 'center',

    }}
    onPress={onPress}
    textValue={textValue}
  >
    <Text bold medium center>LOGIN</Text>
  </TouchableOpacity>
);

export default CustomButton;
