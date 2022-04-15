import React from "react";
import 'react-native-gesture-handler';
import { StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


import { Login } from "./screens";
import { Chat } from "./screens";

const Stack = createStackNavigator();
const App = () => {
  return  (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="Login" component={Login} />
        <Stack.Screen name="Chat"   component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;