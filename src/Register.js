// src/SignUpScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from './redux/actions/authActions';

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Implement sign-up logic here
  };

  return (
    <View>
      <Text>Sign Up</Text>
      <TextInput placeholder="Email" onChangeText={(text) => setEmail(text)} />
      <TextInput placeholder="Password" onChangeText={(text) => setPassword(text)} secureTextEntry />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

export default Register;
