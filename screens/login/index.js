import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { auth } from "../../firebase";

const Login = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const openRegisterScreen = () => {
    navigation.navigate('Register');
  };
  
  const signin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.navigate('Chat');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const handleLogin = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(res => console.log("--res--", res))
      .catch(err => console.log("--err--", err));
  };

  return (
    <View  style={styles.container}>
      <Input
        placeholder='Enter your email/username'
        label='Email/Username'
        leftIcon={{ type: 'material', name: 'email'}}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Input
        placeholder='Enter your password'
        label='Password'
        leftIcon={{ type: 'material', name: 'lock'}}
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
      />
      <Button title="sign in" style={styles.button} onPress={() => signin()} />
      <Button title="register" style={styles.button} onPress={() => handleLogin()}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    marginTop: 100,
  },
  button: {
    width: 370,
    marginTop: 10
  }
});

export default Login;
