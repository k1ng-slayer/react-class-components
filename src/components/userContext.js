// 'context' provides a way to pass data thru the component tree directly to the relevant child component without needing to pass props down at every level

import React from "react";

const UserContext = React.createContext("House Stark");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;
