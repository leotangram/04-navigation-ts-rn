import React, { FC } from 'react'
import { createContext } from 'react'

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
  return (
    <AuthContext.Provider
      value={{
        authState: authInitialState,
        signIn: () => {}
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
