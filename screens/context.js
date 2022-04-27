import React,{createContext} from "react";

const globalState = {
    darkmode: false ,
}

export const AppContext = React.createContext(globalState);
export const AppProvider = AppContext.Consumer;
export const Appconsumer = AppContext.Provider;