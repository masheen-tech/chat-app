import React from "react";
import { useState,useContext } from "react";
import { Switch,StyleSheet } from "react-native";
import {View, Text} from 'react-native-web';
import { AppContext } from "../context";

export const Setting = () => {
  const {darkmode,setDarkmode}=useContext(AppContext)
  const handledarkmode = (value) => {
    setDarkmode(value)
  }

  const getThememode = () => {
    return darkmode? style.darkmode:'';
  }
return (
    <View style = {[style.container]}>
      <Text style={getThememode()}>
        ENABLE DARK MODE
      </Text >
      <Switch
      value={darkmode}
      onValueChange={handledarkmode}
      />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'left',
    padding:10,
    
  },
  darkmode:{
    backgroundColor:'#222',
    color:'#fff',
  }
})

export default Setting;
