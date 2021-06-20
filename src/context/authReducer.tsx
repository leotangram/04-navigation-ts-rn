import { AuthState, authInitialState } from './AuthContext'

type AuthAction =
  | { type: 'signIn' }
  | { type: 'logout' }
  | { type: 'changeFavoriteIcon'; payload: string }

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        userName: 'no-username-yer'
      }
    case 'logout':
      return {
        ...authInitialState
      }
    case 'changeFavoriteIcon':
      return {
        ...state,
        favoriteIcon: action.payload
      }

    default:
      return state
  }
}
