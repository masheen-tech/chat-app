import React, { useState } from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { AppProvider } from "./context";
import { Login, Chat, Setting, ChatList } from "./screens";
import { darkTheme, lightTheme } from "./theme";

const Stack = createStackNavigator();
const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const getTheme = () => {
    return darkMode ? darkTheme : lightTheme;
  };

  return (
    <AppProvider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      <NavigationContainer theme={getTheme()}>
        <Stack.Navigator>
          <Stack.Screen name="ChatList" component={ChatList} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Chat" component={Chat} />
          <Stack.Screen name="Setting" component={Setting} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
