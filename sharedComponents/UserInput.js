import React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import Text from '@kaloraat/react-native-text';

const UserInput = ({
  name, secureTextEntry = false,
  keyboardType = 'default', setValue, value, autoCapitalize = 'none',
}) => (
  <View style={{ marginHorizontal: 24 }}>
    <Text semi>{name}</Text>
    <TextInput
      autoCorrect={false}
      style={{
        borderBottomWidth: 0.5,
        height: 48,
        borderBottomColor: '#8e93a1',
        marginBottom: 30,
      }}
      onChangeText={(text) => setValue(text)}
      secureTextEntry={secureTextEntry}
      autoCapitalize={autoCapitalize}
      keyboardType={keyboardType}
      value={value}
    />
  </View>
);

export default UserInput;
