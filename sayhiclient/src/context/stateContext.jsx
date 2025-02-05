"use client";

import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ initialState, reducer, children }) => {
  const contextReducer = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={contextReducer}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => useContext(StateContext);
