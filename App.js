import React,{useState,useContext} from "react";
import 'react-native-gesture-handler';
import { StyleSheet } from "react-native";
import { AppProvider } from "./context";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


import { Login } from "./screens";
import { Chat } from "./screens";
import { Setting } from "./screens";
import { BackgroundImage } from "react-native-elements/dist/config";

const Stack = createStackNavigator();
const App = () => {
  const [darkmode,setDarkmode] = useState(false)
  const theme = {
    colors:{
      primary:darkmode?"#222" : "#fff",
      background:darkmode?"#222" : "#fff",
      card:darkmode?"#222" : "#fff",
      text:darkmode? "#fff" :"#222",
      border:darkmode?"#fff" : "#222",

    }
  }
  return  (
    <AppProvider value ={{
      darkmode,
      setDarkmode,
    }}>
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen  name="Login" component={Login} />
        <Stack.Screen name="Chat"   component={Chat} />
        <Stack.Screen name="setting"   component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
    </AppProvider>
  )
}

export default App;