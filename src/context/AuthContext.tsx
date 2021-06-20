import React, { FC, useReducer } from 'react'
import { createContext } from 'react'
import { authReducer } from './authReducer'

export interface AuthState {
  isLoggedIn: boolean
  userName?: string
  favoriteIcon?: string
}

export const authInitialState: AuthState = {
  isLoggedIn: false
}

export interface AuthContextProps {
  authState: AuthState
  signIn: () => void
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider: FC = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState)

  const signIn = () => {
    dispatch({ type: 'signIn' })
  }

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
