import React,{createContext} from 'react'

const globalState = {
    darkmode: false,
}

export const AppContext = React.createContext(globalState);
export const AppConsumer = AppContext.Consumer;
export const AppProvider = AppContext.Provider;