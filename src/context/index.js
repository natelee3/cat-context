import { createContext, useContext } from "react";

export const StateContext = createContext({});

export const StateProvider = StateContext.Provider;
export const StateConsumer = StateContext.Consumer;

export const useStateValue = () => useContext(StateContext);
