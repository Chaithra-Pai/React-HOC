import React from "react";

const UserContext = React.createContext('Coder Coder')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserConsumer , UserProvider }