// src/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './redux/actions/authActions';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector((state) => state.auth.error);

  const handleLogin = () => {
    dispatch(login({ email, password }));
  };

  return (
    <View>
      <Text>Login</Text>
      <TextInput placeholder="Email" onChangeText={(text) => setEmail(text)} />
      <TextInput placeholder="Password" onChangeText={(text) => setPassword(text)} secureTextEntry />
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;
