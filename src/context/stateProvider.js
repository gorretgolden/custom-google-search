

import React, {createContext, useContext, useReducer} from "react";
import App from "../App";
import reducer, {initialState} from '../context/reducer';

//Preparing the data layer
export const  StateContext = createContext();

{/**higher order component, reducer listens to changes */}
export const StateProvider = ({reducer,initialState,children})=>(
   <StateContext.Provider value={useReducer(reducer,initialState)}>
       {children}
   </StateContext.Provider>
  );

  
{/**getting information from the datalayer */}
export const useStateValue = () => useContext(StateContext);