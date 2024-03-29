import { createContext, useEffect, useReducer } from "react";
import { reducer } from "../../Reducers/reducer";
import axios from "axios";

export const initialState = {
  theme: 'light', 
  odontologosList: [],
  odontologoData: {},
  favs: JSON.parse(localStorage.getItem('favs')) || []
}

export const ContextGlobal = createContext();

export const url = 'https://jsonplaceholder.typicode.com/users'

export const ContextProvider = ({ children }) => {

  const [ state, dispatch ] = useReducer( reducer, initialState)

  useEffect(() => {
    axios(url)
      .then( res => dispatch({ type: 'GET_LIST', payload: res.data }) )
  }, [])

  useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(state.favs))
    }, [ state.favs ])

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};