import React, { useContext } from "react";
import { View, Text, Switch } from "react-native";

import { AppContext } from "../../context";
import styles from "./styles";

export const Setting = () => {
  const contextData = useContext(AppContext);
  const handleDarkMode = (value) => {
    contextData.setDarkMode(value);
  };

  const getThemeMode = () => {
    return contextData.darkMode ? styles.darkMode : "";
  };
  return (
    <View style={[styles.container]}>
      <Text style={getThemeMode()}>ENABLE DARK MODE</Text>
      <Switch value={contextData.darkMode} onValueChange={handleDarkMode} />
    </View>
  );
};

export default Setting;
