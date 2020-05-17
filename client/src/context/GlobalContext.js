import React, { createContext, useReducer } from 'react'
import { globalReducer } from './globaleReducer'


const initialState = {
  products: []
}


export const GlobalContext = createContext(initialState)

export default function GobaleStateProvider({ children }) {

  const [state, dispatch] = useReducer(globalReducer, initialState)
  //Actions

  const addProduct = (newProduct) => {
    dispatch({
      type: 'ADD_PRODUCT',
      payload: newProduct
    })
  }

  return (
    <GlobalContext.Provider value={{
      products: state.products,
      addProduct
    }}>
      {children}
    </GlobalContext.Provider >
  )
}

