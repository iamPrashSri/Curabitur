import { createContext, useContext, useReducer } from "react";

// Create the Data Layer to push information into
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// My created hook that will give me data anywhere in the application
export const useStateValue = () => useContext(StateContext);
