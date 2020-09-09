import React, { createContext, useContext, useReducer } from "react";

// Preparacion del dataLayer
export const StateContext = createContext();

// Envuelve la APP y provee el dataLayer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Saca la informacion del dataLayer
export const useStateValue = () => useContext(StateContext);
