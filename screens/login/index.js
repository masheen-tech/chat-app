import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useContext } from "react";
import { View } from "react-native";
import { Input, Button } from "react-native-elements";
import { useTheme } from "@react-navigation/native";

import { auth } from "../../firebase";
import { AppContext } from "../../context";
import styles from "./styles";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const contextData = useContext(AppContext);
  const { darkMode } = contextData;
  const { colors } = useTheme();

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigation.navigate("ChatList");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <View style={[styles.container]}>
      <Input
        placeholder="Enter your email/username"
        leftIcon={{ type: "material", name: "email", color: colors.placeholder }}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholderTextColor={colors.placeholder}
        inputStyle={{ color: colors.text}}
      />
      <Input
        placeholder="Enter your password"
        leftIcon={{ type: "material", name: "lock", color: colors.placeholder }}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholderTextColor={colors.placeholder}
        inputStyle={{ color: colors.text}}
        secureTextEntry
      />
      <Button
        title="sign in"
        style={[styles.button]}
        onPress={() => signIn()}
      />
      <Button
        title="setting"
        style={[styles.button]}
        onPress={() => navigation.navigate("Setting")}
      />
    </View>
  );
};


export default Login;
