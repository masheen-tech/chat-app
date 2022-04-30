import React from 'react'

const AppContext = React.createContext();
const AppConsumer = AppContext.Consumer;
const AppProvider = AppContext.Provider;

export { AppContext, AppConsumer, AppProvider };
