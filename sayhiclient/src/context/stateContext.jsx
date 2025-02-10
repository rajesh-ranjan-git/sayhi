"use client";

import reducer, { initialState } from "@/context/stateReducers";
import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => useContext(StateContext);
