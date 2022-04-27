import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { auth } from "../../firebase";
import { AppContext } from '../context';
const Login = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {darkmode} =useContext(AppContext);

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

  const setting = async () => {
    navigation.navigate('setting');
  }

  const getthememode = () => {
    return darkmode? styles.darkmode:'';
  }

  const getPlaceholdertextcolor = (darkmode) => {
    return darkmode ? "#222" : undefined
  }

  return (
    <View  style={[styles.container]}>
      <Input
        placeholder='Enter your email/username'
        label='Email/Username'
        leftIcon={{ type: 'material', name: 'email'}}
        value={email}
        onChangeText={text => setEmail(text)}
        placeholderTextColor={getPlaceholdertextcolor(darkmode)}
      />
      <Input
        placeholder='Enter your password'
        label='Password'
        leftIcon={{ type: 'material', name: 'lock',}}
        value={password}
        onChangeText={text => setPassword(text)}
        placeholderTextColor={getPlaceholdertextcolor(darkmode)}
        secureTextEntry
      />
      <Button title="sign in" style={[styles.button]} onPress={() => signin()} />
      <Button title="register" style={[styles.button]} onPress={() => handleLogin()}/>
      <Button title="setting" style={[styles.button]} onPress={() => setting()}/>


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
  },
  darkmode:{
    backgroundColor:'#222',
    color:'#fff',
  }

});


export default Login;
