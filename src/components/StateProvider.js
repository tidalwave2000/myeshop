import React, {createContext, useContext, useReducer} from 'react'

/* use createContext to create a data layer to send data to 
so that it can be used by all components without having to use props */

//prepates the data layer
export const StateContext = createContext();
 

//wrap our app and provide the data layer

export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

//pull information from the data layer

export const useStateValue = () => useContext(StateContext);
